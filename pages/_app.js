import "../styles/globals.css";
import "../styles/tailwind.css";
import { MoralisProvider } from "react-moralis";

function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider
      appId="bE07PkT1UrZliHkDGdstQGdail7J76TONYf0yILP"
      serverUrl="https://bybudhwrcolj.usemoralis.com:2053/server"
    >
      <Component {...pageProps} />
    </MoralisProvider>
  );
}

export default MyApp;
