import React from "react";
import "../css/Letra28.css";


const Somos = () => {
  return (
    <>
      
      <div className=" mx-auto max-w-7xl flex flex-row mt-32"> {/*Padre */}
        <div className=" basis-1/2 ">  {/*Imagen */}
          <img className="relative" src="https://validthemes.live/themeforest/crysa/assets/img/about/5.jpg" alt="" />
          <div className="absolute w-[15px] h-[650px] bg-white translate-x-80 -translate-y-[640px]"></div>
          <div className="absolute w-[320px] h-[70px] bg-white translate-x-80 -translate-y-[640px]"></div>
          <div className="absolute w-[320px] h-[70px] bg-white translate-x-0 -translate-y-16"></div>

          <div className="absolute flex flex-row h-[150px] w-[420px] bg-gradient-to-r from-[#022391] via-[#0747B6] to-[#0D6ADB] -translate-x-12 -translate-y-52">
            <div className="1/4 pt-4 pl-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect><line x1="7" y1="2" x2="7" y2="22"></line><line x1="17" y1="2" x2="17" y2="22"></line><line x1="2" y1="12" x2="22" y2="12"></line><line x1="2" y1="7" x2="7" y2="7"></line><line x1="2" y1="17" x2="7" y2="17"></line><line x1="17" y1="17" x2="22" y2="17"></line><line x1="17" y1="7" x2="22" y2="7"></line></svg>
            </div>
            <div className="3/4">
              <h3 className=" text-white font-semibold pt-5 pb-3 px-3 text-lg">Certified Company</h3>
              <p className=" text-[#DDDDDD] leading-7 font-semibold  px-3 text-sm ">We adapt our delivery to the way your work, whether as an external provider.</p>

            </div>
          </div>

        </div>

        <div className=" basis-1/2  pl-20 first-letter:"> {/*Texto */}
          <div>
            <h2 className="font-medium text-lg bg-clip-text text-transparent bg-gradient-to-r from-[#0F4FBB] to-[#02BEF8] ">WHO WE ARE</h2>
            <h3 className="pr-40 text-3xl font-bold py-5 leading-10 text-[#232323] ">Preparing for your success trusted source in IT services</h3>
            <p className="text-[#66667F] leading-7 ">Dissuade ecstatic and properly saw entirely sir why laughter endeavor. In on my jointure horrible margaret suitable he followed speedily. Indeed vanity excuse or mr lovers of on. By offer scale an stuff. Blush be sorry no sight sang lose.</p>
          </div>

          <div className="flex flex-row pt-10 ">
            <div className="">
              <div className="flex">
                <svg className="mt-1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                <h3 className="pb-2 pl-3 text-xl font-bold text-[#232323]">IT Consultancy</h3>
              </div>
              <p className="text-[#66667F] leading-7">Believe fat how six drawing pursuit minute exact dear open to reaching out.</p>
            </div>

            <div className="">
              <div className="flex">
                <svg className="mt-1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                <h3 className="pb-2 pl-3 text-xl font-bold text-[#232323]">IT Consultancy</h3>
              </div>
              <p className="text-[#66667F] leading-7">Believe fat how six drawing pursuit minute exact dear open to reaching out.</p>
            </div>
          </div>

          <div className="flex">
            <h2 class="stroke lsize">28</h2>
            <h3 className=" pr-56 pt-28 pl-4 font-bold text-[#232323] text-lg ">Years of experience</h3>
          </div>


        </div>
      </div>

    </>
  );
};

export default Somos;
