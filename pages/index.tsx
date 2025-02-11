import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { features } from "@/utils/data";
import { Fade } from "react-awesome-reveal";
import { getCookie, setCookie } from "cookies-next";
import Tech from "@/components/Tech";
import MobileDrawer from "@/components/MobileDrawer";
import { Key } from "tabler-icons-react";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [fade, setFade] = useState<boolean>(true);

  const myRef = useRef<any>(null);

  useEffect(() => {
    const getCookies = () => {
      const firstTime = getCookie("firstTime");
      if (!firstTime) {
        setFade(true);
        setTimeout(() => {
          setCookie("firstTime", true, { maxAge: 60 * 2 });
        }, 4000);
      } else {
        setFade(false);
      }
    };
    getCookies();
  }, []);

  const hej = features.length - 1;
  return (
    <>
      <Head>
        <title>Portfolio - Angelica Moberg Skoglund</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/newlogo.png" />
      </Head>
      <main
        style={{
          paddingTop: 16,
          /* paddingTop: 96  */
        }}
        className="bg-black font-primary flex flex-col items-center"
      >
        {/*  <Hero /> */}
        {fade ? (
          <Fade delay={30} triggerOnce={true} duration={2000} direction="up">
            <div
              style={{ minHeight: "80vh" }}
              className="px-5 text-white flex justify-center items-start sm:items-center flex-col"
            >
              <h1
                style={{ fontSize: 44, lineHeight: 1.2 }}
                className="flex sm:hidden"
              >
                Web Developer <br /> & Coffee <br />
                Enthusiast
              </h1>
              <h1 className="hidden text-5xl sm:flex md:text-6xl lg:text-7xl text-center">
                Web Developer <br /> & Coffee Enthusiast
              </h1>
              <button
                onClick={() => myRef.current.scrollIntoView()}
                className="rounded-md mt-10 bg-black border border-white py-4 z-50 px-5 text-sm sm:text-base font-semi text-white shadow-sm hover:bg-[#33b2b0b5] hover:text-teal-50 hover:duration-200"
              >
                Check out my projects
              </button>
              <Link href={"/aboutme"} scroll={false}>
                <button className="rounded-md mt-4 lg:mt-6  bg-black border border-white py-4 z-50 px-5 text-sm sm:text-base font-semi text-white shadow-sm hover:bg-[#33b2b0b5] hover:text-teal-50 hover:duration-200">
                  Who am I?
                </button>
              </Link>
            </div>
          </Fade>
        ) : (
          <div
            style={{ minHeight: "80vh" }}
            className="px-5 text-white flex justify-center items-start sm:items-center flex-col"
          >
            <h1
              style={{ fontSize: 44, lineHeight: 1.2 }}
              className="flex sm:hidden"
            >
              Web Developer <br /> & Coffee <br />
              Enthusiast
            </h1>
            <h1 className="hidden text-5xl sm:flex md:text-6xl lg:text-7xl text-center">
              Web Developer <br /> & Coffee Enthusiast
            </h1>

            <button
              onClick={() => myRef.current.scrollIntoView()}
              className="rounded-md mt-10 bg-black border border-white py-4 z-50 px-5 text-xs sm:text-sm font-semi text-white shadow-sm hover:bg-[#33b2b0b5] hover:text-teal-50 hover:duration-200"
            >
              Check out my projects
            </button>

            <Link href={"/aboutme"} scroll={false}>
              <button className="rounded-md mt-4 lg:mt-6  bg-black border border-white py-4 z-50 px-5 text-xs sm:text-sm font-semi text-white shadow-sm hover:bg-[#33b2b0b5] hover:text-teal-50 hover:duration-200">
                Who am I?
              </button>
            </Link>
          </div>
        )}

        {/* Tech */}

        <Tech />

        {/*   <Presentation /> */}

        <div
          ref={myRef}
          id="projects"
          style={{ paddingTop: 96 }}
          className="w-full  max-w-7xl py-8 sm:py-10 px-4 sm:px-10 lg:px-4 lg:py-16 "
        >
          <div className="mx-auto px-4 lg:max-w-none">
            <div className="max-w-3xl">
              <p className="font-primary mt-2 text-3xl font-semi tracking-tight text-slate-50 sm:text-5xl lg:text-5xl">
                Projects
              </p>
            </div>

            <div className="space-y-18 md:space-y-18 pt-10 sm:mt-8 sm:pt-16">
              {features.map((feature, i) => (
                <div key={i}>
                  <div
                    id={feature.slug}
                    key={feature.name}
                    className="font-primary flex flex-col-reverse lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-8 lg:mb-36"
                  >
                    <div className="mt-6 lg:col-span-5 lg:mt-0 xl:col-span-4">
                      <Link href={"/" + feature.slug}>
                        <h3 className="text-xl font-medium text-gray-300 hidden lg:flex">
                          {feature.name}
                        </h3>
                      </Link>
                      <p className="text-white text-sm font">Type</p>
                      <ul>
                        <span
                          style={{
                            color: "white",
                            backgroundColor:
                              feature.type == "Hobby"
                                ? "#B8918A"
                                : feature.type == "LIA project"
                                ? "#65877F"
                                : feature.type == "Master thesis"
                                ? "#A37067"
                                : feature.type == "School project"
                                ? "#59757D"
                                : "black",
                          }}
                          className="mr-1 mt-2 inline-flex items-center rounded-full bg-white px-2.5 py-0.5 text-xs font-medium text-teal-900"
                        >
                          {feature.type}
                        </span>
                        ;
                      </ul>

                      <p className="text-white text-sm font mt-2">Stack/Tech</p>
                      <ul>
                        {feature.stack.map((st, i) => {
                          return (
                            <span
                              key={i}
                              className="mr-1 mt-2 inline-flex items-center rounded-full bg-white px-2.5 py-0.5 text-xs font-medium text-teal-900"
                            >
                              {st}
                            </span>
                          );
                        })}
                        ;
                      </ul>
                    </div>

                    <div className="flex-auto lg:col-span-7 xl:col-span-8">
                      <div className="relative aspect-w-5 aspect-h-3 overflow-hidden rounded-lg bg-black">
                        <div className="gap-2 z-50 opacity-0 hover:opacity-100 flex justify-center items-center hover:bg-black/20 hover:duration-200 ">
                          {!feature.repo ? null : (
                            <Link target="_blank" href={feature.repo}>
                              <button
                                type="button"
                                className="rounded-md bg-black border border-white py-2.5 z-50 px-3.5 sm:py-4 sm:px-5  text-xs sm:text-sm font-semi text-white shadow-sm hover:bg-[#2b9593] hover:text-teal-50 hover:duration-200"
                              >
                                Go to repo
                              </button>
                            </Link>
                          )}
                          {!feature.website ? null : (
                            <Link target="_blank" href={feature.website}>
                              <button
                                type="button"
                                className="rounded-md bg-black border border-white py-2.5 z-50 px-3.5 sm:py-4 sm:px-5   text-xs sm:text-sm font-semi text-white shadow-sm hover:bg-[#2b9593] hover:text-teal-50 hover:duration-200"
                              >
                                Go to website
                              </button>
                            </Link>
                          )}
                          <Link href={"/" + feature.slug}>
                            <button
                              type="button"
                              className="rounded-md bg-black border border-white py-2.5 z-50 px-3.5 sm:py-4 sm:px-5   text-xs sm:text-sm font-semi text-white shadow-sm hover:bg-[#2b9593] hover:text-teal-50 hover:duration-200"
                            >
                              Details
                            </button>
                          </Link>
                        </div>
                        <img
                          src={feature.imageSrc}
                          alt={feature.imageAlt}
                          className="object-contain object-top "
                        />
                      </div>
                    </div>
                    <Link href={"/" + feature.slug}>
                      <h3 className="text-xl mb-5 font-medium text-gray-300 flex lg:hidden">
                        {feature.name}
                      </h3>
                    </Link>
                  </div>
                  {!hej ? null : hej == i ? null : (
                    <div className="flex w-full justify-center">
                      <div className="w-1/2 h-[1px] rounded-lg bg-white/10 my-16 flex lg:hidden "></div>{" "}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
