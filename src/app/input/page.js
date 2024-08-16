"use client"

import Sidebar from "@/comp/sidebar";
import Buttontime from "@/comp/buttontime";
import Searchtime from "@/comp/search";
import Tabel from "@/comp/tabel";
import Diagramprod from "@/comp/barchartpembelian";
import { useState } from "react";
import Tabelinput from "@/comp/tabelinput";

export default function Input() {



  return (
    <div className="flex flex-col bg-slate-100 w-screen md:h-screen h-full">
      <Sidebar input="bg-slate-100" />
      <div className="md:flow-root flex flex-col-reverse md:mt-4 mt-12 md:m-4 m-2 md:ml-20 gap-2">
        <Searchtime />
      </div>
      <div className="flex h-4/5 md:ml-20 m-1 md:w-11/12 rounded-3xl shadow-md bg-white ">
      <Tabelinput />
      </div>
    </div>
  );
}
