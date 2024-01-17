import type { NextPage } from "next";
import Head from "next/head";
import Script from "next/script";
import { ChangeEvent, useState, useEffect } from "react";
import Fuse from "fuse.js";
import { useRecoilValue } from "recoil";
import { modalState } from "../atoms/modalAtom";

import Table from "../components/Table";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MetaTags from "../components/MetaTags";

import data from "../data.json";
import PRModal from "../components/PRModal";
import TopCard from "../components/TopCard";
import { TableDataType } from "../types";
import { generateConfetti } from "../utils/generateConfetti";
import bg from '../assets/13.png';

const Home: NextPage = () => {
  const isModalOpen = useRecoilValue(modalState);

  const [tableData, setTableData] = useState(
    data.data.slice(3, data.data.length)
  );
  const [searchText, setSearchText] = useState("");
  const [searchedData, setSearchedData] = useState<TableDataType[]>();

  const handleSearch = (
    e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setSearchText(e.target.value);
    const fuse = new Fuse(tableData as TableDataType[], {
      keys: ["user_name", "full_name", "college"],
      threshold: 0.2,
    });
    const result = fuse.search(e.target.value).map((item) => item.item);
    setSearchedData(result);
  };

  useEffect(() => {
    generateConfetti();
  }, []);

  return (
    <>
      <Head>
        <title>Leaderboard | JWoC 2K24</title>
        <link
          rel="shortcut icon"
          type="image/png"
          // href="https://jwoc.tech/assets/img/favicon.png"
          href="https://www.jwoc.tech/_next/static/media/jwoc-2024.652c49b8.svg"
        />
        <MetaTags />
      </Head>

      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-ESEG18CYHY"
        strategy="afterInteractive"
      />

      <Script id="google-analytics" strategy="afterInteractive">
        {`
           window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-ESEG18CYHY', { page_path: window.location.pathname });
        `}
      </Script>

      <Header />

      <section className="relative mx-auto mt-32 mb-12">
        <div className="px-5 lg:px-0">
          <div className="relative my-10 mx-auto flex justify-center items-center flex-col text-center lg:mx-8 sm:mx-2">
            <h2 className="my-1.5 pt-0 px-2 pb-2 font-['Blanka'] text-[2rem] font-bold text-white tracking-[4px] rounded-lg shadow-[0_0_4px_rgba(50,69,107,0.2)] md:text-[1rem]">
              JWoC 2K24 Leaderboard
            </h2>
            <p className="my-4 font-codefont text-2xl font-medium text-white tracking-wide">
              Check your rank here!
            </p>
            <p className="my-2 font-codefont text-lg font-medium text-white tracking-wide">
              Last updated on:
              <span className="mx-0.5 font-curlfont font-bold text-yellow-300 italic">
                {new Date(data.lastUpdated).toLocaleString("en-US", {
                  dateStyle: "full",
                  timeStyle: "full",
                })}
              </span>
            </p>
          </div>

          <div className="relative my-10 px-20 flex justify-center items-center gap-8 lg:px-8 sm:px-2 md:flex-col">
            <TopCard userData={data.data[0]} />
            <TopCard userData={data.data[1]} />
            <TopCard userData={data.data[2]} />
          </div>

          <div className="my-12 mx-12 lg:mx-8 sm:mx-2">
            <input
              type="search"
              className="h-14 w-full px-3 py-3 font-codefont text-lg text-white bg-[rgba(95,94,94,0.4)] font-medium shadow focus:outline-none border-[3px] border-gray-200 tracking-wider rounded-lg"
              placeholder="Search for your Name, GitHub username or college"
              value={searchText}
              onChange={handleSearch}
            />
          </div>

          <Table
            data={searchText ? (searchedData as TableDataType[]) : tableData}
          />
        </div>
      </section>
      <div
            className="bg-wrap"
            style={{
              position: "fixed",
              left: "0",
              top: "0",
              right: "0",
              bottom: "0",
              backgroundImage: `url(${bg.src})`,
              backgroundPosition: "50% 0",
              backgroundSize: "cover",
              zIndex: "-10900",
            }}
          ></div>

      {isModalOpen && <PRModal />}

      <Footer />
    </>
  );
};

export default Home;
