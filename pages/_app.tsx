import { Lora, PT_Serif, Montserrat } from "@next/font/google";
import { AppProps } from "next/app";
import "@/styles/globals.css";
import Head from "next/head";
import Script from "next/script";
import Layout from "@/components/Layout";

const lora = Lora({
  subsets: ["latin"],
});
const ptSerif = PT_Serif({
  weight: ["400", "700"],
  subsets: ["latin", "cyrillic", "latin-ext", "cyrillic-ext"],
});
const mont = Montserrat({
  subsets: ["latin", "cyrillic", "latin-ext", "latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>
        {`
          :root {
            --mont-font: ${mont.style.fontFamily};
          }
        `}
      </style>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
export default App;
