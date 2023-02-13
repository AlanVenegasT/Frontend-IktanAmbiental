import React from "react";

const Tecnologia = () => {
  return (
    <>
    <div className="w-full">

    <img className="absolute h-[550px] flex right-0 translate-y-72" src=" Lineas.png " alt="" />

     <div className=" mx-auto max-w-7xl"> {/*Div general */}
      <div className="flex flex-row -translate-y-28 " > {/*Cuadros de texto */}
        <div className="flex flex-row basis-1/2 bg-gradient-to-r from-[#022391] via-[#0747B6] to-[#0D6ADB] mx-3">
            <div className="basis-1/3">
              <img className="h-52 mt-12" src="Libroverde.png" alt="" />
            </div>
            <div className="basis-2/3">
              <h3 className="text-white font-semibold text-2xl pl-5 pt-14 pb-6">Customer satisfaction</h3>
              <p className="text-white px-5 leading-8 pb-12 text-lg">Pointure horrible margaret suitable he followed speedily. Indeed vanity excuse or mr lovers of on. By offer scale an stuff. Blush be sorry no sight sang lose ecstatic and properly.</p>
            </div>
        </div>
        <div className="basis-1/2 bg-gradient-to-r from-[#00112E] via-[#0055F1] to-[#0059FC] mx-3 py-4 overflow-hidden ">
            <div className="relative">
            <img className="h-72 w-80 translate-x-80 -translate-y-10" src="puntos.png" alt="" />
            </div>

            <div className="absolute -translate-y-72">
          <h2 className=" text-white text-6xl font-semibold pt-7 pl-8">45 k</h2>
          <h3 className=" text-white font-semibold pl-8 py-3 text-2xl">Customers worldwide</h3>
          <p className=" text-white pr-24 pl-8 leading-7 text-lg">Mentioning horrible margaret suitable he followed speedily. Indeed vanity excuse or mr lovers of on. By offer scale an stuff. Blush be sorry no properly.</p>
          </div>
        </div>
      </div>

      <div className="flex flex-row"> {/*Seccion resdtante */}
          <div className="basis-1/2">
          <h2 className="font-medium text-lg bg-clip-text text-transparent bg-gradient-to-r from-[#0F4FBB] to-[#02BEF8] ">WHY CHOOSE US</h2>
          <h3 className="text-4xl font-semibold pr-60 py-6">Our goal is giving the best our customers</h3>
          <p className="pr-32 leading-8">Jennings appetite disposed me an at subjects an. To no indulgence diminution so discovered mr apartments. Are off under folly death wrote cause her way spite. Plan upon yet way get cold spot its week. Almost do am or limits hearts. Resolve parties but why she shewing. She sang know now</p>
          <button type="button" class="inline-flex items-center rounded-md border border-transparent  px-10 py-4 my-2  mr-20 text-base font-medium bg-gradient-to-r from-[#022391] via-[#0747B6] to-[#0D6ADB] text-white shadow-sm ">Button text</button>
          </div>
          <div className="basis-1/2">
            <div className="flex flex-col absolute w-[250px] h-[320px] translate-x-96 rounded-3xl bg-white border-2 border-[#E7E7E7] ">
              <div className="basis-1/2">
                  <img className="h-32 pl-14 pt-6" src="Cohete.png" alt="" />
              </div>
              <div className="basis-1/2 ">
                  <h2 className="text-center text-sm">PERFORMANCE</h2>
                  <h3 className="text-center font-bold text-lg pt-2">incredible </h3>
                  <h3 className="text-center font-bold text-lg "> Performance</h3>
                  <h4 className="text-center font-medium pt-4 ">READ MORE</h4>
              </div>
            </div>

            <div className="absolute w-[250px] h-[300px] translate-x-28 translate-y-16 rounded-3xl bg-[#F9F9F9] border-2 border-[#E7E7E7] ">
            <div className="basis-1/2">
                  <img className="h-32 pl-14 pt-6" src="Cohete.png" alt="" />
              </div>
              <div className="basis-1/2 ">
                  <h2 className="text-center text-sm pt-6">DATABASE</h2>
                  <h3 className="text-center font-bold text-lg pt-2">Secure database </h3>
                  <h4 className="text-center font-medium pt-4 ">READ MORE</h4>
              </div>
            </div>
            <div>
            </div>
          </div>
      </div>

      <div className="bg-white border-t-2 border-[#E7E7E7] mt-32">
      <div className="mx-auto max-w-7xl py-12 px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
          <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
            <img className="h-12" src="https://tailwindui.com/img/logos/tuple-logo-gray-400.svg" alt="Tuple" />
          </div>
          <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
            <img className="h-12" src="https://tailwindui.com/img/logos/mirage-logo-gray-400.svg" alt="Mirage" />
          </div>
          <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
            <img className="h-12" src="https://tailwindui.com/img/logos/statickit-logo-gray-400.svg" alt="StaticKit" />
          </div>
          <div className="col-span-1 flex justify-center md:col-span-3 lg:col-span-1">
            <img
              className="h-12"
              src="https://tailwindui.com/img/logos/transistor-logo-gray-400.svg"
              alt="Transistor"
            />
          </div>
          <div className="col-span-2 flex justify-center md:col-span-3 lg:col-span-1">
            <img
              className="h-12"
              src="https://tailwindui.com/img/logos/workcation-logo-gray-400.svg"
              alt="Workcation"
            />
          </div>
        </div>
      </div>
    </div>





</div>
     </div>
    </>
  );
};

export default Tecnologia;
