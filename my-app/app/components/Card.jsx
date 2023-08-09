import Image from "next/image";
import React from "react";

const Card = ({ job, selectedFn }) => {
  return (
    <div
      className={`h-[100%] rounded-[12px] p-6 bg-[#fff] shadow-xl w-full relative mb-[50px] border border-neutral-light-small ${
        job.featured &&
        "border-l-4 border-l-primary desktop:flex desktop:gap-3 desktop:items-center "
      }`}
    >
      <Image
        alt="logo"
        width={50}
        height={50}
        className="rounded-full mt-[-50px] desktop:mt-0"
        src={job?.logo}
      />
      <div className="desktop:flex items-center justify-between  desktop:w-full">
        <div className="desktop:flex-col desktop:w-1/2">
          <div className="flex gap-5 mt-5">
            <h5 className="text-primary font-bold">{job.company}</h5>{" "}
            <div className="flex gap-2 text-sm">
              {job.new && (
                <div className="h-[24px] text-neutral-light bg-primary p-1 rounded-full px-2">
                  <span>New!</span>
                </div>
              )}
              {job.featured && (
                <div className="h-[24px] text-neutral-light bg-neutral-light-extra-dark p-1 rounded-full px-2">
                  <span>Featured!</span>
                </div>
              )}
            </div>
          </div>

          <div className="my-2">
            <h5>{job.position}</h5>

            <span className="flex text-sm text-neutral-light-dark gap-2 items-center">
              <span>{job.postedAt}</span>
              <div className="h-[8px] w-[8px] bg-neutral-light-dark rounded-full"></div>
              <span>{job.contract}</span>
              <div className="h-[8px] w-[8px] bg-neutral-light-dark rounded-full"></div>
              <span>{job.location}</span>
            </span>
          </div>
        </div>
        <div className="border-t-2 flex gap-3 desktop:border-t-0 flex-wrap border-t-[#ccc] w-full my-2 pt-2 desktop:w-1/2">
          <div
            onClick={() => selectedFn(job?.role)}
            className=" bg-neutral-light text-primary py-1 px-2 rounded-md cursor-pointer"
          >
            <span>{job.role}</span>
          </div>
          <div
            onClick={() => selectedFn(job?.level)}
            className=" bg-neutral-light text-primary py-1 px-2 rounded-md cursor-pointer"
          >
            <span>{job?.level}</span>
          </div>
          {job.languages.map((ln) => (
            <div
              onClick={() => selectedFn(ln)}
              key={ln}
              className=" bg-neutral-light text-primary py-1 px-2 rounded-md cursor-pointer"
            >
              <span>{ln}</span>
            </div>
          ))}
          {job.tools.map((ln) => (
            <div
              onClick={() => selectedFn(ln)}
              key={ln}
              className=" bg-neutral-light text-primary py-1 px-2 rounded-md cursor-pointer"
            >
              <span>{ln}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
