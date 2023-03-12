/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    theme: {
      extend: {
        gridTemplateRows: {
          '[auto,auto,1fr]': 'auto auto 1fr',
        },
      },
    },
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
import { useState } from "react";
import { StarIcon } from "@heroicons/react/20/solid";
import { RadioGroup } from "@headlessui/react";
import { useRouter } from "next/router";
import { features } from ".";
import { Carousel } from "flowbite-react";
import Link from "next/link";
const product = {
  name: "Basic Tee 6-Pack",
  price: "$192",
  href: "#",
  breadcrumbs: [
    { id: 1, name: "Men", href: "#" },
    { id: 2, name: "Clothing", href: "#" },
  ],
  images: [
    {
      src: "https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg",
      alt: "Two each of gray, white, and black shirts laying flat.",
    },
    {
      src: "https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg",
      alt: "Model wearing plain black basic tee.",
    },
    {
      src: "https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg",
      alt: "Model wearing plain gray basic tee.",
    },
    {
      src: "https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg",
      alt: "Model wearing plain white basic tee.",
    },
  ],
  colors: [
    { name: "White", className: "bg-white", selectedClass: "ring-gray-400" },
    { name: "Gray", className: "bg-gray-200", selectedClass: "ring-gray-400" },
    { name: "Black", className: "bg-gray-900", selectedClass: "ring-gray-900" },
  ],
  sizes: [
    { name: "XXS", inStock: false },
    { name: "XS", inStock: true },
    { name: "S", inStock: true },
    { name: "M", inStock: true },
    { name: "L", inStock: true },
    { name: "XL", inStock: true },
    { name: "2XL", inStock: true },
    { name: "3XL", inStock: true },
  ],
  description:
    'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
  highlights: [
    "Hand cut and sewn locally",
    "Dyed with our proprietary colors",
    "Pre-washed & pre-shrunk",
    "Ultra-soft 100% cotton",
  ],
  details:
    'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
};
const reviews = { href: "#", average: 4, totalCount: 117 };

//carousel.pause();

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function Website() {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[2]);

  const { query } = useRouter();
  const slug = query.slug;

  const site = features.filter((website) => website.slug == slug);

  const info = site[0];
  console.log(info);
  return (
    <div className="bg-black">
      <div className="pt-6 ">
        <nav aria-label="Breadcrumb">
          <ol
            role="list"
            className="mx-auto flex items-center space-x-2 px-4 sm:px-6 lg:px-8"
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
          className="mt-6 h-64 sm:h-96 lg:h-96 "
        >
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
        </div>
        {info && info.imagesMob.length > 0 ? (
          <div className="bg-black">
            <div className="py-16 h-100 sm:py-24 lg:mx-auto lg:max-w-7xl lg:px-8">
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
            <h1 className="text-2xl font-bold tracking-tight text-gray-400 sm:text-3xl">
              {info ? info.name : null}
            </h1>
          </div>

          {/* Options */}
          <div className="mt-4 lg:row-span-3 lg:mt-0">
            {!info ? null : info.website ? (
              <a target="_blank" href={info.website}>
                <button className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                  Go to Website
                </button>
              </a>
            ) : null}
            {!info ? null : info.repo ? (
              <a target="_blank" href={info.repo}>
                <button className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                  Go to Repository
                </button>
              </a>
            ) : null}
            {!info ? null : info.contribution ? (
              <a target="_blank" href={info.contribution}>
                <button className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
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
                <h3 className="text-sm font-medium text-gray-300">
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
                <h3 className="text-sm font-medium text-gray-300">My focus</h3>
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
