import { Img, Text } from '../../components';
import React from 'react';

export default function JoinCommunitySection() {
  return (
    /* join community section */
    <div>
      <div className="flex flex-col items-start gap-2D md:gap-[6px] sm:gap-10">
        <div className="flex items-center gap-4 self-stretch md:flex-col">
          <Text
            as="p"
            className="w-[58%] self-end font-firacode text-[12px] font-normal uppercase leading-[41px] text-black-900 md:w-full md:self-auto md:text-[30px] sm:text-[28px]"
          >
            <span className="text-black-900">
              Your go-to platform for mastering code is now in your pocket. With&nbsp;
            </span>
            <span className="text-yellow-600">SIAICreators.com</span>
            <span className="text-black-900">
              , access world-class chatbot both free and premium, designed to elevate your skills, no matter where you
              are. Join a global community of passionate learners and start creating with confidence.
            </span>
          </Text>
          <Img
            src="images/image 3.png"
            alt="Feature Image"
            className="mb-3 h-[368px] w-[40%] rounded-[7px] object-contain md:w-full"
          />
        </div>
        <div>
          <button
            shape="round"
            rightIcon={
              <Img
                src="images/Discord New.png"
                alt="Discord New"
                className="mb-0.5 h-[56px] w-[62px] object-cover"
              />
            }
            className="min-w-[368px] gap-2 rounded-lg px-[34px] py-[16px]"
          >
            Join community
          </button>
        </div>
      </div>
    </div>
  );
}
