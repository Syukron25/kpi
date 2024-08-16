import Link from "next/link"

export default function Sidebar(props) {

    const home = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 9v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9" /><path d="M9 22V12h6v10M2 10.6L12 2l10 8.6" /></svg>
    const user = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
    const input = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3h6v18h-6M10 17l5-5-5-5M13.8 12H3" /></svg>
    const target = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18" /><path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3" /></svg>
  
    return(
        <div className="flex fixed bg-white md:h-screen w-screen z-30 md:w-fit ">
          <ul className="flex md:flex-col flex-row justify-center md:justify-normal gap-3 w-full md:mt-10">
            <Link href={"/"}><li className={`${props.home} px-3 ml-2 py-2 rounded-t-3xl md:rounded-l-3xl hover:bg-slate-200`}>{home}</li></Link>
            <Link href={"/user"}><li className={`${props.user} px-3 ml-2 py-2 rounded-t-3xl md:rounded-l-3xl hover:bg-slate-200`}>{user}</li></Link>
            <Link href={"/input"}><li className={`${props.input} px-3 ml-2 py-2 rounded-t-3xl md:rounded-l-3xl hover:bg-slate-200`}>{input}</li></Link>
            <Link href={"/target"}><li className={`${props.target} px-3 ml-2 py-2 rounded-t-3xl md:rounded-l-3xl hover:bg-slate-200`}>{target}</li></Link>
          </ul>
        </div>
    )
}