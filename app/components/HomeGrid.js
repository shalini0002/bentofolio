import React, { useEffect, useState } from "react";
import { useTrail, animated, easings, useScroll } from "@react-spring/web";

import { GRIDS } from "../constants";

export default function HomeGrid({ setCurrentGrid, animatedStyles }) {
  const [nameIdx, setNameIdx] = useState(0);
  const name = "Shalini".split("");

  const [subheadingIdx, setSubheadingIdx] = useState(0);
  const subheading = "creative Web Developer".split("");

  useEffect(() => {
    const id = setInterval(() => {
      if (nameIdx < name.length) {
        setNameIdx(nameIdx + 1);
      }
      if (subheadingIdx < subheading.length) {
        setSubheadingIdx(subheading.length);
      }
    }, 100);

    return () => {
      clearInterval(id);
    };
  });

  const trails = useTrail(7, {
    from: { scale: 0 },
    to: { scale: 1 },
    leave: { scale: 1 },
    config: {
      easing: easings.easeInBack,
      delay: 300,
    },
  });

  return (
    <>
      <animated.div
        className={`grid grid-cols-1 md:grid-cols-9 md:grid-rows-9 w-screen md:h-screen p-5 gap-5 bg-stone-200 `}
      >
        <animated.div
          style={animatedStyles}
          className="row-start-5 md:row-span-6 md:col-span-3"
        >
          <animated.div
            style={trails[1]}
            className="relative bg-[#F4A261] border border-black h-full w-full"
          >
            <h1>gdjfhsdljfh</h1>
          </animated.div>
        </animated.div>
        {/* //projects */}
        <animated.div
          style={animatedStyles}
          className="md:row-span-3 md:col-span-3"
        >
          <animated.div
            onClick={() => setCurrentGrid(GRIDS[1])}
            style={trails[3]}
            className="relative h-full w-full bg-[#2A9D8F] border border-black"
          >
            <h1>Projects!</h1>
          </animated.div>
        </animated.div>
        {/* //education */}
        <animated.div
          style={animatedStyles}
          className="md:row-span-3 md:col-span-3"
        >
          <animated.div
            style={trails[2]}
            className="relative h-full w-full bg-[#9ad1ea] border border-neutral-900"
          >
            <h1>Education</h1>
          </animated.div>
        </animated.div>

        <animated.div
          style={animatedStyles}
          className="row-start-1 md:col-span-4 md:row-span-3"
        >
          <animated.div
            style={trails[0]}
            className="h-full w-full p-10 bg-[#e9c46a] border border-black flex flex-col items-center justify-center gap-3"
          >
            <div className="border border-neutral-900 bg-[#264653] w-fit px-5 py-3">
              <span className="text-5xl font-bold">
                {name.slice(0, nameIdx).join("")}
                <span className="inline-block mx-2 w-6 h-1 bg-[#2A9D8F] animate-pulse"></span>
              </span>
            </div>
            <div className="border text-center border-neutral-900 bg-[#264653] w-fit px-5 py-2">
              <span className="md:text-md">
                {subheading.slice(0, subheadingIdx).join("")}
                <span className="inline-block w-3 h-0.5 mx-1 bg-[#2A9D8F] animate-pulse"></span>
              </span>
            </div>
          </animated.div>
        </animated.div>
        <animated.div
          style={animatedStyles}
          className="md:row-span-4 md:col-span-2"
        >
          <animated.div
            style={trails[5]}
            className="h-full w-full relative border border-neutral-900 bg-[#2A9D8F]"
          >
            <h1>Resume</h1>
          </animated.div>
        </animated.div>
        <animated.div
          style={animatedStyles}
          className="md:row-span-3 md:col-span-5"
        >
          <animated.div
            style={trails[4]}
            className="h-full w-full border border-black md:flex justify-between items-center p-10 gap-5 bg-[#94d1ee]"
          >
            <h1>contact</h1>
          </animated.div>
        </animated.div>
        <animated.div
          style={animatedStyles}
          className="md:row-span-3 md:col-span-2"
        >
          <animated.div
            style={trails[6]}
            className="h-full w-full relative border border-neutral-900 bg-[#F4A261]"
          >
            <h1>Resume</h1>
          </animated.div>
          
        </animated.div>
        <animated.div
            style={animatedStyles}
            className="md:row-span-2 md:col-span-2"
          >
            <animated.div
              style={trails[1]}
              className="h-full w-full relative border border-neutral-900 bg-[#F4A061]"
            >
              <h1>Me</h1>
            </animated.div>
          </animated.div>
      </animated.div>
    </>
  );
}
