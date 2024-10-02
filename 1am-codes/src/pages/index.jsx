import { Helmet } from "react-helmet";
import { Img, Heading } from "../../components";
import JoinCommunitySection from "./DesktopFive/JoinCommunitySection";
import WhyCodeAloneSection from "./DesktopFive/WhyCodeAloneSection";
import React from "react";

export default function DesktopFivePage() {
  return (
    <>
      <Helmet>
        <title>Join the Coding Community | 1AMcreators</title>
        <meta
          name="description"
          content="Master coding with 1AMcreators.com. Access top-tier chatbot tutorials and join a global community of learners. Elevate your skills and code with confidence."
        />
      </Helmet>
      <div className="w-full bg-white-a700">
        <div className="mb-1.5">
          <div className="flex h-[1838px] flex-col items-center bg-[url(/public/images/img_group_2.png)] bg-cover bg-no-repeat px-14 py-[272px] md:h-auto md:p-5">
            <div className="mb-[666px] flex w-[58%] justify-center md:w-full">
              <div className="flex w-full flex-col items-center">
                <Heading
                  size="headingmd"
                  as="h1"
                  className="self-stretch text-center text-[128px] font-bold uppercase leading-[98px] text-yellow-900 md:text-[48px]"
                >
                  Revolutionize Your Coding with{" "}
                </Heading>
                <Img
                  src="images/logo.png"
                  alt="Company Logo"
                  className="h-[114px] w-[30%] object-contain"
                />
                <div className="mt-[200px] flex w-[16%] flex-col items-center md:w-full">
                  <div className="flex flex-col items-center gap-1.5 self-stretch">
                    <Heading
                      size="headingxs"
                      as="h2"
                      className="font-barlow text-[13px] font-black uppercase text-blue_gray-900"
                    >
                      Scroll to Explore
                    </Heading>
                    <div className="h-[26px] w-px bg-blue_gray-900" />
                    <Heading
                      size="headingxs"
                      as="h3"
                      className="relative mt-[-16px] rotate-[-90deg] text-[30px] font-bold uppercase text-yellow-900 md:text-[28px] sm:text-[26px]"
                    >
                      &lt;
                    </Heading>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative mt-[-944px] flex flex-col gap-0.5 rounded-bl-[20px] rounded-br-[20px] bg-white-a700">
              <div className="flex h-[1838px] flex-col items-center justify-center bg-[url(/public/images/img_group_3.png)] bg-cover bg-no-repeat px-14 py-[118px] md:h-auto md:p-5">
                <div className="mx-auto mb-[22px] flex w-full max-w-[1294px] flex-col gap-[150px] self-stretch md:gap-28 sm:gap-[75px]">
                  {/* join community section */}
                  <JoinCommunitySection />

                  {/* why code alone section */}
                  <WhyCodeAloneSection />
                </div>
              </div>

              <Img
                src="images/bg.svg"
                alt="Bg"
                className="h-[392px] rounded-bl-[20px] rounded-br-[20px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
