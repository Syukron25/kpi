import {
    Chart,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend, PointElement, LineElement,
    scales
  } from "chart.js";
import { useState } from "react";
  import { Bar, Line } from "react-chartjs-2";

  Chart.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend, PointElement, LineElement
  );

export default function DiagramKaryawan() {

    const masterData = [
        {
            karyawan: 'Andi Fadli',
            skor: 95
        },
        {
            karyawan: 'Beni Susanto',
            skor: 100
        },
        {
            karyawan: 'Cahya Melati',
            skor: 100
        },
        {
            karyawan: 'Deni Malik',
            skor: 80
        },
        {
            karyawan: 'Evi Nirmala',
            skor: 70
        },
        {
            karyawan: 'Fajar Hidayanto',
            skor: 90
        }
    ]

    const [ChartData, setChartdata] = useState  (masterData)

    function tertinggi() {
        setChartdata (masterData.sort((a, b) => b.skor - a.skor))
    }

    function terendah() {
        setChartdata (masterData.sort((a, b) => a.skor - b.skor))
    }

    function abjad(){
        setChartdata(masterData.sort((a,b) =>{
            const namaA = a.karyawan.toUpperCase();
            const namaB = b.karyawan.toUpperCase();
            if (namaA < namaB) {
                return -1;
              }
              if (namaA > namaB) {
                return 1;
              }
            
              // names must be equal
              return 0;
        }
        ))
    }

    const options = {
        maintainAspectRatio: false,
        indexAxis: 'y',
        // Elements options apply to all of the options unless overridden in a dataset
        // In this case, we are setting the border of each horizontal bar to be 2px wide
        elements: {
          bar: {
            borderWidth: 3,
          }
        },
        responsive: true,
        plugins: {
          legend: {
            display: false,
          },
        }
      ,}

    const data = {
        labels: ChartData.map((item) => item.karyawan),
        datasets: [
            {
                label: 'Skor Performa',
                data: ChartData.map((item) => item.skor),
                backgroundColor: [ 'rgba(255, 99, 132, 0.7)',
                    'rgba(255, 159, 64, 0.7)',
                    'rgba(255, 205, 86, 0.7)',
                    'rgba(75, 192, 192, 0.7)',
                    'rgba(54, 162, 235, 0.7)',
                    'rgba(153, 102, 255, 0.7)',
                    'rgba(201, 203, 207, 0.7)'],
            },
        ],
        
    };


return (
    <>
    <div className="flex text-xs gap-1 w-full  justify-end items-center pt-3 p-1 text-gray-500">
        Urutkan :
        <button onClick={()=>tertinggi()} className="text-gray-500 bg-slate-200 btn-outline p-1 px-2 rounded-md">Tertinggi</button>
        <button onClick={()=>terendah()} className="text-gray-500 bg-slate-200 btn-outline p-1 px-2 rounded-md">Terendah</button>
        <button onClick={()=>abjad()} className="text-gray-500 bg-slate-200 btn-outline p-1 px-2 rounded-md">Abjad</button>
    </div>
    <div className="h-full">
    <Bar data={data} options={options}></Bar>
    </div>
    </>
)

}