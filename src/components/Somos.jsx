import React from "react";


const Somos = () => {
  return (
    <>
      <div className=" flex flex-row"> {/*padre */}
        <div className=" basis-1/2 bg-[#AEC90A]" py-20>{/*hijo1 izquierda */}
              <h2 className="text-2xl text-white ">Quienes somos? </h2>
              <h2 className="text-4xl">IKTAN Ambiental</h2>
        </div>
        <h2></h2>
        <div className=" basis-1/2 bg-white">{/*hijo2 derecha */}
        <h2>Holaaaaaaaaaaaaaa</h2>
        </div>

      </div>
    </>
  );
};

export default Somos;
