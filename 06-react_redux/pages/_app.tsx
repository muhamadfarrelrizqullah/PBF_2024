import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/globals.css";
import { use, useEffect } from "react";

function MyApp({ Component, pageProps } : { Component:any, pageProps:any }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;