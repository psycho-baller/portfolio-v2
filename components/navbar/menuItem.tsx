import * as React from "react";
import { motion } from "framer-motion";
import { Heading, Text } from "@chakra-ui/react";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};
interface itemsProps {
  dir: string;
  color: string;
}

const items = [
  {
    dir: "Home",
    color: "#FF008C",
  },
  {
    dir: "Expertise",
    color: "#D309E1",
  },
  {
    dir: "Work",
    color: "#9C1AFF",
  },
  {
    dir: "Experience",
    color: "#7700FF",
  },
  {
    dir: "Contact",
    color: "#4400FF",
  }
] as itemsProps[];


export const MenuItem = ({ i }: {
    i: number;
}) => {
  // make it the same color as the bg
  // const style = { color: `${items[i].color}` };
  return (
    <motion.li
      // id="content"
      variants={variants}
      // whileHover={{ scale: 1.1 }}
      // whileTap={{ scale: 0.95 }}
      // style={style}
    >
      <Heading
        onClick={() => {
          if (document) {
            const _id = document.getElementById(items[i].dir.toLowerCase());
            if (_id) {
              // wait for the navbar to close
              setTimeout(() => {
                _id.scrollIntoView({ behavior: "smooth" });
              }, 300);
            }
          }
        }}
        color={items[i].color}
        fontSize={{ base: "3rem", sm: "5rem" }}
      >
        {items[i].dir}
      </Heading>
      {/* <div className="icon-placeholder" style={style} />
      <div className="text-placeholder" style={style} /> */}
    </motion.li>
  );
};
