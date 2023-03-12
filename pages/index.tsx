import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useState } from "react";
import Link from "next/link";
import getSlug from "@/utils/getSlug";
const inter = Inter({ subsets: ["latin"] });

export interface ImageSrc {
  src: string;
  alt: string;
}

export interface Website {
  name: string;
  description: string;
  slug: string;
  imageSrc: string;
  imageAlt: string;
  imagesDesk: ImageSrc[];
  imagesMob: ImageSrc[];
  stack: string[];
  repo: string;
  contribution: string;
  website: string;
  type: string;
  collab: string[];
  focus: string[];
  date: string;
  imagesAdmin?: ImageSrc[];
}

export const features: Website[] = [
  {
    name: "Boilerplate E-Commerce",
    description: "Ongoing project for Wallmander & Co",
    slug: getSlug("Boilerplate E-Commerce"),
    imageSrc: "/wall-desk-1.png",
    imageAlt: "picture",
    imagesDesk: [
      { src: "wall-desk-1.png", alt: "wall-desk-1.png" },
      { src: "wall-desk-2.png", alt: "wall-desk-2.png" },
      { src: "wall-desk-3.png", alt: "wall-desk-3.png" },
      { src: "wall-desk-4.png", alt: "wall-desk-4.png" },
    ],
    imagesMob: [],
    stack: ["Next.js", "Typescript", "BigCommerce", "Tailwind UI", "GraphQL"],
    repo: "https://github.com/totaldekadens/commerce-nextjs-bigcommerce",
    contribution: "",
    website: "",
    type: "LIA 2",
    collab: [],
    focus: [
      "Integration BigCommerce",
      "Customization of Tailwind UI Components",
      "Fully Functional E-commerce in the end",
    ],
    date: "On going",
  },
  {
    name: "MakeUpByS E-Commerce",
    description: "Master Thesis",
    slug: getSlug("MakeUpByS E-Commerce"),
    imageSrc: "/make-desk-1.png",
    imageAlt: "picture",
    imagesDesk: [
      { src: "make-desk-1.png", alt: "make-desk-1.png" },
      { src: "make-desk-2.png", alt: "make-desk-2.png" },
      { src: "make-desk-3.png", alt: "make-desk-3.png" },
      { src: "make-desk-4.png", alt: "make-desk-4.png" },
    ],
    imagesMob: [
      { src: "make-mob-1.png", alt: "make-mob-1.png" },
      { src: "make-mob-2.png", alt: "make-mob-2.png" },
      { src: "make-mob-3.png", alt: "make-mob-3.png" },
      { src: "make-mob-4.png", alt: "make-mob-4.png" },
    ],
    imagesAdmin: [
      { src: "admin-1.png", alt: "admin-1.png" },
      { src: "admin-2.png", alt: "admin-2.png" },
      { src: "admin-3.png", alt: "admin-3.png" },
      { src: "admin-4.png", alt: "admin-4.png" },
      { src: "admin-5.png", alt: "admin-5.png" },
      { src: "admin-6.png", alt: "admin-6.png" },
      { src: "admin-7.png", alt: "admin-7.png" },
      { src: "admin-8.png", alt: "admin-8.png" },
      { src: "admin-9.png", alt: "admin-9.png" },
      { src: "admin-10.png", alt: "admin-10.png" },
      { src: "admin-11.png", alt: "admin-11.png" },
    ],
    stack: ["Next.js", "Typescript", "Mantine UI", "MongoDB"],
    repo: "https://github.com/totaldekadens/MakeupByS",
    contribution:
      "https://github.com/totaldekadens/MakeupByS/graphs/contributors",
    website: "https://makeupbys.se/",
    type: "School",
    collab: ["Jacob Hoggen"],
    focus: [
      "Admin page",
      "Quiz",
      "Season and Category page",
      "Product page",
      "Checkout",
      "Cart",
      "Search function",
    ],
    date: "2023-02-01",
  },
  {
    name: "Portfolio",
    description: "Group project done with focus on working with agile methods",
    slug: getSlug("Portfolio"),
    imageSrc: "/port-desk-1.png",
    imageAlt: "Black canvas body with chrome zipper and key ring.",
    imagesDesk: [
      { src: "port-desk-1.png", alt: "port-desk-1" },
      { src: "port-desk-2.png", alt: "port-desk-2" },
      { src: "port-desk-3.png", alt: "port-desk-3" },
      { src: "port-desk-4.png", alt: "port-desk-4" },
    ],
    imagesMob: [
      { src: "port-mob-1.png", alt: "port-mob-1" },
      { src: "port-mob-2.png", alt: "port-mob-2" },
      { src: "port-mob-3.png", alt: "port-mob-3" },
      { src: "port-mob-4.png", alt: "port-mob-4" },
    ],
    stack: ["React.js", "Typescript", "Mantine UI"],
    repo: "https://github.com/totaldekadens/portfolio-assignment",
    contribution:
      "https://github.com/wictoriadrefelt/portfolio-assignment/graphs/contributors",
    website: "",
    type: "School",
    collab: ["Wictoria Drefeldt", "Hannane Kabuli", "Ali Bami", "Ting Wang"],
    focus: ["Design", "Member page", "Member list page"],
    date: "2022-12-22",
  },

  {
    name: "Business Adventure Hero",
    description:
      "Group project done with focus on SEO, Accessibilty and capacity",
    slug: getSlug("Business Adventure Hero"),
    imageSrc: "/adv-desk-1-dark.png",
    imageAlt: "Black canvas body with chrome zipper and key ring.",
    imagesDesk: [
      { src: "adv-desk-1-light.png", alt: "image of website" },
      { src: "adv-desk-2-light.png", alt: "image of website" },
      { src: "adv-desk-3-light.png", alt: "image of website" },
      { src: "adv-desk-2-dark.png", alt: "image of website" },
    ],
    imagesMob: [
      { src: "adv-mob-1-light.png", alt: "image of website" },
      { src: "adv-mob-1-dark.png", alt: "image of website" },
    ],
    stack: ["Next.js", "Typescript", "Mantine UI"],
    repo: "",
    contribution: "",
    website: "https://business.adventurehero.se/",
    type: "LIA 1",
    collab: ["Millie Cheung", "Hugo Bengtsson"],
    focus: ["Header", "Different components on price and home page"],
    date: "2022-10-31",
  },
  {
    name: "FortKnox E-Commerce",
    description: "Group project",
    slug: getSlug("FortKnox E-Commerce"),
    imageSrc: "/fort-desk-1.jpeg",
    imageAlt: "Black canvas body with chrome zipper and key ring.",
    imagesDesk: [
      { src: "fort-desk-1.jpeg", alt: "image of website" },
      { src: "fort-desk-2.jpeg", alt: "image of website" },
      { src: "fort-desk-3.jpeg", alt: "image of website" },
      { src: "fort-desk-4.jpeg", alt: "image of website" },
      { src: "fort-desk-5.jpeg", alt: "image of website" },
      { src: "fort-desk-6.jpeg", alt: "image of website" },
      { src: "fort-desk-7.jpeg", alt: "image of website" },
      { src: "fort-desk-8.jpeg", alt: "image of website" },
      { src: "fort-desk-9.jpeg", alt: "image of website" },
      { src: "fort-desk-10.jpeg", alt: "image of website" },
      { src: "fort-desk-11.jpeg", alt: "image of website" },
      { src: "fort-desk-12.jpeg", alt: "image of website" },
      { src: "fort-desk-13.jpeg", alt: "image of website" },
      { src: "fort-desk-14.jpeg", alt: "image of website" },
      { src: "fort-desk-15.jpeg", alt: "image of website" },
    ],
    imagesMob: [
      { src: "fort-mob-1.jpeg", alt: "image of website" },
      { src: "fort-mob-2.jpeg", alt: "image of website" },
      { src: "fort-mob-3.jpeg", alt: "image of website" },
      { src: "fort-mob-4.jpeg", alt: "image of website" },
      { src: "fort-mob-5.jpeg", alt: "image of website" },
      { src: "fort-mob-6.jpeg", alt: "image of website" },
      { src: "fort-mob-7.jpeg", alt: "image of website" },
      { src: "fort-mob-8.jpeg", alt: "image of website" },
    ],
    stack: ["React.js", "Typescript"],
    repo: "https://github.com/totaldekadens/Fortknox",
    contribution:
      "https://github.com/totaldekadens/Fortknox/graphs/contributors",
    website: "",
    type: "School",
    collab: ["Hugo Bengtsson", "Fredrik Lexö"],
    focus: [
      "Admin page",
      "Home page",
      "Responsivity product page",
      "Order confirmation",
    ],
    date: "2022-06-13",
  },
  {
    name: "SAD Active E-Commerce",
    description: "Group project",
    slug: getSlug("SAD Active E-Commerce"),
    imageSrc: "/sad-desk-1.jpeg",
    imagesDesk: [
      { src: "sad-desk-1.jpeg", alt: "image of website" },
      { src: "sad-desk-2.jpeg", alt: "image of website" },
      { src: "sad-desk-3.jpeg", alt: "image of website" },
      { src: "sad-desk-4.jpeg", alt: "image of website" },
      { src: "sad-desk-5.jpeg", alt: "image of website" },
      { src: "sad-desk-6.jpeg", alt: "image of website" },
      { src: "sad-desk-7.jpeg", alt: "image of website" },
      { src: "sad-desk-8.jpeg", alt: "image of website" },
      { src: "sad-desk-9.jpeg", alt: "image of website" },
      { src: "sad-desk-10.jpeg", alt: "image of website" },
      { src: "sad-desk-11.jpeg", alt: "image of website" },
      { src: "sad-desk-12.jpeg", alt: "image of website" },
      { src: "sad-desk-13.jpeg", alt: "image of website" },
      { src: "sad-desk-14.jpeg", alt: "image of website" },
      { src: "sad-desk-15.jpeg", alt: "image of website" },
      { src: "sad-desk-16.jpeg", alt: "image of website" },
      { src: "sad-desk-17.jpeg", alt: "image of website" },
      { src: "sad-desk-18.jpeg", alt: "image of website" },
      { src: "sad-desk-19.jpeg", alt: "image of website" },
      { src: "sad-desk-20.jpeg", alt: "image of website" },
      { src: "sad-desk-21.jpeg", alt: "image of website" },
      { src: "sad-desk-22.jpeg", alt: "image of website" },
      { src: "sad-desk-23.jpeg", alt: "image of website" },
      { src: "sad-desk-24.jpeg", alt: "image of website" },
    ],
    imagesMob: [
      { src: "sad-mob-1.jpeg", alt: "image of website" },
      { src: "sad-mob-2.jpeg", alt: "image of website" },
      { src: "sad-mob-3.jpeg", alt: "image of website" },
      { src: "sad-mob-4.jpeg", alt: "image of website" },
      { src: "sad-mob-5.jpeg", alt: "image of website" },
      { src: "sad-mob-6.jpeg", alt: "image of website" },
      { src: "sad-mob-7.jpeg", alt: "image of website" },
      { src: "sad-mob-8.jpeg", alt: "image of website" },
      { src: "sad-mob-9.jpeg", alt: "image of website" },
      { src: "sad-mob-10.jpeg", alt: "image of website" },
    ],
    imageAlt: "Black canvas body with chrome zipper and key ring.",
    stack: ["Vanilla JS", "MySQL", "PHP", "Wordpress", "WooCommerce"],
    repo: "https://github.com/totaldekadens/Wordpress---Webshop",
    contribution:
      "https://github.com/totaldekadens/Wordpress---Webshop/graphs/contributors",
    website: "",
    type: "School",
    collab: ["David Wong", "Sanaz Shahed"],
    focus: [
      "Category page",
      "Header",
      "Footer",
      "Blog pages",
      "Part of the checkout",
      "Search function",
    ],
    date: "2022-05-02",
  },
  {
    name: "Zeon Milo E-Commerce",
    description: "Group project",
    slug: getSlug("Zeon Milo E-Commerce"),
    imageSrc: "/zeon-desk-1.jpeg",
    imageAlt: "Black canvas body with chrome zipper and key ring.",
    imagesDesk: [
      { src: "zeon-desk-1.jpeg", alt: "image of website" },
      { src: "zeon-desk-2.jpeg", alt: "image of website" },
      { src: "zeon-desk-3.jpeg", alt: "image of website" },
      { src: "zeon-desk-4.jpeg", alt: "image of website" },
      { src: "zeon-desk-5.jpeg", alt: "image of website" },
      { src: "zeon-desk-6.jpeg", alt: "image of website" },
      { src: "zeon-desk-7.jpeg", alt: "image of website" },
      { src: "zeon-desk-8.jpeg", alt: "image of website" },
      { src: "zeon-desk-9.jpeg", alt: "image of website" },
      { src: "zeon-desk-10.jpeg", alt: "image of website" },
    ],
    imagesMob: [
      { src: "zeon-mob-1.jpeg", alt: "image of website" },
      { src: "zeon-mob-2.jpeg", alt: "image of website" },
      { src: "zeon-mob-3.jpeg", alt: "image of website" },
      { src: "zeon-mob-4.jpeg", alt: "image of website" },
      { src: "zeon-mob-5.jpeg", alt: "image of website" },
      { src: "zeon-mob-6.jpeg", alt: "image of website" },
      { src: "zeon-mob-7.jpeg", alt: "image of website" },
      { src: "zeon-mob-8.jpeg", alt: "image of website" },
    ],
    stack: ["Vanilla JS", "MySQL", "PHP"],
    repo: "https://github.com/totaldekadens/Webshop",
    contribution: "https://github.com/AminaHallam/Webshop/graphs/contributors",
    website: "",
    type: "School",
    collab: [
      "Lisa Karnerfors",
      "Amina Hallam",
      "Fredrik Olsson",
      "Wictoria Drefeldt",
    ],
    focus: ["Category page", "Checkout", "Cart", "Admin"],
    date: "2022-03-03",
  },
];

export default function Home() {
  const [hidden, setHidden] = useState<boolean>(true);
  return (
    <>
      <Head>
        <title>Portfolio - Angelica Moberg Skoglund</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header></header>
      <main className="bg-black font-primary ">
        <div className="mx-auto max-w-7xl py-24 sm:py-32 sm:px-2 lg:px-4">
          <div className="mx-auto max-w-2xl px-4 lg:max-w-none">
            <div className="max-w-3xl">
              <h2 className="font-primary font-semibold text-slate-400/50">
                Angelica Moberg Skoglund
              </h2>
              <p className="font-primary mt-2 text-3xl font-bold tracking-tight text-slate-50 sm:text-9xl">
                Portfolio
              </p>
              <p className="mt-4 text-slate-50">
                {/*  The Drawstring Canister comes with multiple strap and handle
                options to adapt throughout your day. Shoulder sling it,
                backpack it, or handy carry it. */}
              </p>
            </div>

            <div className="mt-10 space-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16">
              {features.map((feature) => (
                <div
                  key={feature.name}
                  className="font-primary flex flex-col-reverse lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-8"
                >
                  <div className="mt-6 lg:col-span-5 lg:mt-0 xl:col-span-4">
                    <div className="text-gray-700 text-xs">
                      {"Date: " + feature.date}
                    </div>
                    <h3 className="text-lg font-medium text-gray-400">
                      {feature.name}
                    </h3>
                    <p className="mt-2 text-sm text-gray-600">
                      {feature.description}
                    </p>

                    <p className="text-white text-sm font-bold mt-2">
                      Stack/Tech
                    </p>
                    <ul>
                      {feature.stack.map((st, i) => {
                        return (
                          <span
                            key={i}
                            className="mr-1 mt-2 inline-flex items-center rounded-full bg-indigo-100 px-2.5 py-0.5 text-xs font-medium text-indigo-800"
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
                      <div className="gap-2 z-50 opacity-0 hover:opacity-100 flex justify-center items-center hover:bg-black/20 hover:duration-200">
                        {!feature.repo ? null : (
                          <Link target="_blank" href={feature.repo}>
                            <button
                              type="button"
                              className="rounded-md bg-indigo-50 py-2.5 z-50 px-3.5 text-sm font-semibold text-indigo-600 shadow-sm hover:bg-indigo-100"
                            >
                              Go to repository
                            </button>
                          </Link>
                        )}
                        {!feature.website ? null : (
                          <Link target="_blank" href={feature.website}>
                            <button
                              type="button"
                              className="rounded-md bg-indigo-50 py-2.5 z-50 px-3.5 text-sm font-semibold text-indigo-600 shadow-sm hover:bg-indigo-100"
                            >
                              Go to website
                            </button>
                          </Link>
                        )}
                        <Link href={"/" + feature.slug}>
                          <button
                            type="button"
                            className="rounded-md bg-indigo-50 py-2.5 z-50 px-3.5 text-sm font-semibold text-indigo-600 shadow-sm hover:bg-indigo-100"
                          >
                            Details
                          </button>
                        </Link>
                      </div>
                      <img
                        src={feature.imageSrc}
                        alt={feature.imageAlt}
                        className="object-fit object-top "
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
