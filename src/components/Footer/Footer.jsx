import React from "react";

export default function Footer() {
  return (
    <>
      <div className=" bg-[#2c3e50] text-white flex justify-center items-center m-0 p-10">
        <div className=" flex flex-col md:flex-row flex-wrap w-full justify-around">
          <div className="  flex-col text-center flex-[1_0_0%]">
            <h3 className=" pt-5 text-2xl mb-2">LOCATION</h3>
            <p className=" mb-2">2215 John Daniel Drive</p>
            <p className=" mb-2">Clark, MO 65243</p>
          </div>
          <div className=" text-white text-center flex-[1_0_0%]">
            <h3 className="text-2xl pt-5 mb-2">AROUND THE WEB</h3>
            <div className="icons">
              <i className="fa-brands fa-facebook mx-1 border-solid border-2 border-white p-3 rounded-full"></i>
              <i className="fa-brands fa-twitter mx-1  border-solid border-2 border-white p-3 rounded-full"></i>
              <i className="fa-brands fa-linkedin-in mx-1  border-solid border-2 border-white p-3 rounded-full"></i>
              <i className="fa-solid fa-globe mx-1 border-solid border-2 border-white p-3 rounded-full"></i>
            </div>
          </div>
          <div className="text-white text-center flex-[1_0_0%]">
            <div className="text-center">
              <h3 className="text-2xl pt-5 mb-2">ABOUT FREELANCER</h3>
              <p>
                Freelance is a free to use, licensed Bootstrap theme created by
                Route
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className=" p-3 text-center bg-[#1a252f] text-white">
        <p>Copyright © Your Website 2021</p>
      </div>
    </>
  );
}
