'use client';

import { ThemeProvider } from "@mui/material";
import theme from "../theme";
import { Provider } from "react-redux";
import { store, persistor } from "@/redux/store";
import { PersistGate } from "redux-persist/integration/react";

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Providers = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true
    });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        {/* // problem*/}
        {/* <PersistGate loading={null} persistor={persistor}> */}
        {children}
        {/* </PersistGate> */}
      </Provider>
    </ThemeProvider>
  );
}

export default Providers;