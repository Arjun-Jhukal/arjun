import React from "react";

export default function Loading() {
  return (
    <section className="min-w-screen">
      <div className="h-[400px] bg-white-100 rounded-[50%] mb-8"></div>
      <span className="w-[50px] h-[15px] bg-white-100 mb-4 rounded-lg"></span>
      <h1 className="w-[200px] h-[20px] mb-8 bg-white-100 rounded-lg"></h1>
      <p className=" h-[15px] bg-white-100 mb-4 rounded-lg"></p>

      <div className="flex justify-start items-center gap-4">
        <div className="w-[48px] h-[48px] rounded-sm bg-white-100"></div>
        <div className="w-[48px] h-[48px] rounded-sm bg-white-100"></div>
      </div>
    </section>
  );
}
