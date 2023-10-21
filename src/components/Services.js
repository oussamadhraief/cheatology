import React, { useCallback, useRef, useState } from "react";
import { BiPaint } from "react-icons/bi";
import { TbCodeDots } from "react-icons/tb";
import { BiBook } from "react-icons/bi";
import { IconContext } from "react-icons";

export default function Services() {
  const observer = useRef();

  const [Viewing, setViewing] = useState(false);

  const servicesSection = useCallback((node) => {
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setViewing(true);
      }
    });
    if (node) observer.current.observe(node);
  });

  return (
    <section className="flex flex-col items-center py-32 shadow-3xl">
      <h1 className="text-primary text-3xl font-semibold">What do we do ?</h1>
      <div
        ref={servicesSection}
        className="w-full max-w-[1480px] h-fit overflow-visible flex flex-wrap justify-center gap-8 lg:gap-14 mt-20 px-5 md:px-10"
      >
        <div
          className={`w-[340px] h-[265px] flex items-center flex-col justify-start pt-10 gap-4 bg-white border border-primary rounded-xl px-4 py-4 text-white transition-all duration-1000 ${
            Viewing ? "opacity-1 translate-y-0" : "opacity-0 translate-y-52"
          }`}
        >
          <div className="w-fit h-fit p-4 bg-primary/30 rounded-full">
            <IconContext.Provider value={{ className: "text-primary w-6 h-6" }}>
              <TbCodeDots />
            </IconContext.Provider>
            </div>
            <h3 className="text-zinc-700 font-bold text-[16px] text-center">Projects from scratch</h3>
          

          <div className="flex gap-2 text-sm">
            <p className="text-zinc-500 text-sm text-center">
              I always write clear, concise, and modular code that is easy to
              read, understand, and maintain.
            </p>
          </div>
        </div>

        <div
          className={`w-[340px] h-[265px] flex items-center flex-col justify-start pt-10 gap-4 bg-white border border-primary rounded-xl px-4 py-4 text-white transition-all delay-300 duration-1000 ${
            Viewing ? "opacity-1 translate-y-0" : "opacity-0 translate-y-52"
          }`}
        >
          <div className="w-fit h-fit p-4 bg-primary/30 rounded-full">
            <IconContext.Provider value={{ className: "text-primary w-6 h-6" }}>
              <BiPaint />
            </IconContext.Provider>
            </div>
            <h3 className="text-zinc-700 font-bold text-[16px] text-center">Modifications & improvements</h3>
          
          <div className="flex gap-2 text-sm">
            <p className="text-zinc-500 text-sm text-center">
              I strive to blend functionality with aesthetics to deliver
              visually stunning and responsive web solutions.
            </p>
          </div>
        </div>

        <div
          className={`w-[340px] h-[265px] flex items-center flex-col justify-start pt-10 gap-4 bg-white border border-primary rounded-xl px-4 py-4 text-white transition-all duration-1000 delay-700 ${
            Viewing ? "opacity-1 translate-y-0" : "opacity-0 translate-y-52"
          }`}
        >
          <div className="w-fit h-fit p-4 bg-primary/30 rounded-full">
            <IconContext.Provider value={{ className: "text-primary w-6 h-6" }}>
              <BiBook />
            </IconContext.Provider>
            </div>
            <h3 className="text-zinc-700 font-bold text-[16px] text-center">Decoding your code</h3>
          
          <div className="flex gap-2 text-sm">
            <p className="text-zinc-500 text-sm text-center">
              I ensure that your website is not only fast and reliable, but also
              protected from potential threats and vulnerabilities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
