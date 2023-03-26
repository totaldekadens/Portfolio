export default function Footer() {
  return (
    <footer className="relative bg-black" style={{ zIndex: 20000000000000 }}>
      <div className="mx-auto max-w-7xl py-12 px-6 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          <a href="mailto:angelica.moberg@hotmail.com">
            <img className="w-8" src="/letter.png" />
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/angelica-moberg-skoglund-012aa2212/"
          >
            <img className="w-8" src="/linkedinlogo.webp" />
          </a>
          <a target="_blank" href="https://github.com/totaldekadens">
            <img className="w-8" src="/githublogo.webp" />
          </a>
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <p className="text-center text-xs leading-5 text-gray-500">
            &copy; 2023 Angelica Moberg Skoglund. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
