export default function Card() {


return (
    <>
    <div className="w-1/3  items-center  h-fit rounded-xl border-l-12 border-purple-500 shadow-md">
        <div className="border border-slate-200 rounded-r-xl p-1 ">
        <p className="text-purple-500 text-xl font-bold text-end px-2 pb-1">Produksi</p>
        <div className="flex flex-row justify-center items-center">
        <p className="text-5xl text-center font-extrabold text-gray-800 pb-2">99%</p>
        <p className="text-xs pb-1 text-center font-semibold ">139 dari 140</p>
        </div>
        <p className="text-xs pb-1 text-center font-semibold"><span className="font-extrabold text-red-600">-2%</span> dari periode sebelumnya</p>
        </div>
    </div>

    <div className="w-1/3  items-center  h-fit rounded-xl border-l-12 border-green-500 shadow-md">
        <div className="border border-slate-200 rounded-r-xl  p-1 ">
        <p className="text-green-500 text-xl font-bold text-end px-2 pb-1">Produk Reject</p>
       <div className="flex flex-row justify-center items-center">
        <p className="text-5xl text-center font-extrabold text-gray-800 pb-2">10%</p>
        <p className="text-xs pb-1 text-center font-semibold ">14 dari 140</p>
        </div>
        <p className="text-xs pb-1 text-center font-semibold"><span className="font-extrabold text-green-600">+4%</span> dari periode sebelumnya</p>
        </div>
    </div>

    <div className="w-1/3  items-center  h-fit rounded-xl border-l-12 border-teal-500 shadow-md">
        <div className="border border-slate-200 rounded-r-xl p-1 ">
        <p className="text-teal-500 text-xl font-bold text-end px-2 pb-1">kehadiran</p>
        <div className="flex flex-row justify-center items-center">
        <p className="text-5xl text-center font-extrabold text-gray-800 pb-2">99%</p>
        <p className="text-xs pb-1 text-center font-semibold ">29 dari 30</p>
        </div>
        <p className="text-xs pb-1 text-center font-semibold"></p>
        <p className="text-xs pb-1 text-center font-semibold"><span className="font-extrabold text-green-600">+1%</span> dari periode sebelumnya</p>
        </div>
    </div>
    </>
)
}