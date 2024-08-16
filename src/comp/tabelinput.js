import { useState } from "react"

export default function Tabelinput() {

    return(
        <div className="overflow-x-auto md:p-2 p-0 border border-gray-100">
            <table className="table">
              {/* head */}
              <thead>
                <tr><th></th><th></th><th></th><th></th>
                <th colSpan={2}>1/08/2024</th>
                <th colSpan={2}>2/08/2024</th>
                <th colSpan={2}>3/08/2024</th>
                <th colSpan={2}>4/08/2024</th>
                <th colSpan={2}>5/08/2024</th>
                </tr>
                <tr>
                  <th></th>
                  <th>Nama</th>
                  <th>Produksi</th>
                  <th>Reject</th>
                  <th>P</th>
                  <th>R</th>
                  <th>P</th>
                  <th>R</th>
                  <th>P</th>
                  <th>R</th>
                  <th>P</th>
                  <th>R</th>
                  <th>P</th>
                  <th>R</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                <tr>
                 
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
                  <th>
                    <label>
                    <input type="text" className="input input-bordered w-12 " />                    
                    </label>
                  </th>
                  <th>
                    <label>
                    <input type="text" className="input input-bordered w-12 " />                    
                    </label>
                  </th>
                  <td> 35 </td>
                  <td> 3 </td>
                  <td> 30 </td>
                  <td> 4 </td>
                  <td> 32 </td>
                  <td> 5 </td>
                  <td> 33 </td>
                  <td> 6 </td>
                  <td> 30 </td>
                  <td> 3 </td>
                </tr>
                {/* row 2 */}
                <tr>
                  
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
                  <th>
                    <label>
                    <input type="text" className="input input-bordered w-12 " />                    
                    </label>
                  </th>
                  <th>
                    <label>
                    <input type="text" className="input input-bordered w-12 " />                    
                    </label>
                  </th>
                  <td> 32 </td>
                  <td> 5 </td>
                  <td> 32 </td>
                  <td> 3 </td>
                  <td> 35 </td>
                  <td> 3 </td>
                  <td> 30 </td>
                  <td> 5 </td>
                  <td> 32 </td>
                  <td> 5 </td>
                </tr>
                {/* row 3 */}
                <tr>
               
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
                  <th>
                    <label>
                    <input type="text" className="input input-bordered w-12 " />                    
                    </label>
                  </th>
                  <th>
                    <label>
                    <input type="text" className="input input-bordered w-12 " />                    
                    </label>
                  </th>
                  <td> 30 </td>
                  <td> 2 </td>
                  <td> 32 </td>
                  <td> 3 </td>
                  <td> 35 </td>
                  <td> 3 </td>
                  <td> 32 </td>
                  <td> 5 </td>
                  <td> 35 </td>
                  <td> 5 </td>
                </tr>
                {/* row 4 */}
                <tr>
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
                  <th>
                    <label>
                    <input type="text" className="input input-bordered w-12 " />                    
                    </label>
                  </th>
                  <th>
                    <label>
                    <input type="text" className="input input-bordered w-12 " />                    
                    </label>
                  </th>
                  <td> 32 </td>
                  <td> 5 </td>
                  <td> 35 </td>
                  <td> 4 </td>
                  <td> 35 </td>
                  <td> 4 </td>
                  <td> 30 </td>
                  <td> 2 </td>
                  <td> 32 </td>
                  <td> 5 </td>
                </tr>
              </tbody>
            </table>
          </div>
    )
}
