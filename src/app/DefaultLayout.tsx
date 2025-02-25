"use client";
import { Provider } from "react-redux";
import { ToastContainer, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import store from "@/data/store/store";
import { SetAuthToken, SetDefaultHeaders, TOKEN } from "@/data/Config";
import { loadUser } from "@/data/store/reducers/userSlice";
import { useEffect } from "react";

SetDefaultHeaders();

if (typeof window !== "undefined")
  if (localStorage.getItem(TOKEN)) {
    SetAuthToken(localStorage.getItem(TOKEN));
  }

export default function DefaultRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <>
      <ToastContainer position="top-right" theme="colored" transition={Zoom} />

      <Provider store={store}>{children}</Provider>
    </>
  );
}
