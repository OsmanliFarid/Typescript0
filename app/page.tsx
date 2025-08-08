"use client";
import React, { useState } from "react";

const Home = () => {
  const [checked, setchecked] = useState(false);
  const ClickChacked = (event: any) => {
    const value = event.target.value;
    setchecked(value);
    console.log(checked);
  };
  return (
    <>
      <div className="bg-gray-300 w-180 h-90">
        <form method="post">
          <div className="flex justify-center items-center mt-5 gap-x-5">
            <div className="flex justify-center">
              <input
                type="text"
                placeholder="todo yazin"
                className="bg-white w-90  h-[40px] px-3 text-black outline-none border-2 border-orange-400 rounded-2xl"
              />
            </div>
            <input
              type="submit"
              value={"Create"}
              className="cursor-pointer bg-orange-400 rounded-lg p-[10px_30px] text-white"
            />
          </div>
        </form>
        <div className="">
          <h1>title</h1>
          <input type="checkbox" checked={checked} onChange={ClickChacked} />
        </div>
      </div>
    </>
  );
};

export default Home;
