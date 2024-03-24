import React from "react";
import { Input } from "antd";

const ManagementCondominium = () => {
  return (
    <>
      {/* --------------------------------HEADBOX-------------------------------------------------------- */}
      <div className="h-screen flex flex-col  p-5  bg-[#173154]">
        <div className=" bg-[#eaeaea] rounded p-6 w-full h-[80px] flex justify-center">
          จดทะเบียนนิติบุคคลอาคารชุด
        </div>
        {/* -------------------------------------CARD------------------------------------------ */}
        <div className="bg-[#eaeaea] mt-4 rounded p-6 ">
          <Input className="w-[150px]" placeholder="ทะเบียนอาคาร"  />
          <Input className="w-[150px]" placeholder="ชื่ออาคารชุด" />
        </div>
      </div>
    </>
  );
};

export default ManagementCondominium;
