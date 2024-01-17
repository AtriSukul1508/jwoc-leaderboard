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
    
    <div className="relative m-auto w-full flex justify-center align-center flex-col bg-[rgba(49,49,49,0.5)] backdrop-blur-lg shadow-[0_0_4px_rgba(50,69,107,0.2)] rounded-[2rem] h-[21rem] z-[1] overflow-hidden">
      <div className="m-auto w-full flex justify-center align-center flex-col  rounded-[6px] mb-2 mt-2">
        {/* <h2 className="mt-2.5 mb-0 mx-auto text-4xl font-medium font-codefont text-darkwhite text-center tracking-[0.8px]">
          {userData?.total_points}
        </h2>
        <p className="-mt-[2px] mb-2.5 mx-auto text-lg font-medium font-mainfont text-darkwhite text-center tracking-[0.8px]">
          Points
        </p> */}
        <span className="mb-2.5 px-5 py-1 text-xl font-medium font-codefont text-red-300 text-center tracking-[0.2px] rounded-[4px]">
          <span className="font-bold float-right text-4xl">#{userData?.rank}</span>
        </span>
      </div>

      <div className="flex flex-col items-center">
        <div className="w-24 h-24 relative rounded-full overflow-hidden shadow lg:w-20 lg:h-20">
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
        {/* <a
          href={userData?.user_url}
          target="_blank"
          rel="noreferrer"
          className="m-auto px-5 py-1 text-lg font-medium font-mainfont text-darkblack bg-primaryoff text-center italic tracking-[0.2px] rounded-[8px]"
        >
          {userData?.user_name}
        </a> */}
        <p className="mx-auto text-lg font-medium font-codefont text-gray-600 text-center tracking-[0.2px] lg:text-base mb-[56px]">
          {userData?.college}
        </p>
        {/* <button
          onClick={() => {
            setModal(true);
            setUserData(userData);
          }}
          className="m-auto mb-1.5 px-3 py-1 text-lg font-bold font-curlfont text-sky-600 bg-sky-100 hover:bg-sky-200 text-center rounded-full transition"
        >
          View All PRs
        </button> */}
        <div className="flex w-full justify-around items-center border-solid border-t bg-white absolute bottom-0">
            <a href={userData?.user_url} target="_blank" rel="noreferrer" className="w-1/3 text-xl text-gray-600 hover:text-blue-700 flex justify-center transition-colors duration-300">
              <FaGithub className="w-8 h-8"/>
            </a>
            {/* <a href="#" className="text-xl text-gray-600 text-center py-3 flex-grow hover:text-indigo-600 transition-colors duration-300"> */}
              {/* <span className="text-yellow-300 px-5 flex justify-center"> Rank: #{userData?.rank}</span> */}
              {/* <span className="mb-2.5 px-3 py-1 text-xl font-['Blanka']  text-yellow-600 text-center">
          Rank: #{userData?.rank}
        </span> */}
        <span className="w-1/3 flex flex-col items-center justify-center border-x border-black gap-0">
        <h2 className="mb-0 text-2xl font-bold font-codefont tracking-[0.8px]">
          {userData?.total_points}
        </h2>
        <p className="px-auto text-lg font-['Blanka'] text-black tracking-[0.8px]">
          POINTS
        </p>

        </span>
            {/* </a> */}
            {/* <a href="#" className="text-xl text-gray-600 text-center py-3 flex-grow hover:text-pink-500 transition-colors duration-300"> */}
              <span className="w-1/3 cursor-pointer px-5 flex justify-center"
              title="View All PRs"
            onClick={() => {
            setModal(true);
            setUserData(userData);
          }}
          ><RiGitMergeFill className="w-8 h-8"
          color="rgb(115 165 7)" /></span>
            {/* </a> */}
          </div>
      </div>
    </div>
    // <div className="md:w-1/3 md:px-4 mt-10 md:mt-0">
    //     <div className="bg-white border border-solid max-w-sm mx-auto team-profile">
    //       <div className="px-5 py-12 text-center">
    //         <div className="w-24 h-24 rounded-full mx-auto overflow-hidden">
    //           <img src="//via.placeholder.com/100/eee"  alt="profile image" className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"/>
    //           {/* <Image
    //         src={userData?.avatar_url}
    //         alt={userData?.user_name}
    //         layout="fill"
    //         objectFit="cover"
    //         height={100}
    //         width={100}
    //         quality={100}
    //         className="user_image"
    //       /> */}
    //         </div>
    //         <h5 className="mt-4 mb-1 text-xl font-medium">Jacqueline Perry</h5>
    //         <span className="text-sm text-gray-500 font-medium uppercase">UI Designer</span>
    //       </div>
    //       <div className="flex border-t border-solid divide-x">
    //         <a href="#" className="text-xl text-gray-600 text-center py-3 flex-grow hover:text-blue-700 transition-colors duration-300">
    //           <span className="fab fa-linkedin-in"></span>
    //         </a>
    //         <a href="#" className="text-xl text-gray-600 text-center py-3 flex-grow hover:text-indigo-600 transition-colors duration-300">
    //           <span className="fab fa-behance"></span>
    //         </a>
    //         <a href="#" className="text-xl text-gray-600 text-center py-3 flex-grow hover:text-pink-500 transition-colors duration-300">
    //           <span className="fab fa-dribbble"></span>
    //         </a>
    //       </div>
    //     </div>
    //   </div>
  );
};

export default TopCard;
