import "../styles/globals.css";
import Layout from "../components/Layout";
import { SWRConfig } from "swr";
import axios from "axios";
import { AppProps } from "next/app";
import theme from "./theme";
import { ThemeProvider } from "@material-ui/core/styles";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SWRConfig
          value={{
            fetcher: (url: string) => axios(url).then((res) => res.data),
          }}
        >
          <Component {...pageProps} />
        </SWRConfig>
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
