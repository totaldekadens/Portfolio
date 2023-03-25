import Link from "next/link";
import { FC, useState } from "react";
import MobileMenu from "./MobileMenu";

const Navigation = () => {
  const [open, setOpen] = useState<boolean>(false);
  console.log(open);
  return (
    <header
      style={{ zIndex: 100 }}
      className="h-20 fixed left-0 right-0 text-gray-700 bg-black flex justify-between px-6  items-center sm:text-xl  md:text-2xl lg:text-4xl lg:h-24"
    >
      <div style={{ width: 140 }}>
        <Link href={"/"}>
          <img src="/personalLogo.png"></img>
        </Link>
      </div>
      <div className=" gap-3 hidden sm:flex">
        <a href="mailto:angelica.moberg@hotmail.com">
          <img src="/letter.png" />
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/angelica-moberg-skoglund-012aa2212/"
        >
          <img src="/linkedinlogo.webp" />
        </a>
        <a target="_blank" href="https://github.com/totaldekadens">
          <img src="/githublogo.webp" />
        </a>
      </div>
      <MobileMenu open={open} setOpen={setOpen} />
    </header>
  );
};

export default Navigation;
