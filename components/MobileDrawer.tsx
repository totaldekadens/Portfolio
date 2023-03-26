import { Dispatch, Fragment, SetStateAction, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Link from "next/link";
import { XMarkIcon } from "@heroicons/react/20/solid";

interface Props {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export default function MobileDrawer({ open, setOpen }: Props) {
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative"
        style={{ zIndex: 100 }}
        onClose={setOpen}
      >
        <div className="fixed inset-0 " />

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 top-20 flex max-w-full pl-36">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md ">
                  <div
                    className="flex h-full flex-col bg-black py-6 shadow-xl "
                    style={{ zIndex: 10000 }}
                  >
                    <div className="relative flex-1 px-4 sm:px-6">
                      {/* Your content */}
                      <div className="bg-black h-full w-full flex flex-col justify-center px-7 text-xl gap-3 text-white">
                        <Link
                          onClick={() => {
                            setOpen(false);
                          }}
                          href="/aboutme"
                        >
                          Who am I?
                        </Link>
                        <Link
                          onClick={() => {
                            setOpen(false);
                          }}
                          href="/#tech"
                        >
                          Tech / Tools
                        </Link>
                        <Link
                          onClick={() => {
                            setOpen(false);
                          }}
                          href="/#projects"
                        >
                          Projects
                        </Link>
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
  );
}

/* 
 <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10 " onClose={setOpen}>
        <div className="fixed inset-0 " />

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-36">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md ">
                  <div className="flex h-full flex-col bg-black py-6 shadow-xl  ">
                    <div className="relative flex-1 px-4 sm:px-6">
                      {/* Your content }
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
*/
