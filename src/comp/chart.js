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
  import { Bar, Line } from "react-chartjs-2";

  Chart.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend, PointElement, LineElement
  );

export default function Diagram() {

    const ChartData = [
        {
            Tanggal: '1 Agustus',
            produksi: 150
        },
        {
            Tanggal: '2 Agustus',
            produksi: 180
        },
        {
            Tanggal: '3 Agustus',
            produksi: 170
        },
        {
            Tanggal: '4 Agustus',
            produksi: 150
        },
        {
            Tanggal: '5 Agustus',
            produksi: 140
        },
        {
            Tanggal: '6 Agustus',
            produksi: 170
        }
    ]

    const rejectData = [
        {
            Tanggal: '1 Agustus',
            produksi: 10
        },
        {
            Tanggal: '2 Agustus',
            produksi: 20
        },
        {
            Tanggal: '3 Agustus',
            produksi: 11
        },
        {
            Tanggal: '4 Agustus',
            produksi: 10
        },
        {
            Tanggal: '5 Agustus',
            produksi: 5
        },
        {
            Tanggal: '6 Agustus',
            produksi: 12
        }
    ]

    const percentase = ChartData.map((item, i) =>
        item.produksi + rejectData[i].produksi
    )

    const options = {
        maintainAspectRatio: false,
        plugins: {
            datalabels: {
              display: false,
            },
          }
    }

    const data = {
        labels: ChartData.map((item) => item.Tanggal),
        datasets: [
            {
                label: 'Produksi Bagus',
                data: ChartData.map((item) => item.produksi),
                backgroundColor: ['green'],
                borderWidth: 2,
                borderColor: 'green',
                drawActiveElementsOnTop: false,
                fill: false,
            },
            {
                label: 'Total Produksi',
                data: percentase.map((item) => item),
                backgroundColor: ['red'],
                borderWidth: 2,
                borderColor: 'red',
                fill: false,
                drawActiveElementsOnTop: false,
               
            },
        ],
    };


return (
    <Line data={data} options={options}></Line>
)

}