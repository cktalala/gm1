import React from "react";
import { Input, Button, Form } from "antd";
import { SearchOutlined } from "@ant-design/icons";

const ManagementCondominium = () => {
  return (
    <>
      {/* --------------------------------HEADBOX-------------------------------------------------------- */}
      <div className="h-full flex flex-col  p-5  bg-[#173154]">
        <div className=" bg-[#eaeaea] rounded p-6 w-full h-[80px] flex justify-center text-xl">
          จดทะเบียนนิติบุคคลอาคารชุด
        </div>
        {/* -------------------------------------CARD ช่องค้นหา------------------------------------------ */}
        <div className="bg-[#eaeaea] mt-4 rounded p-6 ">
          <Input
            style={{ width: 150, marginRight: 10 }}
            placeholder="ทะเบียนอาคาร"
          />
          <Input
            style={{ width: 150, marginRight: 15 }}
            placeholder="ชื่ออาคารชุด"
          />
          <Button
            style={{ marginRight: 400 }}
            className="bg-[#173154]"
            type="primary"
          >
            ค้นหาข้อมูล
          </Button>
          <Button className="bg-[#173154]" type="primary">
            สร้างข้อมูล
          </Button>
          {/* ----------------------------------------------ผู้รับผิดชอบ--------------------------------------------------- */}
          <Form>
            <div className=" mt-4 border-solid border border-black rounded p-6 w-full flex flex-col gap-3 items-center">
              <div>ผู้รับผิดชอบ</div>
              {/* ----------------------------------------------Fillข้อมูลในช่องผู้รับผิดชอบ--------------------------------------------------- */}
              <div className="w-[700px]">
                <Form.Item>
                  <div className="flex items-center justify-between">
                    <p>เลขบัตรประจำตัวประชาชน</p>
                    <Input
                      placeholder="เลขบัตรประจำตัวประชาชน"
                      style={{ width: 500 }}
                    />
                  </div>
                </Form.Item>
                <Form.Item>
                  <div className="flex items-center justify-between">
                    <p>ชื่อนามสกุล</p>
                    <Input placeholder="ชื่อ-นามสกุล" style={{ width: 500 }} />
                  </div>
                </Form.Item>
                <Form.Item>
                  <div className="flex items-center justify-between">
                    <p>ตำแหน่ง</p>
                    <Input placeholder="ตำแหน่ง" style={{ width: 500 }} />
                  </div>
                </Form.Item>
              </div>
            </div>
            <div className=" mt-4 border-solid border border-black rounded p-6 w-full  flex flex-col  gap-3">
              <div className="flex justify-center">รายละเอียด</div>

              {/* ----------------------------------------------Fillข้อมูลในช่องรายละเอียด--------------------------------------------------- */}
              <Form.Item label="ทะเบียนเลขที่">
                <Input style={{ width: 400 }} placeholder="ทะเบียนเลขที่" />
              </Form.Item>
              <Form.Item label="ชื่ออาคารชุด">
                <Input style={{ width: 400 }} placeholder="ชื่ออาคารชุด" />
              </Form.Item>
              <Form.Item label="วันที่ขอ">
                <Input style={{ width: 400 }} placeholder="วันที่ขอ" />
              </Form.Item>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
};

export default ManagementCondominium;
