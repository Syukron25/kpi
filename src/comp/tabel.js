import { useState } from "react"

export default function Tabel({sendata}) {

  function onchecked (i){
    sendata(i)
  }

    return(
        <div className="overflow-x-auto md:p-2 p-0 border border-gray-100">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th></th>
                  <th>Nama</th>
                  <th>Alamat</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                <tr>
                  <th>
                    <label>
                      <input value={1} onChange={(e)=>onchecked(e.currentTarget.value)} name="checkbox" defaultChecked type="radio" className="checkbox" />
                    </label>
                  </th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                            alt="Avatar Tailwind CSS Component" />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">Andi Fadly</div>
                        <div className="text-sm opacity-50">25-08-1992</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    Binong Permai Blok A
                    <br />
                    <span className="badge badge-ghost badge-sm">Tim Produksi 1</span>
                  </td>
                
                </tr>
                {/* row 2 */}
                <tr>
                  <th>
                    <label>
                      <input value={2} onChange={(e)=>onchecked(e.currentTarget.value)} name="checkbox" type="radio" className="checkbox" />
                    </label>
                  </th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src="https://img.daisyui.com/images/profile/demo/3@94.webp"
                            alt="Avatar Tailwind CSS Component" />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">Cahaya melati</div>
                        <div className="text-sm opacity-50">10-11-1998</div>
                      </div>
                    </div>
                  </td>
                  <td>
                   Curug sangereng, Rt 03/06 No.5
                    <br />
                    <span className="badge badge-ghost badge-sm">Tim Produksi 1</span>
                  </td>
                  
                </tr>
                {/* row 3 */}
                <tr>
                  <th>
                    <label>
                      <input value={3} onChange={(e)=>onchecked(e.currentTarget.value)} name="checkbox" type="radio" className="checkbox" />
                    </label>
                  </th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src="https://img.daisyui.com/images/profile/demo/4@94.webp"
                            alt="Avatar Tailwind CSS Component" />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">Evi Nirmala</div>
                        <div className="text-sm opacity-50">05-02-2000</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    Dukuh Pinang, Rt 02/07
                    <br />
                    <span className="badge badge-ghost badge-sm">Tim Produksi 2</span>
                  </td>
                 
                </tr>
                {/* row 4 */}
                <tr>
                  <th>
                    <label>
                      <input value={4} onChange={(e)=>onchecked(e.currentTarget.value)} name="checkbox" type="radio" className="checkbox" />
                    </label>
                  </th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src="https://img.daisyui.com/images/profile/demo/5@94.webp"
                            alt="Avatar Tailwind CSS Component" />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">Deni Malik</div>
                        <div className="text-sm opacity-50">12-12-1992</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    Binong permai Blok F
                    <br />
                    <span className="badge badge-ghost badge-sm">Tim Produksi 2</span>
                  </td>
                 
                </tr>
              </tbody>
            </table>
          </div>
    )
}
