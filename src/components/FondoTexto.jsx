import React from "react";

const FondoTexto = () => {
  return (
    <>
      <div className="relative bg-[#091D3E] mt-20 lg:mt-12 xl:mt-20">
        <div className="relative h-80 overflow-hidden bg-[#091D3E] md:absolute md:left-0 md:h-full md:w-1/3 lg:w-1/2">
          <img
            className="h-[500px] translate-x-16 mt-20 object-cover"
            src="https://validthemes.live/themeforest/crysa/assets/img/illustration/3.png"
            alt=""
          />
        </div>


        <div className="relative mx-auto max-w-7xl py-24 sm:py-32 lg:py-24 lg:px-8">
          <div className="pr-6 pl-6 md:ml-auto md:w-2/3 md:pl-16 lg:w-1/2 lg:pl-24 lg:pr-0 xl:pl-32">
            <h3 className="font-medium text-lg bg-clip-text text-transparent bg-gradient-to-r from-[#0F4FBB] to-[#02BEF8] ">
              WHO WE ARE
            </h3>
            <p className="mt-2 text-3xl lg:text-2xl xl:text-3xl font-bold  text-white">
              How do we manage IT services for your industry
            </p>
            <p className="font-bold text-white pt-5">Receive Custom Plan</p>
            <p className="mt-1  text-sm leading-6 text-gray-300 pr-16">
              Arose mr rapid in so vexed words. Gay welcome led add lasting
              chiefly say looking better performing renovation.
            </p>
            <p className="font-bold text-white pt-5">Receive Custom Plan</p>
            <p className="mt-1  text-sm leading-6 text-gray-300 pr-16">
              Arose mr rapid in so vexed words. Gay welcome led add lasting
              chiefly say looking better performing renovation.
            </p>
            <div className=" flex flex-row  mt-8 border-t-2 border-[#3A4A65] pt-6 ">
              <div className="flex flex-row basis-1/2 pl-2">
                <img className="basis-1/3 h-10 w-10" src="" alt="" />
                <p className="basis-2/3 text-xs text-white">
                  Have any Questions?{" "}
                  <span className="font-bold"> info@crysta.com </span>{" "}
                </p>
              </div>
              <div className="flex flex-row basis-1/2 pl-4">
                <img className="basis 1/3 h-10 w-10 " src="" alt="" />
                <p className="basis-2/3 text-xs text-white flex items-center pl-4 font-bold">
                  WATCH PROCESS
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FondoTexto;
