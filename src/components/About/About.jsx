import React from "react";

export default function About() {
  return (
    <>
      <div className=" bg-[#1abc9c]">
        <div className="text-center min-h-[calc(-112px+100vh)] flex justify-center items-center mt-20">
          <div className="text-white pt-4">
            <h2 className="font-bold text-4xl mb-5">ABOUT COMPONENT</h2>
            <div className="flex items-center justify-center mb-5">
              <div className="border-solid border-2 me-3 w-20"></div>
              <i className="fa-solid fa-star"></i>
              <div className="border-solid border-2 ms-3 w-20"></div>
            </div>
            <div className=" flex flex-col md:grid md:grid-cols-8 gap-4">
              <div className=" col-start-2 col-span-3 text-start">
                <p>
                  Freelancer is a free bootstrap theme created by Route. The
                  download includes the complete source files including HTML,
                  CSS, and JavaScript as well as optional SASS stylesheets for
                  easy customization.
                </p>
              </div>
              <div className=" col-start-5 col-span-3 text-start">
                <p>
                  Freelancer is a free bootstrap theme created by Route. The
                  download includes the complete source files including HTML,
                  CSS, and JavaScript as well as optional SASS stylesheets for
                  easy customization.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
