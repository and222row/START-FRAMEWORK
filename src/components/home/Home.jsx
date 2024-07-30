import React from "react";

export default function Home() {
  return (
    <>
      <div className="flex justify-center items-center bg-[#1abc9c] mt-20">
        <div className="text-center mt-20 min-h-[calc(-112px+100vh)]">
          <img
            src="./src/assets/avataaars.svg"
            alt=""
            className="mb-3 w-full"
          />
          <div className="text-white pt-4">
            <h2 className="font-bold text-4xl mb-5">START FRAMEWORK</h2>
            <div className="flex items-center justify-center mb-5">
              <div className="border-solid border-2 me-3 w-20"></div>
              <i className="fa-solid fa-star"></i>
              <div className="border-solid border-2 ms-3 w-20"></div>
            </div>
            <span>Graphic Artist - Web Designer - Illustrator</span>
          </div>
        </div>
      </div>
    </>
  );
}
