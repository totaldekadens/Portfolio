import { Lora, PT_Serif } from "@next/font/google";
import { AppProps } from "next/app";
import "@/styles/globals.css";
const lora = Lora({
  subsets: ["latin"],
});
const ptSerif = PT_Serif({
  weight: ["400", "700"],
  subsets: ["latin", "cyrillic", "latin-ext", "cyrillic-ext"],
});

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>
        {`
          :root {
            --ptSerif-font: ${ptSerif.style.fontFamily};
          }
        `}
      </style>
      <Component {...pageProps} />;
    </>
  );
}
export default App;
