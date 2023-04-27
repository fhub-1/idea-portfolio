import Alert from "@/components/Alert";
import NewsLeter from "@/components/modal/NewsLatter";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Alert />
      <Component {...pageProps} />
    </>
  );
}
