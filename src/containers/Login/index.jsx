"use client";
import { useRouter } from "next/navigation";
import React from "react";


const LoginPage = () => {
  const router = useRouter()
  return (
    <>
      <div className="h-screen flex justify-center items-center bg-[#173154] "> 
        <div className="w-[250px]  bg-[#eaeaea] shadow-md rounded-lg p-6">
          <h1 className="flex justify-center items-center text-gray-950 ">
            ระบบตรวจติดตามงาน
          </h1>
          <div className="mt-4 flex flex-col gap-2">
            <button className="bg-blue-500 hover:bg-blue-700 text-white text-sm py-1  rounded-lg" onClick={()=>router.push("/ManagementCondominium")}>
              จดทะเบียนนิติบุคคลอาคารชุด
            </button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white text-sm py-1  rounded-lg" onClick={()=>router.push("/ManagementEstablisment")}>
              การจัดตั้งนิติบุคคลหมู่บ้านจัดสรร
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
