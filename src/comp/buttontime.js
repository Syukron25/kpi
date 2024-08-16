"use client"

import { useState } from "react"
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file

export default function Buttontime() {

const [tombolaktif, setAktif] = useState(1)
const [kaleaktif, setKalAktif] = useState(false)
const currendate = new Date()

const [selectionRange, setRange] = useState ( {
  startDate: new Date(),
  endDate: new Date(),
  key: 'selection',
})


const [tanggal, setTanggal] = useState ({
  startDate:currendate,
  endDate:currendate,
  key: 'selection'
})

function aktiv (tombol) {
  setAktif(tombol)
}

function hariini(){
  setTanggal({
    startDate:currendate,
    endDate:currendate
  }),
  setKalAktif(false)
}

function mingguini(){
  setTanggal({
    startDate:new Date(currendate.setDate(currendate.getDate()-currendate.getDay())),
    endDate:new Date((currendate.setDate(currendate.getDate()-currendate.getDay()+6))),
  }),
  setKalAktif(false)
}

function bulanini(){
  setTanggal({
    startDate:new Date(currendate.getFullYear(),currendate.getMonth(),1),
    endDate:new Date(currendate.getFullYear(),currendate.getMonth()+1,0)
  }),
  setKalAktif(false)
}

function tahunini(){
  setTanggal({
    startDate:new Date(currendate.getFullYear(),0,1),
    endDate:new Date(currendate.getFullYear(),11,31)
  }),
  setKalAktif(false)
}

function Custom(){
setKalAktif(!kaleaktif)
}

function Customok(){
  setKalAktif(false)
  setTanggal({
    startDate:selectionRange.startDate,
    endDate:selectionRange.endDate
  })

}

    return(  
      <>
        <div className="float-start breadcrumbs  bg-white md:px-3 rounded-2xl shadow-md">
        <div className="join w-full md:w-fit justify-center md:ju">
          <button onClick={function(){aktiv(1), hariini()}} className={`join-item btn-sm md:btn-md btn btn-outline  ${tombolaktif==1 ? 'btn-active' : ''}`}>Hari</button>
          <button onClick={function(){aktiv(2), mingguini()}} className={`join-item btn-sm md:btn-md btn btn-outline  ${tombolaktif==2 ? 'btn-active' : ''}`}>Minggu</button>
          <button onClick={function(){aktiv(3), bulanini()}}  className={`join-item btn-sm md:btn-md btn btn-outline  ${tombolaktif==3 ? 'btn-active' : ''}`}>Bulan</button>
          <button onClick={function(){aktiv(4), tahunini()}}  className={`join-item btn-sm md:btn-md btn btn-outline  ${tombolaktif==4 ? 'btn-active' : ''}`}>Tahun</button>
          <button onClick={function(){aktiv(5), Custom()}} className={`join-item btn btn-sm md:btn-md btn-outline  ${tombolaktif==5 ? 'btn-active' : ''}`}>Custom</button>
        </div>
        <div className="join w-full md:w-fit justify-center ">
        <p className="px-5">{tanggal.startDate.getDate()+"/"+(tanggal.startDate.getMonth()+1)+'/'+tanggal.startDate.getFullYear()} - {tanggal.endDate.getDate()+"/"+(tanggal.endDate.getMonth()+1)+'/'+tanggal.endDate.getFullYear()}</p>
        </div>
       
      </div>

<div className={`fixed md:left-72 flex-col md:top-24 top-44 z-30 ${kaleaktif ? 'flex' : 'hidden'}`}>
<div className="w-full flex gap-1 bg-slate-100 p-2 justify-end">
  <button onClick={()=>Customok()} className="btn btn-sm w-12  btn-primary">OK</button>
<button onClick={()=>setKalAktif(false)} className="btn btn-sm w-12  btn-error">X</button>
</div>
<DateRange
    ranges={[selectionRange]}
    onChange={(e)=>setRange(e.selection)}
  />  
  
  </div></>
    )
}