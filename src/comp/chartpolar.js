import {
    Chart,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend, PointElement, LineElement,
    scales,
    RadialLinearScale, ArcElement
  } from "chart.js";
import { useState } from "react";
  import { Bar, Line, PolarArea } from "react-chartjs-2";
  import ChartDataLabels from 'chartjs-plugin-datalabels';

  Chart.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend, PointElement, LineElement, RadialLinearScale, ArcElement,ChartDataLabels
  );



export default function DiagramPolar() {

    const masterData = [
        {
            karyawan: 'Andi Fadli',
            skor: 30
        },
        {
            karyawan: 'Beni Susanto',
            skor: 25
        },
        {
            karyawan: 'Cahya Melati',
            skor: 27
        },
        {
            karyawan: 'Deni Malik',
            skor: 30
        },
        {
            karyawan: 'Evi Nirmala',
            skor: 29
        },
        {
            karyawan: 'Fajar Hidayanto',
            skor: 24
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
        plugins: {
          legend: {
            display: false,
          },
          datalabels:{
            formatter: function(value, context) {
              return masterData[context.dataIndex].karyawan.split(" ")[0]+" "+masterData[context.dataIndex].karyawan.split(" ")[1].charAt(0)+"."
            },
            anchor:'center',
            clamp:true
            },
            
          }
        }
      

    const data = {
        labels: ChartData.map((item) => item.karyawan),
        datasets: [
            {
                label: 'Produksi',
                data: ChartData.map((item) => item.skor),
                backgroundColor: [ 'rgba(255, 99, 132, 0.8)',
                    'rgba(255, 159, 64, 0.8)',
                    'rgba(255, 205, 86, 0.8)',
                    'rgba(75, 192, 192, 0.8)',
                    'rgba(54, 162, 235, 0.8)',
                    'rgba(153, 102, 255, 0.8)',
                    'rgba(201, 203, 207, 0.8)'],
            },
        ],
        
    };


return (
    <>
   
    <PolarArea data={data}  options={options}></PolarArea>
    </>
)

}