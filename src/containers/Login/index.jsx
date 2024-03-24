"use client";
import React from "react";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Button } from "antd";

const LoginPage = () => {
  return (
    <>
      <div className="h-screen flex justify-center items-center">
        <div className="w-[300px]  bg-[#eaeaea] shadow-md rounded-lg p-20">
          <h1>ระบบตรวจติดตามงาน</h1>
          <div className="m-10 flex flex-col gap-1">
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px rounded-lg ">Button</button>
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px rounded-lg">Button</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
