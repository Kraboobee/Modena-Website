import React from "react";

const ViewSolutionContainer = ( { solution }) => (
    <div className="flex flex-col gap-5 font-extralight text-center border-2 rounded-lg">
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
          <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
          View Solutions
          </button>
        </div>
        <div>
          <img src={solution.img} alt="" />
        </div>
    </div>
)

export default ViewSolutionContainer