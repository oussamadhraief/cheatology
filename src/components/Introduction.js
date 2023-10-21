import React from "react";

export default function Introduction() {
  return (
    <section className="w-full px-10 py-20 flex flex-col items-center justify-center bg-[#FAFAFA] ">
      <h1 className="text-primary text-3xl font-semibold">Get to know us !</h1>
      <div className="w-full max-w-[1000px] flex items-start justify-center gap-14 mt-20">
        <div className="w-1/2">
            <h2 className="text-zinc-700 text-xl font-semibold whitespace-nowrap">Who are we ?</h2>
          <p className="leading-7 mt-10">
            Welcome to Cheatology, your one-stop solution for turning your
            college projects into reality! We understand that managing academic
            commitments can be overwhelming, and that's where we come in to ease
            your burden. Our platform is designed to empower students like you
            by offering a unique service - you tell us about your college
            project, and we'll bring it to life for you, all while helping you
            save valuable time and reduce stress. Welcome to a brighter,
            more manageable academic journey, with Cheatology, we've got you covered !
          </p>
          <div className="w-fit h-fit rounded-md bg-primary overflow-visible mt-10">
            <button className="px-8 py-3 border border-white rounded bg-primary text-white hover:translate-x-1 hover:-translate-y-1 transition-all">
              Contact us
            </button>
          </div>
        </div>
        <div className="w-1/2">
            <h2 className="text-zinc-700 text-xl font-semibold whitespace-nowrap">Technologies we use</h2>
            <div className="w-full flex flex-wrap gap-5 mt-10 text-sm">
                <p className="px-3 py-1 bg-primary/20 text-primary/80 w-fit rounded font-semibold">HTML</p>
                <p className="px-3 py-1 bg-primary/20 text-primary/80 w-fit rounded font-semibold">CSS</p>
                <p className="px-3 py-1 bg-primary/20 text-primary/80 w-fit rounded font-semibold">JavaScript</p>
                <p className="px-3 py-1 bg-primary/20 text-primary/80 w-fit rounded font-semibold">ReactJS</p>
                <p className="px-3 py-1 bg-primary/20 text-primary/80 w-fit rounded font-semibold">React Native</p>
                <p className="px-3 py-1 bg-primary/20 text-primary/80 w-fit rounded font-semibold">Next.js</p>
                <p className="px-3 py-1 bg-primary/20 text-primary/80 w-fit rounded font-semibold">TypeScript</p>
                <p className="px-3 py-1 bg-primary/20 text-primary/80 w-fit rounded font-semibold">TailwindCSS</p>
                <p className="px-3 py-1 bg-primary/20 text-primary/80 w-fit rounded font-semibold">Express.js</p>
                <p className="px-3 py-1 bg-primary/20 text-primary/80 w-fit rounded font-semibold">Node.js</p>
                <p className="px-3 py-1 bg-primary/20 text-primary/80 w-fit rounded font-semibold">MySQL</p>
                <p className="px-3 py-1 bg-primary/20 text-primary/80 w-fit rounded font-semibold">PostgreSQL</p>
                <p className="px-3 py-1 bg-primary/20 text-primary/80 w-fit rounded font-semibold">MongoDB</p>
                <p className="px-3 py-1 bg-primary/20 text-primary/80 w-fit rounded font-semibold">Stripe</p>
                <p className="px-3 py-1 bg-primary/20 text-primary/80 w-fit rounded font-semibold">PHP</p>
                <p className="px-3 py-1 bg-primary/20 text-primary/80 w-fit rounded font-semibold">CodeIgniter</p>
                <p className="px-3 py-1 bg-primary/20 text-primary/80 w-fit rounded font-semibold">Symfony</p>
                <p className="px-3 py-1 bg-primary/20 text-primary/80 w-fit rounded font-semibold">Laravel</p>
                <p className="px-3 py-1 bg-primary/20 text-primary/80 w-fit rounded font-semibold">Python</p>
            </div>
        </div>
      </div>
    </section>
  );
}
