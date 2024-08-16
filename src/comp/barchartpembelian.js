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

export default function Diagramprod(props) {

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

    const options = {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        },
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
                label: props.label,
                data: props.data,
                backgroundColor: props.color,
                borderWidth: 2,
                borderColor: props.color,
                drawActiveElementsOnTop: false,
                fill: false,
            },
           
        ],
    };


return (
    <Line  data={data} options={options}></Line>
)

}