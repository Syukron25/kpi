"use client"

import Sidebar from "@/comp/sidebar";
import Buttontime from "@/comp/buttontime";
import Searchtime from "@/comp/search";
import Diagram from "@/comp/chart";
import DiagramKaryawan from "@/comp/barchartkaryawan";
import Card from "@/comp/card";
import DiagramPolar from "@/comp/chartpolar";


export default function Home() {

 

  return (
    <div className="flex flex-col bg-slate-100 w-screen h-screen ">
      <Sidebar home="bg-slate-100" />
        <div className="flow-root m-4 ml-20">
        <Buttontime />
        <Searchtime />
        </div>
      <div className="flex h-4/5 ml-20 ">
    
      <div className="flex flex-col w-5/12 h-full bg-white rounded-3xl shadow-xl mr-7 p-4 pb-20 ">
        <p className="text-center w-full font-bold text-blue-500 "> Skor Performa Karyawan </p>
        <DiagramKaryawan />
      </div>
      <div className="flex flex-col w-7/12 bg-white justify-center rounded-3xl shadow-xl mr-7  px-4 ">
      <div className="flex flex-row pt-6 px-2 gap-8"><Card /></div>
      <div className="flex flex-row gap-6">
      <div className="flex w-5/12 py-5">
      <DiagramPolar /></div>
      <div className="flex w-6/12 py-5">
      <Diagram /></div>
      </div></div>
        
      </div>
    </div>
  );
}
