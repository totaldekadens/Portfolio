import { useEffect, useState } from "react";
import { HashtagIcon, StarIcon } from "@heroicons/react/20/solid";
import { RadioGroup } from "@headlessui/react";
import { useRouter } from "next/router";
import { Carousel } from "flowbite-react";
import Head from "next/head";
import { features } from "@/utils/data";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function Website() {
  const [list, setList] = useState(true);

  const { query } = useRouter();
  const slug = query.slug;

  const site = features.filter((website) => website.slug == slug);

  const info = site[0];

  useEffect(() => {
    if (info) {
      if (info.imagesDesk.length < 2) {
        if (list) {
          setList(false);
        }
      }
    }
  }, [list]);
  const router = useRouter();

  return (
    <>
      <Head>
        <title>{info ? info.name : null} - Angelica Moberg Skoglund</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/newlogo.png" />
      </Head>
      <div
        className="bg-black"
        style={{ /* paddingTop: 96  */ paddingTop: 16 }}
      >
        <div className="pt-3 sm:pt-6" style={{ minHeight: "100vh" }}>
          <nav aria-label="Breadcrumb">
            <ol
              role="list"
              className="mx-auto mb-4 flex items-center space-x-2 px-4 sm:px-6 lg:px-8"
            >
              <li className="text-sm">
                <div className="flex items-center">
                  <div
                    onClick={() => router.back()}
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
                  <div
                    aria-current="page"
                    className="font-medium text-gray-500"
                  >
                    {info ? info.name : null}
                  </div>
                </div>
              </li>
            </ol>
          </nav>

          {/* Image gallery */}

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
            }}
            className={
              info && info.imagesMob.length > 0
                ? "mt-6 h-64 px-4 sm:h-96 lg:h-96"
                : "mt-6 mb-10 px-4 h-64 sm:h-96 lg:h-96"
            }
          >
            {list ? (
              <Carousel slide={false} indicators={false}>
                {info && info.imagesDesk.length > 0
                  ? info.imagesDesk.map((image, i) => (
                      <img
                        className="object-contain object-top h-full"
                        key={i}
                        alt={image.alt}
                        src={image.src}
                      />
                    ))
                  : null}
              </Carousel>
            ) : (
              <Carousel
                slide={false}
                indicators={false}
                rightControl
                leftControl
              >
                {info && info.imagesDesk.length > 0
                  ? info.imagesDesk.map((image, i) => (
                      <img
                        className="object-contain object-top h-full"
                        key={i}
                        alt={image.alt}
                        src={image.src}
                      />
                    ))
                  : null}
              </Carousel>
            )}
          </div>
          {info && info.imagesMob.length > 0 ? (
            <div className="bg-black">
              <div className="pb-16 pt-0 h-100 sm:py-24 lg:mx-auto lg:max-w-7xl lg:px-8">
                <div className="relative mt-8">
                  <div className="relative -mb-6 w-full overflow-x-auto pb-6">
                    <ul
                      role="list"
                      className="mx-4 inline-flex h-full space-x-8 sm:mx-6" // lg:mx-0 lg:grid lg:grid-cols-4 lg:gap-x-8 lg:space-x-0"
                    >
                      {info.imagesMob.map((image, i) => (
                        <li
                          key={i}
                          className="inline-flex h-full w-64 flex-col text-center lg:w-auto"
                        >
                          <div className="group relative">
                            <div
                              style={{ height: 500, width: 231 }}
                              className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-black"
                            >
                              <img
                                src={image.src}
                                alt={image.alt}
                                className="w-full h-full object-contain object-top"
                              />
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ) : null}

          {info && info.imagesAdmin && info.imagesAdmin.length > 0 ? (
            <div className="bg-black mx-auto max-w-2xl px-4 pt-10 sm:pt-auto  sm:px-6 lg:max-w-7xl lg:gap-x-8 lg:px-8 lg:pb-24">
              <div className="sm:pb-10 pt-0 lg:mx-auto lg:max-w-7xl lg:px-8">
                <div className="max-w-3xl">
                  <p className="font-primary text-3xl font-semi tracking-tight text-slate-50 sm:text-5xl lg:text-5xl">
                    Admin panel
                  </p>
                </div>
                <div className="space-y-18 md:space-y-18 pt-10 ">
                  {info.imagesAdmin.map((item, i) => {
                    return (
                      <div key={i} className="pb-10">
                        <h3 className="text-2xl tracking-tight text-white  sm:text-3xl pb-4">
                          {item.title}
                        </h3>
                        <div className="relative -mb-6 w-full pb-6">
                          <ul
                            role="list"
                            className=" h-full sm:mx-6 grid grid-cols-1 gap-8 lg:space-x-0"
                          >
                            {item.images.map((image: any, i: number) => (
                              <li
                                key={i}
                                className="h-full flex-col text-center lg:w-auto"
                              >
                                <div className="group relative w-full flex justify-center">
                                  <div
                                    style={{ width: 800 }}
                                    className="aspect-h-1 w-full overflow-hidden rounded-md bg-black sm:w-[800px] "
                                  >
                                    <img
                                      src={image.src}
                                      alt={image.alt}
                                      className="w-full h-full object-contain object-top"
                                    />
                                  </div>
                                </div>
                              </li>
                            ))}
                          </ul>

                          <div className="pt-8 ">
                            <h4 className="text-white font-semibold pb-2 ">
                              {item.subTitle ? item.subTitle : null}
                            </h4>
                            {!item.descriptions
                              ? null
                              : item.descriptions.map(
                                  (desc: any, i: number) => (
                                    <div key={i} className="pb-6">
                                      <p className="text-white underline pb-1">
                                        {" "}
                                        {desc.title}
                                      </p>
                                      {desc.list.map((hej: any, i: number) => (
                                        <div key={i} className="pl-4 pb-4">
                                          <p className="text-white ">
                                            {hej.item}
                                          </p>
                                          <p className="text-white pl-4 opacity-70">
                                            {hej.subItem}
                                          </p>
                                        </div>
                                      ))}
                                      <p className="text-white">
                                        {desc.subItem}
                                      </p>
                                    </div>
                                  )
                                )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ) : null}

          {info && info.imagesWP && info.imagesWP.length > 0 ? (
            <div className="bg-black mx-auto max-w-2xl px-4 pt-10 sm:pt-auto  sm:px-6 lg:max-w-7xl lg:gap-x-8 lg:px-8 lg:pb-24">
              <div className="sm:pb-10 pt-0 lg:mx-auto lg:max-w-7xl lg:px-8">
                <div className="max-w-3xl">
                  <p className="font-primary text-3xl font-semi tracking-tight text-slate-50 sm:text-5xl lg:text-5xl">
                    Extras
                  </p>
                </div>
                <div className="space-y-18 md:space-y-18 pt-10 ">
                  {info.imagesWP.map((item, i) => {
                    return (
                      <div key={i} className="pb-10">
                        <h3 className="text-2xl tracking-tight text-white  sm:text-3xl pb-4">
                          {item.title}
                        </h3>
                        <div className="pt-8 ">
                          {/*  <h4 className="text-white font-semibold pb-2 ">
                            {item.subTitle ? item.subTitle : null}
                          </h4> */}
                          {!item.description ? null : (
                            <div key={i} className="pb-6">
                              <p className="text-white pb-1">
                                {" "}
                                {item.description}
                              </p>
                            </div>
                          )}
                        </div>
                        <div className="relative -mb-6 w-full pb-6">
                          <ul
                            role="list"
                            className=" h-full sm:mx-6 grid grid-cols-1 gap-8 lg:space-x-0"
                          >
                            {item.images.length < 1 ? null : (
                              <div
                                style={{
                                  display: "flex",
                                  justifyContent: "center",
                                  width: "100%",
                                }}
                                className="w-full h-[600px]"
                              >
                                <Carousel slide={false} indicators={false}>
                                  {item.images && item.images.length > 0
                                    ? item.images.map(
                                        (image: any, i: number) => (
                                          <img
                                            className="object-contain object-top h-full"
                                            key={i}
                                            alt={image.alt}
                                            src={image.src}
                                          />
                                        )
                                      )
                                    : null}
                                </Carousel>
                              </div>
                            )}
                            {!item.videos
                              ? null
                              : item.videos.map((video: any, i: number) => (
                                  <li
                                    key={i}
                                    className="h-full flex-col w-auto items-center justify-start"
                                  >
                                    <div className="group relative w-full flex justify-center">
                                      <div
                                        //style={{ width: 800 }}
                                        className="aspect-h-1 w-full overflow-hidden rounded-md bg-black flex justify-center "
                                      >
                                        <video
                                          autoPlay
                                          loop
                                          muted
                                          // controls
                                          style={{
                                            width: "800px",
                                          }}
                                        >
                                          <source src={video.src} />
                                        </video>
                                      </div>
                                    </div>
                                  </li>
                                ))}
                          </ul>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ) : null}

          {/* Info */}
          <div className="mx-auto max-w-2xl px-4 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24">
            <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
              <h1 className="text-2xl font-bold tracking-tight text-gray-300 sm:text-3xl">
                {info ? info.name : null}
              </h1>
            </div>

            {/* Options */}
            <div className="mt-4 lg:row-span-3 lg:mt-0">
              {!info ? null : info.website ? (
                <a target="_blank" href={info.website}>
                  <button className="mt-10 flex w-full justify-center rounded-md bg-black border border-white py-4 z-50 px-5 font-semi text-white shadow-sm hover:bg-[#2b9593] hover:text-teal-50 hover:duration-200">
                    Go to Website
                  </button>
                </a>
              ) : null}
              {!info ? null : info.repo ? (
                <a target="_blank" href={info.repo}>
                  <button className="mt-10 flex w-full justify-center rounded-md bg-black border border-white py-4 z-50 px-5 font-semi text-white shadow-sm hover:bg-[#2b9593] hover:text-teal-50 hover:duration-200">
                    Go to Repository
                  </button>
                </a>
              ) : null}
              {!info ? null : info.contribution ? (
                <a target="_blank" href={info.contribution}>
                  <button className="mt-10 flex w-full justify-center rounded-md bg-black border border-white py-4 z-50 px-5 font-semi text-white shadow-sm hover:bg-[#2b9593] hover:text-teal-50 hover:duration-200">
                    Check my contribution
                  </button>
                </a>
              ) : null}
            </div>

            <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pb-16 lg:pr-8">
              {/* Description and details */}
              <div>
                <h3 className="sr-only">Description</h3>

                <div className="space-y-6">
                  <p className="text-base text-gray-500">
                    {!info ? null : info.description}
                  </p>
                </div>
              </div>

              <div className="mt-10 flex flex-wrap justify-start">
                <div className="w-full sm:w-auto">
                  <h3 className="text-md font-bold text-gray-300">
                    Stack / Tech
                  </h3>
                  <div className="mt-4">
                    <ul
                      role="list"
                      className="list-disc space-y-2 pl-4 text-sm"
                    >
                      {!info
                        ? null
                        : info.stack.map((highlight) => (
                            <li
                              key={highlight}
                              className="text-gray-300 flex gap-1"
                            >
                              <HashtagIcon width={12} />
                              <span className="text-gray-300">{highlight}</span>
                            </li>
                          ))}
                    </ul>
                  </div>
                </div>
                {info && info.focus.length > 0 ? (
                  <div className="w-full sm:w-auto mt-10 sm:ml-20 sm:mt-0">
                    <h3 className="text-md font-bold text-gray-300">
                      My focus
                    </h3>
                    <div className="mt-4">
                      <ul
                        role="list"
                        className="list-disc space-y-2 pl-4 text-sm"
                      >
                        {!info
                          ? null
                          : info.focus.map((highlight) => (
                              <li
                                key={highlight}
                                className="text-gray-300 flex gap-1"
                              >
                                <HashtagIcon width={12} />
                                <span className="text-gray-300">
                                  {highlight}
                                </span>
                              </li>
                            ))}
                      </ul>
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
