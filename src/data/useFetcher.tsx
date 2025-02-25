import axios, { AxiosError, isAxiosError } from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
import { returnErrors } from "./store/reducers/errorReducer";
import { useAppDispatch } from "./store/hooks";

export const apiCall = async ({
	type,
	url,
	data,
	getter,
	headers,
	noToast,
}: apiCallType): Promise<apiCallResType> => {
	try {
		let res;
		if (type === "get")
			res = await axios.get(url, {
				headers: {
					...headers,
				},
			});
		if (type === "post")
			res = await axios.post(
				url,
				{ ...data },
				{
					headers: {
						...headers,
					},
				}
			);
		if (type === "put")
			res = await axios.put(
				url,
				{ ...data },
				{
					headers: {
						...headers,
					},
				}
			);
		if (type === "patch")
			res = await axios.patch(
				url,
				{ ...data },
				{
					headers: {
						...headers,
					},
				}
			);
		if (type === "delete")
			res = await axios.delete(url, {
				headers: {
					...headers,
				},
			});
		if (type === "file") {
			res = await axios.post(
				`/file`,
				{ ...data },
				{
					headers: {
						"Content-Type": "multipart/form-data",
					},
				}
			);
		}

		let response = res?.data;
		if (!["file", "get", "patch"]?.includes(type))
			if (!noToast) toast.success(res?.data?.message);
		if (getter) getter(response);
		return { response };
	} catch (error) {
		let message = "Unknown Error";
		if (error instanceof Error) message = error.message;
		if (isAxiosError(error)) {
			if (error) console.log({ error: error?.response?.data, err: error });
			if (error?.response?.status === 429) toast.error(error?.response?.data);
			const err = error as AxiosError;
			if (err?.response?.data) {
        if ((type && type !== "get") || (type && type === "get" && noToast)) {
          let { error: errors }: resErr = err?.response?.data;
          if (errors && errors?.length > 1) {
            return { errArr: errors };
          } else {
            let errMsg =
                error?.response?.data?.message ||
                error?.response?.data?.error?.[0]?.message ||
                error?.response?.data?.error?.[0]?.msg ||
                error?.message,
              possibleLogout: string[] = [
                "Invalid Authentication, Unauthorized User",
                "Unauthorized User, User not found",
              ];

            if (possibleLogout?.includes(errMsg)) {
              localStorage.clear();
              window.location.reload();
            } else return { errMsg };
          }
        }
        return { errMsg: message };
      }
      return { errMsg: message };
		} else {
			return { errMsg: message };
		}
	}
};

export const useApiCall = () => {
	let [loading, setLoading] = useState<boolean | string>(false),
		dispatch = useAppDispatch();

	const onSubmitApply = async ({
		type,
		url,
		toggleModal,
		data,
		loadingValue,
		setResponse,
		headers,
		noToast = false,
	}: apiCallType & { [key: string]: any }) => {
		console.log({ data });

		let newLoad: string | boolean = true;
		if (loadingValue) newLoad = loadingValue;

		setLoading(newLoad);
		let { response, errArr, errMsg } = await apiCall({
			url,
			type,
			data,
			headers,
			noToast,
		});
		// console.log({ response, errArr, errMsg });
		if (errArr) {
			setLoading(false);
			return dispatch(returnErrors(errArr));
		}
		if (errMsg) {
			setLoading(false);
			return toast.error(errMsg);
		}
		setLoading(false);
		if (response) {
			if (toggleModal) toggleModal(false);
			if (setResponse) setResponse(response);
			return;
		}
		setLoading(false);
	};

	return {
		loading,
		onSubmitAPI: onSubmitApply,
	};
};

export let numberWithCommas = (x: string) => {
	return x ? x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : x;
};
