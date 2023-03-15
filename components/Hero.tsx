const Hero = () => {
  return (
    <div
      style={{ minHeight: "70vh" }}
      className="px-5 text-white flex justify-center items-start sm:items-center flex-col"
    >
      <h1 style={{ fontSize: 44, lineHeight: 1.2 }} className="flex sm:hidden">
        Junior <br />
        Web Developer <br /> & Coffee <br />
        Enthusiast
      </h1>
      <h1 className="hidden text-5xl sm:flex md:text-6xl lg:text-7xl text-center">
        Junior Web Developer <br /> & Coffee Enthusiast
      </h1>
      {/*  <button className="rounded-md mt-10 bg-black border border-white py-2.5 z-50 px-3.5 text-xs sm:text-sm font-semi text-white shadow-sm hover:bg-black hover:text-teal-50">
        Check out my projects
      </button> */}
    </div>
  );
};
export default Hero;
