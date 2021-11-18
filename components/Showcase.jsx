import Image from "next/image";
import React from "react";
import patternSVG from "../assets/home/desktop/pattern-circles.svg";
import firstSpeakerSM from "../assets/home/mobile/image-speaker-zx9.png";
import secondSpeakerSM from "../assets/home/mobile/image-speaker-zx7.jpg";
import earphoneSM from "../assets/home/mobile/image-earphones-yx1.jpg";

import firstSpeakerMD from '../assets/home/tablet/image-speaker-zx9.png';
import secondSpeakerMD from "../assets/home/tablet/image-speaker-zx7.jpg";
import earphoneMD from "../assets/home/tablet/image-earphones-yx1.jpg";

import Button from "./Button";

const Showcase = () => {
  return (
    <section className="mt-24">
      {/* First Showcase Card */}
      <div className="md:h-[720px] md:mt- flex justify-center items-end relative h-[600px] bg-[#D87D4A] rounded-lg overflow-hidden">
        <div className="absolute h-full w-full">
          <Image
            src={patternSVG}
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
        {/** For MD speaker */}
        <div className="md:block hidden absolute z-20 left-1/2 top-12 transform -translate-x-1/2 -transform-y-1/2">
          <Image
            src={firstSpeakerMD}
            alt="zx9 speaker"
            width={197.21}
            height={237}
            layout="fixed"
          />
        </div>
        <div className="absolute">
          <div className="md:w-[350px] flex flex-col justify-center items-center text-center gap-6 mb-12">
            <h2 className="md:text-h1 text-showcase-mobile font-bold text-white uppercase mb-1">
              zx9<br></br>speaker
            </h2>
            <p className="md:mb-5 text-body text-white opacity-75">
              Upgrade to premium speakers that are phenomenally built to deliver
              truly remarkable sound.
            </p>
            <Button type={"secondary-2"}>see product</Button>
          </div>
        </div>
      </div>

      {/* Second Showcase card */}
      <div className="relative md:mt-9 h-[320px] mt-6 rounded-lg overflow-hidden">
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
        <div className="absolute md:left-16 left-6 top-1/2 transform -translte-x-1/2 -translate-y-1/2">
          <h3 className="text-h4 text-black font-bold uppercase mb-8">
            zx7 speaker
          </h3>
          <Button type={"secondary-1"}>see product</Button>
        </div>
      </div>

      {/* Third showcase card*/}
      <div className="md:mt-9 md:grid-cols-2 md:grid-rows-1 md:gap-3 grid grid-cols-1 grid-rows-2 gap-2 mt-6">
        <div className="relative md:h-[320px] h-[200px] rounded-lg overflow-hidden">
          <div className="absolute h-full w-full">
            <Image
              src={earphoneSM}
              alt="yx1 earphones"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
        <div className="relative md:h-[320px] h-[200px] bg-[#F1F1F1] rounded-lg">
          <div className="absolute md:left-10 left-6 top-1/2 transform -translte-x-1/2 -translate-y-1/2">
            <h3 className="text-h4 text-black font-bold uppercase mb-8">
              yx1 earphones
            </h3>
            <Button type={"secondary-1"}>see product</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
