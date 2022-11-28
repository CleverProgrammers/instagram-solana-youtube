import '../styles/globals.css'
import { useEffect, useMemo, useState } from "react";
import { RPC_ENDPOINT } from "../utils";

//Solana Imports

function MyApp({ Component, pageProps }) {
  const [mounted, setMounted] = useState(false);

  // In order to fix SSR error with Next
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <Component {...pageProps} />
  )
}

export default MyApp
