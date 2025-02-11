import PresText from "@/components/PresText";
import PresentationDesktop from "@/components/PresentationDesktop";
import PresentationMobile from "@/components/PresentationMobile";
import { HashtagIcon } from "@heroicons/react/20/solid";
import Head from "next/head";
import { useRouter } from "next/router";
import { Fade } from "react-awesome-reveal";

const AboutMe = () => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>About me - Angelica Moberg Skoglund</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/newlogo.png" />
      </Head>

      <main
        style={{ /* paddingTop: 96,  */ paddingTop: 16, minHeight: "100vh" }}
        className="bg-black font-primary flex flex-col items-center pb-6"
      >
        {" "}
        <nav aria-label="Breadcrumb" className="w-full">
          <ol
            role="list"
            className="mx-auto mb-4 flex items-center space-x-2 px-4 sm:px-6 lg:px-8"
          >
            <li className="text-sm">
              <div className="flex items-center">
                <div
                  onClick={() => router.push("/")}
                  aria-current="page"
                  className="font-medium text-gray-500 hover:text-gray-600 cursor-pointer"
                >
                  Portfolio
                </div>
                <svg
                  width={16}
                  height={20}
                  viewBox="0 0 16 20"
                  fill="currentColor"
                  aria-hidden="true"
                  className="h-5 w-4 text-gray-300"
                >
                  <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                </svg>
              </div>
            </li>
            <li className="text-sm">
              <div className="flex items-center">
                <div aria-current="page" className="font-medium text-gray-500">
                  About me
                </div>
              </div>
            </li>
          </ol>
        </nav>
        <PresentationMobile />
        <PresentationDesktop />
        {/* <Fade triggerOnce={true} duration={2000} delay={500}>
          <div className="mx-auto w-full max-w-7xl px-10 py-8 sm:py-10 sm:px-16 md:px-16 lg:px-8 lg:py-16 ">
            <p className="font-primary mt-2 text-3xl font-semi tracking-tight text-slate-50 sm:text-4xl  lg:text-5xl">
              Tech / Stack
            </p>

            <div className="mt-10 flex justify-around flex-col md:flex-row text-white space-y-18 md:space-y-18 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16">
              <div className="flex flex-col basis-full px-1 md:basis-1/3 mb-6 md:mb-0">
                <p style={{ fontSize: 18, marginBottom: 10 }}>
                  Tech I’m comfortable with:
                </p>
                <ul className="pl-4">
                  <li className="text-sm mb-1">
                    <div className="flex gap-1 items-center">
                      <HashtagIcon width={12} />
                      <p style={{ paddingTop: 2 }}>React.js</p>
                    </div>
                  </li>
                  <li className="text-sm mb-1">
                    <div className="flex gap-1 items-center">
                      <HashtagIcon width={12} />
                      <p style={{ paddingTop: 2 }}>TypeScript</p>
                    </div>
                  </li>
                  <li className="text-sm mb-1">
                    <div className="flex gap-1 items-center">
                      <HashtagIcon width={12} />
                      <p style={{ paddingTop: 2 }}>Next.js</p>
                    </div>
                  </li>
                  <li className="text-sm mb-1">
                    <div className="flex gap-1 items-center">
                      <HashtagIcon width={12} />
                      <p style={{ paddingTop: 2 }}>Node.js</p>
                    </div>
                  </li>
                  <li className="text-sm mb-1">
                    <div className="flex gap-1 items-center">
                      <HashtagIcon width={12} />
                      <p style={{ paddingTop: 2 }}>Mantine.dev</p>
                    </div>
                  </li>
                  <li className="text-sm mb-1">
                    <div className="flex gap-1 items-center">
                      <HashtagIcon width={12} />
                      <p style={{ paddingTop: 2 }}>MongoDB</p>
                    </div>
                  </li>
                  <li className="text-sm mb-1">
                    <div className="flex gap-1 items-center">
                      <HashtagIcon width={12} />
                      <p style={{ paddingTop: 2 }}>Stripe.js</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col basis-1/3 px-1 mb-6 md:mb-0">
                {" "}
                <p style={{ fontSize: 18, marginBottom: 10 }}>
                  Tech I’ve learned during the education but was a while ago I
                  practiced:
                </p>
                <ul className="pl-4">
                  <li className="text-sm mb-1">
                    <div className="flex gap-1 items-center">
                      <HashtagIcon width={12} />
                      <p style={{ paddingTop: 2 }}>Wordpress</p>
                    </div>
                  </li>
                  <li className="text-sm mb-1">
                    <div className="flex gap-1 items-center">
                      <HashtagIcon width={12} />
                      <p style={{ paddingTop: 2 }}>WooCommerce</p>
                    </div>
                  </li>
                  <li className="text-sm mb-1">
                    <div className="flex gap-1 items-center">
                      <HashtagIcon width={12} />
                      <p style={{ paddingTop: 2 }}>PHP</p>
                    </div>
                  </li>
                  <li className="text-sm mb-1">
                    <div className="flex gap-1 items-center">
                      <HashtagIcon width={12} />
                      <p style={{ paddingTop: 2 }}>MySQL</p>
                    </div>
                  </li>
                  <li className="text-sm mb-1">
                    <div className="flex gap-1 items-center">
                      <HashtagIcon width={12} />
                      <p style={{ paddingTop: 2 }}>Material UI</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col basis-1/3 px-1">
                {" "}
                <p style={{ fontSize: 18, marginBottom: 10 }}>
                  Tech I’m learning at the moment:
                </p>
                <ul className="pl-4">
                  <li className="text-sm mb-1">
                    <div className="flex gap-1 items-center">
                      <HashtagIcon width={12} />
                      <p style={{ paddingTop: 2 }}>Storyblok</p>
                    </div>
                  </li>
                  <li className="text-sm mb-1">
                    <div className="flex gap-1 items-center">
                      <HashtagIcon width={12} />
                      <p style={{ paddingTop: 2 }}>BigCommerce</p>
                    </div>
                  </li>
                  <li className="text-sm mb-1">
                    <div className="flex gap-1 items-center">
                      <HashtagIcon width={12} />
                      <p style={{ paddingTop: 2 }}>Tailwind UI</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Fade> */}
      </main>
    </>
  );
};

export default AboutMe;
