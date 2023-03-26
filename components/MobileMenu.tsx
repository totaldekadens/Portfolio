import { motion } from "framer-motion";
import { Dispatch, SetStateAction } from "react";

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i: number) => {
    const delay = 1 + i * 0.1;
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, type: "spring", duration: 1, bounce: 0 },
        opacity: { delay, duration: 0.03 },
      },
    };
  },
};

interface Props {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export default function MobileMenu({ open, setOpen }: Props) {
  return (
    <>
      <div
        className="flex sm:hidden"
        style={{ cursor: "pointer" }}
        onClick={() => setOpen(!open)}
      >
        {open ? <Burger2 /> : <Burger />}
      </div>
    </>
  );
}

/* With Burger */
function Burger() {
  return (
    <motion.svg
      width="30"
      height="30"
      viewBox="0 0 50 50"
      initial="hidden"
      animate="visible"
    >
      {/* Toppen */}
      <motion.line
        x1="5"
        y1="5"
        x2="20"
        y2="5"
        stroke="#ffffff"
        custom={0}
        variants={draw}
      />
      {/* Mitten */}
      <motion.line
        x1="5"
        y1="22"
        x2="35"
        y2="22"
        stroke="#ffffff"
        custom={0.1}
        variants={draw}
      />

      {/* Botten */}
      <motion.line
        x1="5"
        y1="40"
        x2="45"
        y2="40"
        stroke="#ffffff"
        custom={0.2}
        variants={draw}
      />
    </motion.svg>
  );
}

/* With cross */
function Burger2() {
  return (
    <motion.svg
      width="30"
      height="30"
      viewBox="0 0 50 50"
      initial="hidden"
      animate="visible"
    >
      <motion.line
        x1="5"
        y1="5"
        x2="45"
        y2="40"
        stroke="#ffffff"
        //custom={0}
        variants={draw}
      />
      <motion.line
        x1="45"
        y1="5"
        x2="5"
        y2="40"
        stroke="#ffffff"
        custom={0.1}
        variants={draw}
      />
    </motion.svg>
  );
}

/* 
   <motion.line
        x1="220"
        y1={"340"}
        x2="360"
        y2="340"
        stroke="#ff0055"
        custom={3}
        variants={draw}
      />
      <motion.line
        x1="220"
        y1="310"
        x2="300"
        y2="310"
        stroke="#ff0055"
        custom={3.5}
        variants={draw}
      />
*/
