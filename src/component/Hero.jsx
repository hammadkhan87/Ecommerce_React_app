import React from "react";

import clip from "../assets/video/clip.mp4";

const Hero = ({
  heroapi: { title, subtitle, btntext, img, sociallinks, videos },
}) => {
  return (
    <>
      <div className="relative h-auto w-auto flex flex-col">
        <div
          className="bg-theme clip-path h-[85vh] lg:[75vh} md:h-[65-vh] sm:h-[55vh] w-auto absolute top-0 left-0 right-0
      opacity-100 z-10"
        ></div>
        <div className="relative opacity-100 z-20 grid items-center justify-items-center nike-container">
          <div className="grid items-center justify-center mt-20 md:mt-20 ">
            <h1
              className="text-6xl lg:text-5xl md:text-4xl sm:text-3xl xsm:text-2xl font-extrabold filter drop-shadow-sm
            text-slate-200"
            >
              {title}
            </h1>
            <h1
              className="text-6xl lg:text-5xl md:text-4xl sm:text-3xl xsm:text-2xl font-extrabold filter drop-shadow-sm
            text-slate-200"
            >
              {subtitle}
            </h1>
            <button
              type="button"
              className="button-theme rounded-xl text-white bg-slate-200 my-5"
            >
              {btntext}
            </button>
            <div
              className="grid items-center gap-5 md:gap-3 absolute top-[33vh] lg:top-[27vh]
            left-[10%] xl:left-0 w-auto h-auto"
            >
              {videos?.map((val, i) => (
                <div key={i}>
                  <div
                    className="relative h-28 w-32 rounded-xl overflow-hidden group cursor-pointer transition-all duration-300
                    lg:w-28 md:w-24 sm:w-16 lg:h-24 md:h-20 sm:h-14"
                  >
                    <img
                      src={val.imgsrc}
                      alt="img/clip"
                      className=" inset-0 flex h-full w-full object-cover position-absolute
                  top-0 left-0 right-0 rounded-xl opacity-100 z-10 transition-opacity duration-300"
                    />
                    <video
                      autoPlay={true}
                      loop={true}
                      muted={true}
                      playsInline={true}
                      className="absolute top-0 left-0 right-0 flex h-full w-full object-cover opacity-0 z-0
                  group-hover:opacity-100 group-hover:z-50 rounded-xl"
                    >
                      <source type="video/mp4" src={clip} />
                    </video>
                  </div>
                </div>
              ))}
            </div>
            <div className="grid items-center absolute top-[33vh] lg:top-[27vh] right-0 gap-3">
              {sociallinks?.map((val,i)=>(
                  <img key={i} src={val.icon} alt="icon" className="w-8 h-8 flex items-center cursor-pointer md:w-6 md:h-6
                  sm:w-5 sm:h-5 transition-all duration-200 hover:scale-110"></img>
              ))}
            </div>
          </div>
          <div className="">
            <img
              src={img}
              alt="img-here"
              className="w-auto h-[45vh] lg:h-[35vh]
            md:h-[31vh] sm:h-[21vh] xsm:h-[19vh] transitions-theme -rotate-[25deg] mt-3
            hover:rotate-0 cursor-pointer object-fill"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
