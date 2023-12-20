import React from 'react';
import Image from '../Images/index';

export default function SpecialEX() {
  return (
    <div className="h-[620px]  max-w-7xl mx-auto">
      <div className="">
        <h1 className="text-[35px] font-bold">APP FEATURES </h1>
      </div>
      <div className="grid grid-cols-2 ">
        <div className="text-[22px] font-medium text-gray-600">
          <p className="">
            Indonesia chicken farming industry is rapidly expanding,
            <span className="">with 3 billion broilers produced in 2022</span>,
            making it a crucial sector in the country s livestock business.
            There are hundreds of thousands of chicken farmers in Indonesia, and
            ensuring the health and quality of their poultry is a top priority.
          </p>
          <br />
          <p>
            Indonesian chicken farmers lack effective methods for early disease
            detection. This leads to:
          </p>
          <ol className="list-disc pl-12">
            <li>
              <span className="">Financial losses:</span> Delayed diagnosis
              results in higher mortality rates and treatment costs, impacting
              livelihoods.
            </li>
            <li>
              <span className="">Food safety concerns:</span> Diseased chickens
              entering the food chain pose health risks to consumers.
            </li>
            <li>
              <span className="">Industry instability:</span> Frequent outbreaks
              disrupt production and supply chains.
            </li>
          </ol>
        </div>
        <div class="">
          <Image
            className="relative w-full lg:w-auto h-[460px] ]"
            alt="broiler1.png"
            src="/images/SpecialEX/broiler1.jpg"
          />
        </div>
      </div>
    </div>
  );
}
