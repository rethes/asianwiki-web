// react libraries
import React from "react";

// interfaces
import { LinkProps } from "./interfaces";

const Link: React.FC<LinkProps> = ({ className, href, children }) => {
  return (
    <a href={href} className={className}>
      {" "}
      {children} <h1 className="h1-tag"> Typescript rendering </h1>{" "}
    </a>
  );
};

export default Link;
