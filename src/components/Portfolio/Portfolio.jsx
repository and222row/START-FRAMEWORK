import React, { useState } from "react";
import img_1 from "./../../assets/poert1.png";
import img_2 from "./../../assets/port2.png";
import img_3 from "./../../assets/port3.png";

export default function Portfolio() {
  const imgSrc = [`${img_1}`, `${img_2}`, `${img_3}`];
  const [modalImgsrc, setModalImgSrc] = useState("");
  function changeModalImg(src) {
    setModalImgSrc(src);
  }
  return (
    <>
      <div className="text-center min-h-[calc(-112px+100vh)] flex justify-center items-center mt-28">
        <div className="text-[#213547] pt-4">
          <h2 className="font-bold text-4xl mb-5">PORTFOLIO COMPONENT</h2>
          <div className="flex items-center justify-center mb-5">
            <div className="border-solid border-2 me-3 w-20 border-[#213547]"></div>
            <i className="fa-solid fa-star"></i>
            <div className="border-solid border-2 ms-3 w-20 border-[#213547]"></div>
          </div>
          <div className="container mx-auto max-w-screen-lg p-5">
            <div className="flex flex-col md:grid md:grid-cols-3 gap-5 ">
              <div
                className=" rounded-md relative"
                data-modal-target="default-modal"
                data-modal-toggle="default-modal"
                onClick={() => {
                  changeModalImg(imgSrc[0]);
                }}
              >
                <img src={img_1} className=" w-full" />
                <div className=" absolute start-0 w-full top-0  h-full flex justify-center items-center bg-[#1abc9ce6] opacity-0 transition-opacity duration-500 hover:opacity-100 cursor-pointer">
                  <i className="text-white fa-solid fa-plus fa-6x"></i>
                </div>
              </div>
              <div
                className="rounded-md overflow-hidden relative"
                data-modal-target="default-modal"
                data-modal-toggle="default-modal"
                onClick={() => {
                  changeModalImg(imgSrc[1]);
                }}
              >
                <img src={img_2} className=" w-full" />
                <div className=" absolute start-0 w-full top-0  h-full flex justify-center items-center bg-[#1abc9ce6] opacity-0 transition-opacity duration-500 hover:opacity-100 cursor-pointer">
                  <i className="text-white fa-solid fa-plus fa-6x"></i>
                </div>
              </div>
              <div
                className="rounded-md overflow-hidden relative"
                data-modal-target="default-modal"
                data-modal-toggle="default-modal"
                onClick={() => {
                  changeModalImg(imgSrc[2]);
                }}
              >
                <img src={img_3} className=" w-full" />
                <div className=" absolute start-0 w-full top-0  h-full flex justify-center items-center bg-[#1abc9ce6] opacity-0 transition-opacity duration-500 hover:opacity-100 cursor-pointer">
                  <i className="text-white fa-solid fa-plus fa-6x"></i>
                </div>
              </div>
              <div
                className="rounded-md overflow-hidden relative"
                data-modal-target="default-modal"
                data-modal-toggle="default-modal"
                onClick={() => {
                  changeModalImg(imgSrc[0]);
                }}
              >
                <img src={img_1} className=" w-full" />
                <div className=" absolute start-0 w-full top-0  h-full flex justify-center items-center bg-[#1abc9ce6] opacity-0 transition-opacity duration-500 hover:opacity-100 cursor-pointer">
                  <i className="text-white fa-solid fa-plus fa-6x"></i>
                </div>
              </div>
              <div
                className="rounded-md overflow-hidden relative"
                data-modal-target="default-modal"
                data-modal-toggle="default-modal"
                onClick={() => {
                  changeModalImg(imgSrc[1]);
                }}
              >
                <img src={img_2} className=" w-full" />
                <div className=" absolute start-0 w-full top-0  h-full flex justify-center items-center bg-[#1abc9ce6] opacity-0 transition-opacity duration-500 hover:opacity-100 cursor-pointer">
                  <i className="text-white fa-solid fa-plus fa-6x"></i>
                </div>
              </div>
              <div
                className="rounded-md overflow-hidden relative"
                data-modal-target="default-modal"
                data-modal-toggle="default-modal"
                onClick={() => {
                  changeModalImg(imgSrc[2]);
                }}
              >
                <img src={img_3} className=" w-full" />
                <div className=" absolute start-0 w-full top-0  h-full flex justify-center items-center bg-[#1abc9ce6] opacity-0 transition-opacity duration-500 hover:opacity-100 cursor-pointer">
                  <i className="text-white fa-solid fa-plus fa-6x"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        id="default-modal"
        tabIndex="-1"
        aria-hidden="true"
        className="hidden bg-gray-100 bg-opacity-30 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
      >
        <div className="relative p-4 w-full max-w-2xl max-h-full">
          {/* <!-- Modal content --> */}
          <div>
            <img src={modalImgsrc} className=" w-full" />
          </div>
        </div>
      </div>
    </>
  );
}
