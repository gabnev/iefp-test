import "../styles/globals.css";
import Layout from "../components/Layout";
import { SWRConfig } from "swr";
import axios from "axios";
import { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <SWRConfig
        value={{ fetcher: (url: string) => axios(url).then((res) => res.data) }}
      >
        <Component {...pageProps} />
      </SWRConfig>
    </Layout>
  );
}

export default MyApp;
