import Image from "next/image";

import { HomeIcon,BellIcon,XCircleIcon } from "@heroicons/react/solid";
import Logo from "../assets/jwoc-2024.svg";
import { useState } from "react";

const Header = () => {
  const [notificationModal,setNotificationModal] = useState(false)
  return (
    <header className="fixed top-0 z-10 w-full px-20 py-1 bg-[rgba(49,49,49,0.1)] backdrop-blur shadow-[0_2px_4px_rgba(0,0,0,0.1)] md:px-4 transition">
      <nav className="flex justify-between items-center">
        <a
          href="https://jwoc.tech"
          className="flex justify-center items-center"
        >
          <Image src={Logo} alt="Logo" height="60px" width="60px" />
          <span className="mx-2  text-[30px] font-bold text-white tracking-wide sm:hidden">
             JWoC
          </span>
        </a>
        <div className="flex items-center gap-5">
          <div className="relative flex flex-col gap-3">
            <div>
            <div className="relative cursor-pointer" onClick={() => {setNotificationModal(true)}}>
              {!notificationModal && <span className="absolute right-1 "><span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-warningoff"></span>
                </span></span>}
                <BellIcon className="mx-0.5 h-7 w-7 text-darkwhite"/>
              </div>

            </div>
            {notificationModal && <div className="absolute w-[400px] flex flex-col justify-end items-end gap-1 right-3 sm:w-[250px] top-9 p-4 pt-[6px] pr-1 bg-[#ffffffea] backdrop-blur-[40px] rounded-lg">
              <XCircleIcon className="h-6 w-6 text-red-600 cursor-pointer float-right font-extrabold" onClick={()=>{setNotificationModal(false)}}/>
            <p className=" text-black font-extralight text-justify mr-2">If the leaderboard shows, <span className="text-warningoff font-bold">&quot;Name Not Found/College Not Found&quot;</span> error against your GitHub username. Please fill up this <a href="https://forms.gle/sBVFbeEYQeCNRyrG6" rel="noreferrer" className="underline text-blue-600 font-bold" target="_blank">form</a> to update the discrepancy in user data. Invalid name fields will affect the participation certification distribution.</p>
            </div>}
          </div>
        
        <a
          href="https://jwoc.tech"
          className="px-4 py-2 flex justify-center items-center bg-[#103662] hover:bg-primarydark transition rounded-lg text-center cursor-pointer md:px-2 md:py-1.5"
        >
          <HomeIcon className="mx-0.5 h-5 w-5 text-darkwhite" />
          <span className="mx-0.5 font-codefont text-[1.2rem] font-medium text-darkwhite tracking-wide md:text-[1rem]">
            Home
          </span>
        </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
