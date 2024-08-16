import Searchtime from "@/comp/search"
import Sidebar from "@/comp/sidebar"


export default function target() {

    return (
        <div className="flex flex-col bg-slate-100 w-screen md:h-screen h-full">
      <Sidebar target="bg-slate-100" />
      <div className="md:flow-root flex flex-col-reverse md:mt-4 mt-12 md:m-4 m-2 md:ml-20 gap-2">
        <Searchtime />
      </div>
            <div className="flex flex-col h-4/5 m-1 md:ml-20 md:w-11/12 rounded-3xl shadow-md md:p-12 bg-white ">
                <div className="stats md:stats-vertical stats-horizontal  md:w-1/2  lg:stats-horizontal shadow">
                    <div className="stat">
                        <div className="stat-title">Produksi</div>
                        <div className="stat-value">35</div>
                        <div className="stat-desc">Target Harian</div>
                    </div>

                    <div className="stat">
                        <div className="stat-title">Reject</div>
                        <div className="stat-value">1</div>
                        <div className="stat-desc">Target Harian</div>
                    </div>

                    <div className="stat">
                        <div className="stat-title">Kehadiran</div>
                        <div className="stat-value">24</div>
                        <div className="stat-desc">Hadir Perbulan</div>
                    </div>
                </div>

                <div className="flex flex-col gap-3 md:w-1/2 p-3">
                    <label className="input input-bordered flex items-center gap-2">
                        Target Produksi
                        <input type="text" className="grow" placeholder="input disini"/>
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                        Target Reject
                        <input type="text" className="grow" placeholder="input disini" />
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                        Target Kehadiran
                        <input type="text" className="grow"  placeholder="input disini" />
                    </label>
                    <button className="btn btn-outline btn-accent w-1/2 self-center">Update Target</button>

                </div>
            </div>
        </div>
    )
}