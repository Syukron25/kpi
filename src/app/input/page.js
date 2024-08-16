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
    <div className="flex flex-col bg-slate-100 w-screen h-screen ">
      <Sidebar input="bg-slate-100" />
      <div className="flow-root m-4 ml-20">
        <Searchtime />
      </div>
      <div className="flex h-4/5 ml-20 w-11/12 rounded-3xl shadow-md bg-white ">
      <Tabelinput />
      </div>
    </div>
  );
}
