/* eslint-disable @typescript-eslint/no-explicit-any */
import moment from "moment";
import { createContext, JSX, PropsWithChildren } from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useAppSelector } from "./store/hooks";
import { authUserSelector } from "./store/selectors/userSelector";

type ContextType = {
  generateGreetings?: () => string;
  handleCapitalize?: (word: string) => string;

  numberWithCommas: (x: string) => string;

  nav?: boolean;
  countries?: any;
  socket?: any;
  setSocket?: React.Dispatch<React.SetStateAction<any>>;
  locationState: any;
  setLocationState: React.Dispatch<React.SetStateAction<any>>;
  toggleNav?: () => void;
  nairaSignNeutral?: string;
  nairaSign?: JSX.Element;
  msisdn: any;
  country: any;
  convertCamelCase: (str: string) => string;
};

export const GlobalState = createContext({} as ContextType);

const DataProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [nav, setNav] = useState(false);
  const [socket, setSocket] = useState(false),
    [locationState, setLocationState] = useState(false),
    [country, setCountry] = useState<any>(null),
    [msisdn, setMsisdn] = useState<any>(null),
    { user } = useAppSelector(authUserSelector);

  const handleCapitalize = (word: string) => {
    const splitter = word.trim().split(" ");
    const firstCap = splitter[0].split("");
    const remaining = splitter.slice(1, splitter.length).join(" ");

    const firstCapOne = firstCap[0].toUpperCase();
    const firstCapTwo = firstCap.slice(1, firstCap.length).join("");

    const joinFirst = `${firstCapOne}${firstCapTwo}`;

    return `${joinFirst} ${remaining}`;
  };
  function generateGreetings(): string {
    const currentHour: number = Number(moment().format("HH"));

    if (currentHour >= 3 && currentHour < 12) {
      return "Good Morning";
    } else if (currentHour >= 12 && currentHour < 15) {
      return "Good Afternoon";
    } else if (currentHour >= 15 && currentHour < 20) {
      return "Good Evening";
    } else if (currentHour >= 20 || currentHour < 3) {
      return "Good Night";
    } else {
      return "Hello";
    }
  }

  useEffect(() => {
    const fetchCountry = async () => {
      try {
        const response = await fetch("https://ipapi.co/json/");
        const data = await response.json();
        console.log({ data }, "fetch");
        setCountry(data.country_name);
      } catch (error) {
        console.error("Error fetching country:", error);
      }
    };

    fetchCountry();
  }, []);

  const convertCamelCase = (str: string) => {
    const result = str ? str?.replace(/([A-Z])/g, " $1") : str;
    const finalResult = str
      ? result?.charAt(0)?.toUpperCase() + result?.slice(1)
      : str;

    return finalResult;
  };
  useEffect(() => {
    const fetchNetwork = async () => {
      try {
        const response = await axios.post(
          "https://get2know.martadholdings.com/g2k/",
          {
            action: "GRW",
            msisdn: user?.phone || (user as any)?.createdBy?.phone,
          },
          {
            headers: {
              Authorization: null,
              "Content-Type": "application/x-www-form-urlencoded",
            },
          },
        );
        console.log({ data: response?.data }, "network");
        setMsisdn(response?.data);
      } catch (error) {
        console.error("Error fetching country:", error);
      }
    };
    if (user) fetchNetwork();
  }, [user]);

  const numberWithCommas = (x: string) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const nairaSignNeutral = "₦";
  const nairaSign = <span className="fontInherit">&#8358;</span>;

  const toggleNav = () => {
    setNav(!nav);
  };

  const state: ContextType = {
    handleCapitalize,

    numberWithCommas,

    generateGreetings,

    nav,
    toggleNav,
    nairaSignNeutral,
    nairaSign,
    socket,
    setSocket,
    locationState,
    setLocationState,
    country,
    msisdn,
    convertCamelCase,
  };

  return <GlobalState.Provider value={state}>{children}</GlobalState.Provider>;
};

export default DataProvider;
