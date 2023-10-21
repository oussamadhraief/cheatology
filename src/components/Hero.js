import React from "react";

export default function Hero() {
  return (
    <section className="flex items-center">
      <div className="w-full flex flex-col items-center px-4 py-8 mx-auto text-center md:px-10 lg:px-32 xl:max-w-3xl">
        <h1 className="text-4xl font-bold sm:text-5xl whitespace-nowrap">
          Welcome to <span className="text-primary font-mono">Cheatology</span>, <br />
          your academic ally!
        </h1>
        <p className="px-8 mt-8 mb-12 text-lg text-zinc-600">
            Embrace a seamless academic journey—Cheatology is your secret weapon for success!
        </p>
        <div className="flex flex-wrap justify-center items-center gap-5">
          <div className="w-fit h-fit rounded-md bg-primary overflow-visible">
            <button className="px-8 py-3 border border-white rounded bg-primary text-white hover:translate-x-1 hover:-translate-y-1 transition-all">
              Contact us
            </button>
          </div>
          <div className="w-fit h-fit rounded bg-primary">
            <button className="px-8 py-3 border border-primary rounded text-primary bg-zinc-100 hover:translate-x-1 hover:-translate-y-1 transition-all">
                Learn more
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
