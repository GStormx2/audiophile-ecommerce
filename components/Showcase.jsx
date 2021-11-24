import Image from "next/image";
import React from "react";
import pattern from "../assets/home/desktop/pattern-circles.svg";
import patternLG from "../assets/home/desktop/pattern-circles-lg.svg";

import firstSpeakerSM from "../assets/home/mobile/image-speaker-zx9.png";
import secondSpeakerSM from "../assets/home/mobile/image-speaker-zx7.jpg";
import earphoneSM from "../assets/home/mobile/image-earphones-yx1.jpg";

import firstSpeakerMD from '../assets/home/tablet/image-speaker-zx9.png';
import secondSpeakerMD from "../assets/home/tablet/image-speaker-zx7.jpg";
import earphoneMD from "../assets/home/tablet/image-earphones-yx1.jpg";

import firstSpeakerLG from '../assets/home/desktop/image-speaker-zx9.png';
import secondSpeakerLG from '../assets/home/desktop/image-speaker-zx7.jpg';
import earphoneLG from  "../assets/home/desktop/image-earphones-yx1.jpg";

import Button from "./Button";

const Showcase = () => {
  return (
    <section className="lg:mt-44 mt-24">
      {/* First Showcase Card */}
      <div className="md:h-[720px] flex justify-center items-end relative lg:h-[560px] h-[600px] bg-[#D87D4A] rounded-lg overflow-hidden">
        {/** for SM + MD pattern */}
        <div className="block lg:hidden absolute h-full w-full">
          <Image
            src={pattern}
            alt="circle pattern"
            layout="fill"
            objectFit="cover"
          />
        </div>
        {/** for LG pattern */}
        <div className="hidden lg:block absolute h-full w-full">
          <Image
            src={patternLG}
            alt="circle pattern"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="block md:hidden absolute z-20 left-1/2 top-14 transform -translate-x-1/2 -transform-y-1/2">
          <Image
            src={firstSpeakerSM}
            alt="zx9 speaker"
            width={172.25}
            height={207}
            layout="fixed"
          />
        </div>
        {/** For 1st MD speaker */}
        <div className="lg:hidden md:block hidden absolute z-20 left-1/2 top-12 transform -translate-x-1/2 -transform-y-1/2">
          <Image
            src={firstSpeakerMD}
            alt="zx9 speaker"
            width={197.21}
            height={237}
            layout="fixed"
          />
        </div>
        {/** For 1st LG speaker */}
        <div className="lg:block hidden absolute z-20 left-[30%] -bottom-5 transform -translate-x-1/2 -transform-y-1/2">
          <Image
            src={firstSpeakerLG}
            alt="zx9 speaker"
            width={410.23}
            height={493}
            layout="fixed"
          />
        </div>
        <div className="absolute lg:right-[8%] lg:top-[20%]">
          <div className="sm:w-[280px] md:w-[350px] flex flex-col justify-center items-center text-center lg:text-left gap-6 mb-12">
            <h2 className="md:text-h1 text-showcase-mobile font-bold text-white uppercase mb-1">
              zx9 speaker
            </h2>
            <p className="relative md:mb-5 text-body text-white opacity-75">
              Upgrade to premium speakers that are phenomenally built to deliver
              truly remarkable sound.
            </p>
            <div className="relative lg:absolute lg:left-0 lg:-bottom-5">
              <Button link={"/speakers/zx9-speaker"} type={"secondary-2"}>see product</Button>
            </div>
          </div>
        </div>
      </div>

      {/* Second Showcase card */}
      <div className="relative lg:mt-14 md:mt-9 h-[320px] mt-6 rounded-lg overflow-hidden">
        <div className="md:hidden block absolute w-full h-full">
          <Image
            src={secondSpeakerSM}
            alt="zx7 speaker"
            layout="fill"
            objectFit="cover"
          />
        </div>
        {/** For MD 2nd Speakers */}
        <div className="md:block hidden absolute w-full h-full">
          <Image
            src={secondSpeakerMD}
            alt="zx7 speaker"
            layout="fill"
            objectFit="cover"
          />
        </div>
        {/** for LG 2nd speakers */}
        <div className="md:block hidden absolute w-full h-full">
          <Image
            src={secondSpeakerLG}
            alt="zx7 speaker"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="absolute lg:left-24 md:left-16 left-6 top-1/2 transform -translte-x-1/2 -translate-y-1/2">
          <h3 className="text-h4 text-black font-bold uppercase mb-8">
            zx7 speaker
          </h3>
          <Button link={"/speakers/zx7-speakers"} type={"secondary-1"}>see product</Button>
        </div>
      </div>

      {/* Third showcase card*/}
      <div className="lg:mt-14 md:mt-9 mt-6 md:grid-cols-2 md:grid-rows-1 md:gap-3 grid grid-cols-1 grid-rows-2 gap-2 lg:gap-7">
        {/** for SM earphone */}
        <div className="md:hidden block relative md:h-[320px] h-[200px] rounded-lg overflow-hidden">
          <div className="absolute h-full w-full">
            <Image
              src={earphoneSM}
              alt="yx1 earphones"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
        {/** for MD earphone */}
        <div className="hidden lg:hidden md:block relative md:h-[320px] h-[200px] rounded-lg overflow-hidden">
          <div className="absolute h-full w-full">
            <Image
              src={earphoneMD}
              alt="yx1 earphones"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
        {/** for LG earphone */}
        <div className="hidden lg:block relative md:h-[320px] h-[200px] rounded-lg overflow-hidden">
          <div className="absolute h-full w-full">
            <Image
              src={earphoneLG}
              alt="yx1 earphones"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
        <div className="relative md:h-[320px] h-[200px] bg-[#F1F1F1] rounded-lg">
          <div className="absolute lg:left-[17%] md:left-10 left-6 top-1/2 transform -translte-x-1/2 -translate-y-1/2">
            <h3 className="text-h4 text-black font-bold uppercase mb-8">
              yx1 earphones
            </h3>
            <Button link={"/earphones/yx1-earphones"} type={"secondary-1"}>see product</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
