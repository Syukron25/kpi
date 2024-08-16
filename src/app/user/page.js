"use client"

import Sidebar from "@/comp/sidebar";
import Buttontime from "@/comp/buttontime";
import Searchtime from "@/comp/search";
import Tabel from "@/comp/tabel";
import Diagramprod from "@/comp/barchartpembelian";
import { useState } from "react";

export default function Home() {

const [data, setData] = useState({
  produksi: [30, 35, 32, 37, 29, 36],
  reject: [5, 3, 2, 5, 4, 2],
  kehadiran: [1,1, 1, 1, 1, 1]
})

  function Switchdata(i) {
    if (i==1) {
      setData({
              produksi: [30, 35, 32, 37, 29, 36],
              reject: [5, 3, 2, 5, 4, 2],
              kehadiran: [1,1, 1, 1, 1, 1]
            })
    } else if (i==2) {
              setData({
          produksi: [35, 36, 38, 35, 36, 37],
          reject: [5, 5, 2, 5, 4, 1],
          kehadiran: [1,1, 1, 1, 1, 1]
        })
     } else if (i==3){
     setData({
          produksi: [30, 30, 32, 33, 30, 35],
          reject: [1, 1, 2, 1, 3, 2],
          kehadiran: [1,1, 1, 1, 1, 1]
        })
     } else {
      setData({
        produksi: [32, 31, 37, 35, 32, 30],
        reject: [2, 2, 3, 3, 2, 1],
        kehadiran: [1,1, 1, 1, 1, 1]
      })
     }
  }


  return (
    <div className="flex flex-col bg-slate-100 w-screen md:h-screen h-full">
    <Sidebar user="bg-slate-100" />
    <div className="md:flow-root flex flex-col-reverse md:mt-4 mt-12 md:m-4 m-2 md:ml-20 gap-2">
      <Buttontime />
      <Searchtime />
    </div>
      <div className="flex md:flex-row flex-col h-4/5 m-1 md:ml-20 md:w-11/12 rounded-3xl shadow-md bg-white ">
        <div className="flex md:w-1/3 p-3">
          <Tabel sendata={Switchdata} />
          </div>
        <div className="flex flex-col md:w-2/3 p-3 gap-4 md:gap-0">
          <div className="flex h-1/3 ">
            <Diagramprod
              label='Produksi'
              data={data.produksi}
              color='Green' />
              </div>
          <div className="flex h-1/3">
            <Diagramprod
              label='Produk Reject'
              data={data.reject} 
              color='Red' /></div>
          <div className="flex h-1/3 mb-24 md:mb-0">
            <Diagramprod 
              label='Kehadiran'
              data={data.kehadiran}
              color='Blue' /></div>
        </div>
      </div>
    </div>
  );
}
