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
    <div className="flex flex-col bg-slate-100 w-screen md:h-screen h-full">
      <Sidebar home="bg-slate-100" />
      <div className="md:flow-root flex flex-col-reverse md:mt-4 mt-12 md:m-4 m-2 md:ml-20 gap-2">
        <Buttontime />
        <Searchtime />
      </div>

      <div className="flex md:flex-row flex-col m-2 md:ml-20 ml-1 md:gap-0 gap-2">
        <div className="flex flex-col md:w-5/12 w-full md:h-full h-96 bg-white rounded-3xl shadow-xl p-2 md:mr-7 md:p-4 ">
          <p className="text-center w-full font-bold text-blue-500 "> Skor Performa Karyawan </p>
          <DiagramKaryawan />
        </div>
        <div className="flex flex-col w-full md:w-7/12  bg-white justify-center rounded-3xl shadow-xl ">
          <div className="flex md:flex-row flex-col pt-6 px-2 md:gap-8 gap-2">
            <Card />
          </div>
          <div className="flex flex-col md:flex-row md:gap-6 h-full gap-1">
            <div className="flex md:w-5/12 md:py-5 py-1">
              <DiagramPolar />
              </div>
            <div className="flex  md:w-6/12 md:py-5 py-1">
              <Diagram />
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}
