import react from "react";

const sizes = {
    textxs: "text-[32px] font-normal not-italic md:text-[30px] sm:text-[28px]",
};

const Text = ({ children, className = "", as, size= "textxs", ...restProps}) => {
    const Component = as || "p";
    return(
        <Component className={`text-black-900 font- firacode ${className} ${sizes[size]}`} {...restProps}>
            {children}
            </Component>

    );
};

export{Text};