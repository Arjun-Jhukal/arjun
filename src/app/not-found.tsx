import Link from "next/link";
import React from "react";

export default function PageNotFound() {
  return (
    <section className="min-h-screen flex justify-center items-center">
      <div className="container text-center">
        <span className="text-[22px] text-white">Error !</span>
        <h1 className="text-[160px] text-primary leading-[150px]">404</h1>
        <p className="mb-8">the page your are trying to access is either deleted or moved to new location.</p>

        <Link
          href={"/"}
          className="text-[22px] lg:px-12 py-4 rounded-[4px] text-white border-[1px] border-primary border-solid hover:bg-primary transition-all duration-300 ease-in-out"
        >
          Back To Home
        </Link>
      </div>
    </section>
  );
}
