import React from "react";
import PropTypes from "prop-types";

const shapes = {
  round: "rounded-lg",
};

const variants = {
  fill: {
    yellow_900: "bg-yellow-900 text-white-A700",
  },
};

const sizes = {
  xs: "h-[68px] px-[34px] text-[38px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant = "fill",
  size = "xs",
  color = "yellow_900",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex flex-row items-center justify-center gap-2 sm:px-5 text-center cursor-pointer whitespace-nowrap text-white-A700 font-myhandwriting uppercase text-[38px] bg-yellow-900 min-w-[368px] rounded-lg md:text-[36px] sm:text-[34px] ${shape && shapes[shape]} ${size && sizes[size]} ${variant && variants[variant][color]}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["xs"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf(["yellow_900"]),
};

export { Button };