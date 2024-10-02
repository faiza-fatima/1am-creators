import{ Img, Heading } from "../../components";
import React from "react";

export default function WhyCodeAloneSection() {
    return(
        <>

        <div className="flex flex-col items-center gap-[130px] px-14 md:gap-[97px] md:px-5 sm:gap-[65px]">
            <Heading as="h2" className="text-[200px] font-bold uppercase text-black-900 md:text-[48px]">
                why code alone
                </Heading>
                <div className="relative ml-[172px] mr-48 h-[530px] w-[86%] content-center md:mx-0 md:h-auto">
                    <Img
                    src="images/code .png"
                    alt="Visual Image"
                    className="mx-auto h-[530px] w-full flex-1 rounded-[60px] object-cover">
                    </Img>
                    <div className="absolute bottom-0 left-0 right=0 top-0 m-auto h-[530px] flex-1 rounded-[60px] bg-orange-a700">
                    </div>
                </div>
            
        </div>

        </>
    );
}