import { useEffect, useState } from "react";
import { StarIcon } from "@heroicons/react/20/solid";
import { RadioGroup } from "@headlessui/react";
import { useRouter } from "next/router";
import { features } from ".";
import { Carousel } from "flowbite-react";

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

  return (
    <div className="bg-black" style={{ paddingTop: 96 }}>
      <div className="pt-3 sm:pt-6" style={{ minHeight: "100vh" }}>
        <nav aria-label="Breadcrumb">
          <ol
            role="list"
            className="mx-auto mb-4 flex items-center space-x-2 px-4 sm:px-6 lg:px-8"
          >
            <li className="text-sm">
              <div className="flex items-center">
                <a
                  href={"/"}
                  aria-current="page"
                  className="font-medium text-gray-500 hover:text-gray-600"
                >
                  Portfolio
                </a>
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
              ? "mt-6 h-64 sm:h-96 lg:h-96"
              : "mt-6 mb-10 h-64 sm:h-96 lg:h-96"
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
            <Carousel slide={false} indicators={false} rightControl leftControl>
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
                    className="mx-4 inline-flex h-full space-x-8 sm:mx-6 lg:mx-0 lg:grid lg:grid-cols-4 lg:gap-x-8 lg:space-x-0"
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
                <button className="mt-10 flex w-full items-center justify-center rounded-md border border-white bg-black py-3 px-8 text-base font-medium text-white hover:bg-teal-800 hover:text-teal-50 focus:outline-none">
                  Go to Website
                </button>
              </a>
            ) : null}
            {!info ? null : info.repo ? (
              <a target="_blank" href={info.repo}>
                <button className="mt-10 flex w-full items-center justify-center rounded-md border border-white bg-black py-3 px-8 text-base font-medium text-white hover:bg-teal-800 hover:text-teal-50 focus:outline-none ">
                  Go to Repository
                </button>
              </a>
            ) : null}
            {!info ? null : info.contribution ? (
              <a target="_blank" href={info.contribution}>
                <button className="mt-10 flex w-full items-center justify-center rounded-md border border-white bg-black py-3 px-8 text-base font-medium text-white hover:bg-teal-800 hover:text-teal-50 focus:outline-none ">
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
                <h3 className="text-sm font-bold text-gray-300">
                  Stack / Tech
                </h3>
                <div className="mt-4">
                  <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                    {!info
                      ? null
                      : info.stack.map((highlight) => (
                          <li key={highlight} className="text-gray-500">
                            <span className="text-gray-300">{highlight}</span>
                          </li>
                        ))}
                  </ul>
                </div>
              </div>

              <div className="w-full sm:w-auto mt-10 sm:ml-20 sm:mt-0">
                <h3 className="text-sm font-bold text-gray-300">My focus</h3>
                <div className="mt-4">
                  <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                    {!info
                      ? null
                      : info.focus.map((highlight) => (
                          <li key={highlight} className="text-gray-500">
                            <span className="text-gray-300">{highlight}</span>
                          </li>
                        ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
