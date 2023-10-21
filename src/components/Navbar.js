import React from "react";

export default function Navbar() {
  return (
    <div className="fixed top-0 left-0 h-fit w-full bg-white shadow-md flex justify-between items-center px-20 py-3 z-50">
      <div className="flex items-center gap-2 -mt-1">
        <img src="/logo.png" alt="" className="w-10" />
        <h1 className="text-2xl text-primary font-bold mt-2 font-mono">Cheatology</h1>
      </div>
      <nav>
        <ul className="h-fit flex justify-between items-center gap-20 text-zinc-700 font-semibold">
          <li className="hover:text-primary py-2 border-b-2 border-transparent hover:border-primary cursor-pointer">
            Introduction
          </li>
          <li className="hover:text-primary py-2 border-b-2 border-transparent hover:border-primary cursor-pointer">
            Services
          </li>
          <li className="hover:text-primary py-2 border-b-2 border-transparent hover:border-primary cursor-pointer">
            Contact Us
          </li>
        </ul>
      </nav>
    </div>
  );
}
