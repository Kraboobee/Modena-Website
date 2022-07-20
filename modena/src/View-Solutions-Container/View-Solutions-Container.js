import React from "react";

const ViewSolutionContainer = ( { solution }) => (
    <div className="flex flex-col gap-5 font-extralight text-center items-center">
        <div>
          <h1 className='text-2xl'>
            {solution.name}
          </h1>
        </div>
        <div>
          <p className='text-lg'>
            {solution.desc}
          </p>
        </div>
        <div>
          <img className="max-h-96" src={solution.img} alt="" />
        </div>
        <div>
          <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mb-5">
          View Solutions
          </button>
        </div>
    </div>
)

export default ViewSolutionContainer