import Image from "next/image";
import React from "react";
import patternSVG from "../assets/home/desktop/pattern-circles.svg";
import firstSpeakerPNG from "../assets/home/mobile/image-speaker-zx9.png";
import secondSpeakerPNG from "../assets/home/mobile/image-speaker-zx7.jpg";
import earphonePNG from "../assets/home/mobile/image-earphones-yx1.jpg";
import Button from "./Button";

const Showcase = () => {
  return (
    <section className="mt-24">
      <div className="flex justify-center items-end relative h-[600px] bg-[#D87D4A] rounded-lg">
        <div className="absolute -top-32 z-10 w-full h-full">
          <Image
            src={patternSVG}
            alt="circle pattern"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="absolute z-20 left-1/2 top-14 transform -translate-x-1/2 -transform-y-1/2">
          <Image
            src={firstSpeakerPNG}
            alt="zx9 speaker"
            width={172.25}
            height={207}
            layout="fixed"
          />
        </div>
        <div className="flex flex-col justify-center items-center text-center gap-6 mb-12 px-5">
          <h2 className="text-showcase-mobile font-bold text-white uppercase mb-1">
            zx9<br></br>speaker
          </h2>
          <p className="text-body text-white opacity-75">
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <Button type={"secondary-2"}>see product</Button>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
