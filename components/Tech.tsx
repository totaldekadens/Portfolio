import { useState } from "react";
import { CheckIcon, XMarkIcon } from "@heroicons/react/20/solid";

const tiers = [
  {
    name: "Frontend",
    id: "tier-scale",
    href: "#",
    featured: true,
    description: "The best financial services for your thriving business.",
    price: { monthly: "$60", annually: "$576" },
    mainFeatures: [
      "React.js",
      "Typescript",
      "Next.js",
      "Wordpress",
      "WooCommerce",
      "Mantine.dev",
      "Tailwind UI",
      "Material UI",
    ],
  },
  {
    name: "Backend / Database",
    id: "tier-starter",
    href: "#",
    featured: false,
    description: "All your essential business finances, taken care of.",
    price: { monthly: "$15", annually: "$144" },
    mainFeatures: [
      "Node.js",
      "PHP",
      "Next.js",
      "Express.js",
      "Mongoose.js",
      "MongoDB",
      "MySQL",
      "graphQL",
    ],
  },
  {
    name: "Other good things!",
    id: "tier-growth",
    href: "#",
    featured: false,
    description: "Convenient features to take your business to the next level.",
    price: { monthly: "$30", annually: "$288" },
    mainFeatures: [
      "Stripe.js",
      "Cypress.io",
      "Clerk.io",
      "BigCommerce",
      "Figma",
      "Zeplin",
      "Bugheard",
      "Git",
      "Like working with agile methods",
    ],
  },
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function Tech() {
  return (
    <div
      style={{ paddingTop: 96 }}
      className="w-full  max-w-7xl py-8 sm:py-10 px-4 sm:px-10 lg:px-4 lg:py-16 "
    >
      <div className="mx-auto px-4 lg:max-w-none">
        <div className="max-w-3xl">
          <p className="font-primary mt-2 text-3xl font-semi tracking-tight text-slate-50 sm:text-5xl lg:text-5xl">
            Tech / Tools
          </p>
        </div>
        <div className=" space-y-18 md:space-y-18 pt-18 sm:mt-10 ">
          <div className="isolate overflow-hidden ">
            <div>
              <div className="mx-auto max-w-7xl lg:px-8">
                <div className="relative mx-auto mt-10 grid grid-cols-1 md:max-w-none md:mx-0 md:grid-cols-2 gap-y-8 gap-x-8 lg:mx-0 lg:-mb-14 lg:max-w-none lg:grid-cols-3">
                  {tiers.map((tier) => (
                    <div
                      key={tier.id}
                      className={classNames(
                        "z-10 bg-gradient-to-b from-[#0000002c] via-black to-black border border-white relative rounded-2xl"
                      )}
                    >
                      <div className="p-8 lg:pt-12 xl:p-10 xl:pt-14">
                        <h3
                          id={tier.id}
                          className={classNames(
                            tier.featured ? "text-white" : "text-white",
                            "text-xl font-semibold leading-6"
                          )}
                        >
                          {tier.name}
                        </h3>
                        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between lg:flex-col lg:items-stretch"></div>
                        <div className="mt-8 flow-root sm:mt-10">
                          <ul
                            role="list"
                            className={classNames(
                              "divide-white/5 border-white/5 text-white -my-2 divide-y border-t text-sm leading-6 lg:border-t-0"
                            )}
                          >
                            {tier.mainFeatures.map((mainFeature) => (
                              <li
                                key={mainFeature}
                                className="flex gap-x-3 py-2 text-base"
                              >
                                <CheckIcon
                                  className={classNames(
                                    "text-[#2b9593] h-6 w-5 flex-none"
                                  )}
                                  aria-hidden="true"
                                />
                                {mainFeature}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="relative bg-black lg:pt-14">
              <div className="mx-auto max-w-7xl py-10 px-6 sm:py-10 lg:px-8">
                {/* Feature comparison (up to lg) */}
                <section
                  aria-labelledby="mobile-comparison-heading"
                  className="lg:hidden"
                >
                  <h2 id="mobile-comparison-heading" className="sr-only">
                    Feature comparison
                  </h2>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
