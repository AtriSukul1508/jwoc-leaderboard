import Image from "next/image";
import { useRecoilState } from "recoil";
import { modalState } from "../atoms/modalAtom";
import { selectedUserState } from "../atoms/selectedUserAtom";
import { TableDataType } from "../types";
import { parseName } from "../utils/parseName";
// import { FaGithub } from "react-icons/fa6";
import { GitPullRequestClosed, Github } from 'lucide-react';
import {FaGithub} from "react-icons/fa";
import { RiGitMergeFill } from "react-icons/ri";
import { EditIcon, GitCompareArrows, GitMerge, PlusCircle, SaveIcon } from "lucide-react";



const TopCard = ({ userData }: { userData: TableDataType }) => {
  const [i, setModal] = useRecoilState(modalState);
  const [j, setUserData] = useRecoilState(selectedUserState);

  return (
    
    <div className="relative m-auto w-full flex justify-center align-center flex-col bg-[rgba(49,49,49,0.5)] backdrop-blur-lg shadow-[0_0_2px_rgba(250,219,207,0.7)] rounded-[2rem] h-[21rem]  z-[1] overflow-hidden">
      <div className="m-auto w-full flex justify-center align-center flex-col  rounded-[6px] mb-2 mt-2">

        <span className="mb-[-20px] px-5 py-1 text-xl font-medium font-codefont text-red-300 text-center tracking-[0.2px] rounded-[4px]">
          <span className="font-bold float-right text-4xl">#{userData?.rank}</span>
        </span>
      </div>

      <div className="flex flex-col items-center">
        <div className="w-36 h-36 relative rounded-full overflow-hidden shadow lg:w-20 lg:h-20 sm:w-[140px] sm:h-[140px]">
          <Image
            src={userData?.avatar_url}
            alt={userData?.user_name}
            layout="fill"
            objectFit="cover"
            quality={100}
            className="w-full h-full user_image"
          />
        </div>
        <h1 className="my-2 mx-auto text-2xl font-medium font-codefont text-white text-center tracking-[0.2px]">
          {parseName(userData?.full_name)}
        </h1>

        <p className="mx-auto text-lg font-medium font-codefont text-gray-600 text-center tracking-[0.2px] lg:text-base mb-[4.5rem] sm:mb-[56px]">
          {userData?.college.length<=35? userData?.college : userData.college.slice(0,35)+"..."}
        </p>

        <div className="flex w-full justify-around items-center border-white border-t absolute bottom-0">
            <a href={userData?.user_url} target="_blank" rel="noreferrer" className="w-1/3 text-xl text-gray-600 hover:text-blue-700 flex justify-center transition-colors duration-300">
              <FaGithub className="w-8 h-8"/>
            </a>

        <span className="w-1/3 flex flex-col items-center justify-center border-x border-white gap-0">
        <h2 className="mb-0 text-2xl font-bold text-yellow-300 font-codefont tracking-[0.8px]">
          {userData?.total_points}
        </h2>
        <p className="px-auto text-lg font-['Blanka'] text-white tracking-[0.8px]">
          POINTS
        </p>

        </span>
        
              <span className="w-1/3 cursor-pointer px-5 flex justify-center"
              title="View All PRs"
            onClick={() => {
            setModal(true);
            setUserData(userData);
          }}
          ><RiGitMergeFill className="w-8 h-8 hover:scale-[1.2] hover:text-[rgb(190 251 60)]"
          color="rgb(115 165 7)" /></span>
            {/* </a> */}
          </div>
      </div>
    </div>

  );
};

export default TopCard;
