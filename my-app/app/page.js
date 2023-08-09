"use client";
import { useState } from "react";
import Card from "./components/Card";
import { jobData } from "./data.js";

export default function Home() {
  const [data, setData] = useState([...jobData]);
  const [filters, setFilters] = useState([]);
  const filterFn = (itm) => {
    if (!filters.includes(itm)) {
      setFilters([...filters, itm]);
      let arr = [];
      data.forEach((dt) => {
        if (dt.role === itm) {
          arr.push(dt);
        } else if (dt.level === itm) {
          arr.push(dt);
        }
        dt.languages.forEach((ln) => ln === itm && arr.push(dt));
        dt.tools.forEach((ln) => ln === itm && arr.push(dt));
      });

      setData(arr);
    }
  };
  const deleteFn = (itm) => {
    setFilters(filters.filter((item) => item !== itm && item));
    setData(jobData);
  };
  return (
    <main className="min-h-screen bg-neutral-light-small">
      <nav className="bg-[url('../app/images/bg-header-mobile.svg')] desktop:bg-[url('../app/images/bg-header-desktop.svg')] bg-primary h-[100px] desktop:h-[60px] bg-cover w-full text-white flex items-center px-6">
        <h3 className="font-[900] text-[28px] text-neutral-light-small">
          Code-Athon-01
        </h3>
      </nav>
      {filters.length > 0 && (
        <div className="bg-[#fff] gap-4 w-[90%] mx-auto max-w-[1080px] relative mt-[-30px] flex items-start justify-start p-[10px] rounded-md flex-wrap desktop:mt-[-15px]">
          {filters.map((fil) => (
            <span
              key={fil}
              className=" bg-neutral-light text-primary py-1 px-2 rounded-md cursor-pointer pr-[10px] flex gap-4"
            >
              <span>{fil}</span>
              <span onClick={() => deleteFn(fil)}>X</span>
            </span>
          ))}
        </div>
      )}
      <section className="h-full w-[90%] mx-auto max-w-[1080px] pt-[80px]">
        {data.map((job) => (
          <Card key={job?.id} job={job} selectedFn={filterFn} />
        ))}
      </section>
    </main>
  );
}
