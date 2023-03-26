import {
  Dispatch,
  FC,
  PropsWithChildren,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import Navigation from "./Navigation";
import { hideContext } from "./Context/Provider";
import Link from "next/link";
import { Transition } from "@headlessui/react";

const Hej = () => {
  const { scrollHeight, scrollY } = useContext(hideContext);
  const [currentScrollHeight, setCurrentScrollHeight] = useState(0);
  const [hide, setHide] = useState(true);

  useEffect(() => {
    if (scrollY > 2 && scrollY < 6) {
      setCurrentScrollHeight(scrollHeight);
    }
  }, [scrollY, scrollHeight, setCurrentScrollHeight]);

  useEffect(() => {
    if (currentScrollHeight > 0) {
      const newHeight = currentScrollHeight * 2;
      if (scrollY > newHeight) {
        setHide(false);
      } else {
        setHide(true);
      }
    }
  }, [scrollY, setHide, hide]);

  return (
    <Transition
      show={!hide}
      enter="transition-opacity duration-300"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-300"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div
        style={{ zIndex: 1000000, cursor: "pointer" }}
        className={
          "fixed bottom-5 right-4 bg-black rounded-md mt-10  border border-white py-4 z-50 px-5 text-xs sm:text-sm font-semi text-white hover:bg-[#2b9593] hover:text-teal-50 shadow-xl hover:duration-200"
        }
      >
        <Link className="text-white" href="/aboutme">
          Who am I?
        </Link>
      </div>
    </Transition>
  );
};

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div>
      <Navigation />
      {children}
      <Hej />
    </div>
  );
};
export default Layout;
