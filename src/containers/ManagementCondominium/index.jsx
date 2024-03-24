import React from "react";
import { Input,Button } from "antd";
import { SearchOutlined } from '@ant-design/icons';

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
          <Input
            style={{ width: 150, marginRight: 20 }}
            placeholder="ทะเบียนอาคาร"
          />
          <Input style={{ width: 150 }} placeholder="ชื่ออาคารชุด" />
          <Button type="primary" icon={<SearchOutlined />}>
        ค้นหาข้อมูล
      </Button>
        </div>
      </div>
    </>
  );
};

export default ManagementCondominium;
