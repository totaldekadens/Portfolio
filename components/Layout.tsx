import {
  Dispatch,
  FC,
  PropsWithChildren,
  SetStateAction,
  useState,
} from "react";
import Navigation from "./Navigation";

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div>
      <Navigation />
      {children}
    </div>
  );
};
export default Layout;
