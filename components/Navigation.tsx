import Link from "next/link";
import { Dispatch, FC, Fragment, SetStateAction, useState } from "react";
import MobileMenu from "./MobileMenu";
import MobileDrawer from "./MobileDrawer";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/20/solid";
import { Dialog, Transition } from "@headlessui/react";

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header
        style={{ zIndex: 100 }}
        className="h-20 text-gray-700 bg-black flex justify-between px-8  items-center sm:text-xl  md:text-2xl lg:text-4xl lg:h-24"
      >
        <div className="w-10">
          <Link href={"/"}>
            <img src="/newlogo.png"></img>
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

        <MobileMenu open={mobileMenuOpen} setOpen={setMobileMenuOpen} />
        <MobileDrawer open={mobileMenuOpen} setOpen={setMobileMenuOpen} />
      </header>
    </>
  );
};

export default Navigation;

/* 
  <>
      <header
        style={{ zIndex: 100 }}
        className="h-20 fixed left-0 right-0 text-gray-700 bg-black flex justify-between px-8  items-center sm:text-xl  md:text-2xl lg:text-4xl lg:h-24"
      >
        <div className="w-10">
          <Link href={"/"}>
            <img src="/newlogo.png"></img>
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

       {/*  <MobileMenu open={open} setOpen={setOpen} /> 
        <MobileDrawer open={open} setOpen={setOpen} />
      </header>
    </>
*/

/* 

    <header className="bg-black fixed top-0 right-0 left-0">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img
              className="h-8 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt=""
            />
          </a>
        </div>
        <div className="flex lg:hidden">
          <div
            //type="button"
            //className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            {/* <span className="sr-only">Open main menu</span> 
            <MobileMenu open={mobileMenuOpen} setOpen={setMobileMenuOpen} />
            {/* <Bars3Icon className="h-6 w-6" aria-hidden="true" /> 
          </div>
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Log in <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>
      <Transition.Root show={mobileMenuOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setMobileMenuOpen}>
          <div className="fixed inset-0" />

          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-500 sm:duration-700"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-500 sm:duration-700"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                    <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                      <div className="px-4 sm:px-6">
                        <div className="flex items-start justify-between">
                          <Dialog.Title className="text-base font-semibold leading-6 text-gray-900">
                            Panel title
                          </Dialog.Title>
                          <div className="ml-3 flex h-7 items-center">
                            <button
                              type="button"
                              className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              <span className="sr-only">Close panel</span>
                              <XMarkIcon
                                className="h-6 w-6"
                                aria-hidden="true"
                              />
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="relative mt-6 flex-1 px-4 sm:px-6">
                        <div className="bg-black h-full w-full flex flex-col justify-center px-7 text-xl gap-3 text-white">
                          <Link href="/">Who am I?</Link>
                          <Link href="/">Portfolio</Link>
                          <Link href="/">Contact</Link>
                        </div>
                        <div className="absolute left-0 right-0 bottom-0 h-16">
                          <div className=" gap-3 flex justify-center items-center h-full sm:hidden">
                            <a href="mailto:angelica.moberg@hotmail.com">
                              <img src="/letter.png" />
                            </a>
                            <a
                              target="_blank"
                              href="https://www.linkedin.com/in/angelica-moberg-skoglund-012aa2212/"
                            >
                              <img src="/linkedinlogo.webp" />
                            </a>
                            <a
                              target="_blank"
                              href="https://github.com/totaldekadens"
                            >
                              <img src="/githublogo.webp" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </header>
*/
