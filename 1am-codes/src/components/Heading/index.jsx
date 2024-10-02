import React from "react";

const sizes = {
  headingxs: "text-[13px] font-black",
  headings: "text-[30px] font-bold md:text-[28px] sm:text-[26px]",
  headingmd: "text-[128px] font-bold md:text-[48px]",
  headinglg: "text-[200px] font-bold md:text-[48px]"
};

const Heading = ({ children, className = "", size = "headinglg", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-yellow-900 font-handjet ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };