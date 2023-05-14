import getSlug from "./getSlug";

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
  type: "School project" | "LIA project" | "Hobby" | "Master thesis";
  collab: string[];
  focus: string[];
  date: string;
  imagesAdmin?: any[];
  imagesWP: any[];
}

export const features: Website[] = [
  {
    name: "Survey",
    description:
      "Recently started hobby project with only figma skisses atm. The idea is to give a company very easy tools to eg follow up a question at different departments each week.",
    slug: getSlug("Survey"),
    imageSrc: "/poll.png",
    imageAlt: "picture",
    imagesDesk: [
      { src: "poll.png", alt: "wall-desk-3.webp" },
      { src: "result.png", alt: "wall-desk-4.webp" },
    ],
    imagesMob: [{ src: "pollmobile.png", alt: "wall-desk-3.webp" }],
    stack: ["Next.js", "Typescript", "Tailwind UI", "MongoDB"],
    repo: "",
    contribution: "",
    website: "",
    type: "Hobby",
    collab: [],
    focus: [],
    imagesWP: [],
    date: "On going",
  },
  {
    name: "Boilerplate E-Commerce",
    description:
      "Project for Wallmander & Co. The plan is to set up a fully functional sandbox e-commerce site with different integrations.",
    slug: getSlug("Boilerplate E-Commerce"),
    imageSrc: "/wallnew1.png",
    imageAlt: "picture",
    imagesDesk: [
      { src: "wallnew1.png", alt: "wall-desk-1.webp" },
      { src: "wallnew2.png", alt: "wall-desk-2.webp" },
      { src: "wallnew3.png", alt: "wall-desk-4.webp" },
    ],
    imagesMob: [
      { src: "wallnewmob1.png", alt: "wall-desk-1.webp" },
      { src: "wallnewmob2.png", alt: "wall-desk-2.webp" },
      { src: "wallnewmob3.png", alt: "wall-desk-4.webp" },
      { src: "wall4.png", alt: "wall-desk-4.webp" },
    ],
    imagesWP: [
      {
        title: "Custom product card",
        description: "",
        subTitle: "",
        images: [],
        videos: [{ src: "movie.mov", alt: "movie" }],
        video: true,
      },
      {
        title: "Creation of dynamic components interacting with CMS",
        description:
          "Here´s some examples from the coooperation between me (creating the components in Next.js) and their developer creating the conditions in wordpress. The blocks are created based on their designer's wireframe",
        subTitle: "",
        images: [
          { src: "components2.png", alt: "admin-1.webp" },
          { src: "components3.png", alt: "admin-2.webp" },
          { src: "components4.png", alt: "admin-3.webp" },
        ],
        video: false,
      },
    ],
    stack: [
      "Next.js",
      "Typescript",
      "BigCommerce",
      "Tailwind UI",
      "GraphQL",
      "Clerk",
    ],
    repo: "",
    contribution: "",
    website: "",
    type: "LIA project",
    collab: [],
    focus: [
      "Integration BigCommerce",
      "Customization of Tailwind UI Components",
      "Category page",
      "Filtering products",
      "Product page",
      "Startpage",
      "Adapting components to CMS",
    ],
    date: "On going",
  },
  {
    name: "MakeUpByS E-Commerce",
    description:
      "Master Thesis. Please go to repository for further info regarding my work.",
    slug: getSlug("MakeUpByS E-Commerce"),
    imageSrc: "/make-desk-2.webp",
    imageAlt: "picture",
    imagesDesk: [
      { src: "make-desk-2.webp", alt: "make-desk-1.webp" },
      { src: "make-desk-1.webp", alt: "make-desk-2.webp" },
      { src: "make-desk-3.webp", alt: "make-desk-3.webp" },
      { src: "make-desk-4.webp", alt: "make-desk-4.webp" },
      { src: "varukorg.png", alt: "make-desk-4.webp" },
      { src: "kassa1.png", alt: "make-desk-4.webp" },
      { src: "kundexist.png", alt: "make-desk-4.webp" },
      { src: "kundnotexist.png", alt: "make-desk-4.webp" },
      { src: "annanleverans.png", alt: "make-desk-4.webp" },
      { src: "frakt.png", alt: "make-desk-4.webp" },
      { src: "sok.png", alt: "make-desk-4.webp" },
    ],
    imagesMob: [
      { src: "make-mob-1.webp", alt: "make-mob-1.webp" },
      { src: "make-mob-2.webp", alt: "make-mob-2.webp" },
      { src: "make-mob-3.webp", alt: "make-mob-3.webp" },
      { src: "make-mob-4.webp", alt: "make-mob-4.webp" },
      { src: "varukorgmob.png", alt: "make-desk-4.webp" },
      { src: "kassamob.png", alt: "make-desk-4.webp" },
      { src: "kundexistmob.png", alt: "make-desk-4.webp" },
      { src: "kundnotexistmobe.png", alt: "make-desk-4.webp" },
      { src: "annanleveransmob.png", alt: "make-desk-4.webp" },
      { src: "fraktmob.png", alt: "make-desk-4.webp" },
      { src: "sokmob.png", alt: "make-desk-4.webp" },
    ],
    imagesWP: [],
    imagesAdmin: [
      {
        title: "Overview Orders",
        description: "",
        subTitle: "",
        images: [
          { src: "admin-1.webp", alt: "admin-1.webp" },
          { src: "admin-2.webp", alt: "admin-2.webp" },
        ],
      },
      {
        title: "Change order status",
        subTitle: "Functionality",
        descriptions: [
          {
            title: "Status description:",
            list: [
              {
                item: "Färdigbehandlad (Completed)",
                subItem:
                  "Sets a date when the order has been sent and takes out the reserved qty of the products",
              },
              {
                item: "Avbruten (Cancelled)",
                subItem:
                  "Moves the reserved quantities on the products back to the available balance again.",
              },
              {
                item: "Pausad (Paused)",
                subItem:
                  "Puts the order aside. A customer maybe has reached out or maybe something with the payment went wrong.",
              },
              {
                item: "Behandlas (Reserved/In process)",
                subItem:
                  "Qty of the products are moved to reserved qty from available qty and are ready to be shipped.",
              },
            ],
          },
          {
            title: "Fixed limitations:",
            list: [
              {
                item: 'You cannot change the status of orders that have the status "Färdigbehandlad" (Completed) or "Avbruten" (Cancelled).',
              },
              {
                item: 'You cannot change an order with the status "Pausad" to "Färdigbehandlad". You will need to change it to "Behandlas" first and then to "Färdigbehandlad". This is because we want a proper process around how an order is being handled.',
              },
            ],
          },
        ],
        images: [{ src: "admin-3.webp", alt: "admin-3.webp" }],
      },
      {
        title: "Overview Products",
        description: "",
        subTitle: "",
        images: [
          { src: "admin-4.webp", alt: "admin-4.webp" },
          { src: "admin-5.webp", alt: "admin-5.webp" },
          { src: "admin-6.webp", alt: "admin-6.webp" },
        ],
      },
      {
        title: "Edit Product",
        description: "",
        subTitle: "",
        images: [
          { src: "admin-7.webp", alt: "admin-7.webp" },
          { src: "admin-8.webp", alt: "admin-8.webp" },
        ],
      },
      {
        title: "Create Product",
        description: "",
        subTitle: "",
        images: [
          { src: "admin-9.webp", alt: "admin-9.webp" },
          { src: "admin-10.webp", alt: "admin-10.webp" },
        ],
      },
    ],
    stack: ["Next.js", "Typescript", "Mantine UI", "MongoDB", "Stripe.js"],
    repo: "https://github.com/totaldekadens/MakeupByS",
    contribution:
      "https://github.com/totaldekadens/MakeupByS/graphs/contributors",
    website: "",
    type: "Master thesis",
    collab: ["Jacob Hoggen"],
    focus: [
      "Database",
      "API",
      "Admin page",
      "Quiz",
      "Season and Category page",
      "Product page",
      "Checkout",
      "Payment",
      "Cart",
      "Search function",
    ],
    date: "2023-02-01",
  },
  {
    name: "Portfolio",
    description: "Group project done with focus on working with agile methods",
    slug: getSlug("Portfolio"),
    imageSrc: "/port-desk-1.webp",
    imageAlt: "Black canvas body with chrome zipper and key ring.",
    imagesDesk: [
      { src: "port-desk-1.webp", alt: "port-desk-1" },
      { src: "port-desk-2.webp", alt: "port-desk-2" },
      { src: "port-desk-3.webp", alt: "port-desk-3" },
      { src: "port-desk-4.webp", alt: "port-desk-4" },
    ],
    imagesMob: [
      { src: "port-mob-1.webp", alt: "port-mob-1" },
      { src: "port-mob-2.webp", alt: "port-mob-2" },
      { src: "port-mob-3.webp", alt: "port-mob-3" },
      { src: "port-mob-4.webp", alt: "port-mob-4" },
    ],
    stack: ["React.js", "Typescript", "Mantine UI"],
    repo: "https://github.com/totaldekadens/portfolio-assignment",
    contribution:
      "https://github.com/wictoriadrefelt/portfolio-assignment/graphs/contributors",
    website: "",
    type: "School project",
    collab: ["Wictoria Drefeldt", "Hannane Kabuli", "Ali Bami", "Ting Wang"],
    focus: ["Design", "Member page", "Member list page"],
    date: "2022-12-22",
    imagesWP: [],
  },

  {
    name: "Business Adventure Hero",
    description:
      "Group project done for H5 Förnyelsebyrå AB with focus on SEO, Accessibilty and capacity",
    slug: getSlug("Business Adventure Hero"),
    imageSrc: "/adv-desk-1-dark.webp",
    imageAlt: "Black canvas body with chrome zipper and key ring.",
    imagesDesk: [
      { src: "adv-desk-1-light.webp", alt: "image of website" },
      { src: "adv-desk-2-light.webp", alt: "image of website" },
      { src: "adv-desk-3-light.webp", alt: "image of website" },
      { src: "adv-desk-1-dark.webp", alt: "image of website" },
    ],
    imagesMob: [
      { src: "adv-mob-1-light.webp", alt: "image of website" },
      { src: "adv-mob-1-dark.webp", alt: "image of website" },
    ],
    stack: ["Next.js", "Typescript", "Mantine UI"],
    repo: "",
    contribution: "",
    website: "https://business.adventurehero.se/",
    type: "LIA project",
    collab: ["Millie Cheung", "Hugo Bengtsson"],
    focus: [
      "Header",
      "Dark/Light mode",
      "Different components on price and home page",
    ],
    date: "2022-10-31",
    imagesWP: [],
  },
  {
    name: "FortKnox E-Commerce",
    description:
      "Group project focused on checkout and admin. Please go to repo for further info.",
    slug: getSlug("FortKnox E-Commerce"),
    imageSrc: "/fort-desk-1.webp",
    imageAlt: "Black canvas body with chrome zipper and key ring.",
    imagesDesk: [
      { src: "fort-desk-1.webp", alt: "image of website" },
      { src: "fort-desk-2.webp", alt: "image of website" },
      { src: "fort-desk-3.webp", alt: "image of website" },
      { src: "fort-desk-4.webp", alt: "image of website" },
      { src: "fort-desk-5.webp", alt: "image of website" },
      { src: "fort-desk-6.webp", alt: "image of website" },
      { src: "fort-desk-7.webp", alt: "image of website" },
      { src: "fort-desk-8.webp", alt: "image of website" },
      { src: "fort-desk-9.webp", alt: "image of website" },
      { src: "fort-desk-10.webp", alt: "image of website" },
      { src: "fort-desk-11.webp", alt: "image of website" },
      { src: "fort-desk-12.webp", alt: "image of website" },
      { src: "fort-desk-13.webp", alt: "image of website" },
      { src: "fort-desk-14.webp", alt: "image of website" },
      { src: "fort-desk-15.webp", alt: "image of website" },
    ],
    imagesMob: [
      { src: "fort-mob-1.webp", alt: "image of website" },
      { src: "fort-mob-2.webp", alt: "image of website" },
      { src: "fort-mob-3.webp", alt: "image of website" },
      { src: "fort-mob-4.webp", alt: "image of website" },
      { src: "fort-mob-5.webp", alt: "image of website" },
      { src: "fort-mob-6.webp", alt: "image of website" },
      { src: "fort-mob-7.webp", alt: "image of website" },
      { src: "fort-mob-8.webp", alt: "image of website" },
    ],
    stack: ["React.js", "Typescript"],
    repo: "https://github.com/totaldekadens/Fortknox",
    contribution:
      "https://github.com/totaldekadens/Fortknox/graphs/contributors",
    website: "",
    type: "School project",
    collab: ["Hugo Bengtsson", "Fredrik Lexö"],
    focus: [
      "Admin page",
      "Home page",
      "Responsivity product page",
      "Order confirmation",
    ],
    date: "2022-06-13",
    imagesWP: [],
  },
  {
    name: "SAD Active E-Commerce",
    description:
      "Group project focused on creating a child theme in Wordpress. Please go to repo for further info.",
    slug: getSlug("SAD Active E-Commerce"),
    imageSrc: "/sad-desk-1.webp",
    imagesDesk: [
      { src: "sad-desk-1.webp", alt: "image of website" },
      { src: "sad-desk-2.webp", alt: "image of website" },
      { src: "sad-desk-3.webp", alt: "image of website" },
      { src: "sad-desk-4.webp", alt: "image of website" },
      { src: "sad-desk-5.webp", alt: "image of website" },
      { src: "sad-desk-6.webp", alt: "image of website" },
      { src: "sad-desk-7.webp", alt: "image of website" },
      { src: "sad-desk-8.webp", alt: "image of website" },
      { src: "sad-desk-9.webp", alt: "image of website" },
      { src: "sad-desk-10.webp", alt: "image of website" },
      { src: "sad-desk-11.webp", alt: "image of website" },
      { src: "sad-desk-12.webp", alt: "image of website" },
      { src: "sad-desk-13.webp", alt: "image of website" },
      { src: "sad-desk-14.webp", alt: "image of website" },
      { src: "sad-desk-15.webp", alt: "image of website" },
      { src: "sad-desk-16.webp", alt: "image of website" },
      { src: "sad-desk-17.webp", alt: "image of website" },
      { src: "sad-desk-18.webp", alt: "image of website" },
      { src: "sad-desk-19.webp", alt: "image of website" },
      { src: "sad-desk-20.webp", alt: "image of website" },
      { src: "sad-desk-21.webp", alt: "image of website" },
      { src: "sad-desk-22.webp", alt: "image of website" },
      { src: "sad-desk-23.webp", alt: "image of website" },
      { src: "sad-desk-24.webp", alt: "image of website" },
    ],
    imagesMob: [
      { src: "sad-mob-1.webp", alt: "image of website" },
      { src: "sad-mob-2.webp", alt: "image of website" },
      { src: "sad-mob-3.webp", alt: "image of website" },
      { src: "sad-mob-4.webp", alt: "image of website" },
      { src: "sad-mob-5.webp", alt: "image of website" },
      { src: "sad-mob-6.webp", alt: "image of website" },
      { src: "sad-mob-7.webp", alt: "image of website" },
      { src: "sad-mob-8.webp", alt: "image of website" },
      { src: "sad-mob-9.webp", alt: "image of website" },
      { src: "sad-mob-10.webp", alt: "image of website" },
    ],
    imageAlt: "Black canvas body with chrome zipper and key ring.",
    stack: ["Vanilla JS", "MySQL", "PHP", "Wordpress", "WooCommerce"],
    repo: "https://github.com/totaldekadens/Wordpress---Webshop",
    contribution:
      "https://github.com/totaldekadens/Wordpress---Webshop/graphs/contributors",
    website: "",
    type: "School project",
    collab: ["David Wong", "Sanaz Shahed"],
    focus: [
      "Database",
      "API",
      "Category page",
      "Header",
      "Footer",
      "Blog pages",
      "Part of the checkout",
      "Search function",
    ],
    date: "2022-05-02",
    imagesWP: [],
  },
  {
    name: "Zeon Milo E-Commerce",
    description:
      "Group project focused on creating a complete full stack project. Please go to repo for further info.",
    slug: getSlug("Zeon Milo E-Commerce"),
    imageSrc: "/zeon-desk-1.webp",
    imageAlt: "Black canvas body with chrome zipper and key ring.",
    imagesDesk: [
      { src: "zeon-desk-1.webp", alt: "image of website" },
      { src: "zeon-desk-2.webp", alt: "image of website" },
      { src: "zeon-desk-3.webp", alt: "image of website" },
      { src: "zeon-desk-4.webp", alt: "image of website" },
      { src: "zeon-desk-5.webp", alt: "image of website" },
      { src: "zeon-desk-6.webp", alt: "image of website" },
      { src: "zeon-desk-7.webp", alt: "image of website" },
      { src: "zeon-desk-8.webp", alt: "image of website" },
      { src: "zeon-desk-9.webp", alt: "image of website" },
      { src: "zeon-desk-10.webp", alt: "image of website" },
    ],
    imagesMob: [
      { src: "zeon-mob-1.webp", alt: "image of website" },
      { src: "zeon-mob-2.webp", alt: "image of website" },
      { src: "zeon-mob-3.webp", alt: "image of website" },
      { src: "zeon-mob-4.webp", alt: "image of website" },
      { src: "zeon-mob-5.webp", alt: "image of website" },
      { src: "zeon-mob-6.webp", alt: "image of website" },
      { src: "zeon-mob-7.webp", alt: "image of website" },
      { src: "zeon-mob-8.webp", alt: "image of website" },
    ],
    stack: ["Vanilla JS", "MySQL", "PHP"],
    repo: "https://github.com/totaldekadens/Webshop",
    contribution: "https://github.com/AminaHallam/Webshop/graphs/contributors",
    website: "",
    type: "School project",
    collab: [
      "Lisa Karnerfors",
      "Amina Hallam",
      "Fredrik Olsson",
      "Wictoria Drefeldt",
    ],
    focus: ["Database", "API", "Category page", "Checkout", "Cart", "Admin"],
    date: "2022-03-03",
    imagesWP: [],
  },
  {
    name: "Puzzle",
    description:
      "Own little puzzle project I made in the beginning of my education. ",
    slug: getSlug("Puzzle"),
    imageSrc: "/puzzle.webp",
    imageAlt: "Black canvas body with chrome zipper and key ring.",
    imagesDesk: [{ src: "puzzle.webp", alt: "image of website" }],
    imagesMob: [],
    stack: ["Vanilla JS"],
    repo: "https://github.com/totaldekadens/Puzzle",
    contribution: "",
    website: "https://totaldekadens.github.io/Puzzle/",
    type: "Hobby",
    collab: [],
    focus: ["Practice functions"],
    date: "2022-01-09",
    imagesWP: [],
  },
];
