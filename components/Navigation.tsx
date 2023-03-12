import { FC } from "react";

const Navigation = () => {
  return (
    <header className="h-20 text-gray-700 bg-black flex justify-between px-8 items-center sm:text-xl  md:text-2xl lg:text-4xl lg:h-24">
      <div>{/* Angelica Moberg Skoglund< */}</div>

      <div className="flex gap-3">
        <a href="mailto:angelica.moberg@hotmail.com">
          <img src="/letter.png" />
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/angelica-moberg-skoglund-012aa2212/"
        >
          <img src="/linkedinlogo.png" />
        </a>
        <a target="_blank" href="https://github.com/totaldekadens">
          <img src="/githublogo.png" />
        </a>
      </div>
    </header>
  );
};

export default Navigation;
