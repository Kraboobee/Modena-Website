import React from "react";

const ViewSolutionContainer = ( { solution }) => (
    <div className="flex flex-col gap-5 font-extralight text-center border">
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
    </div>
)

// const ViewSolutions = () => {
//     return (
//         <div className="container mx-auto">
//             <div className="flex flex-row gap-5 items-center text-center ">
//                 <div className="basis-1/3 font-extralight">
//                     <h1 className='text-2xl'>
//                         Content Creation
//                     </h1>
//                     <br />
//                     <p className='text-lg'>
//                         VFX, Rendering, Graphics, Video & Photo
//                     </p>
//                 </div>
//                 <div className="basis-1/3 font-extralight">
//                     <h1 className='text-2xl'>
//                         Content Creation
//                     </h1>
//                     <br />
//                     <p className='text-lg'>
//                         VFX, Rendering, Graphics, Video & Photo
//                     </p>
//                 </div>
//                 <div className="basis-1/3 font-extralight">
//                     <h1 className='text-2xl'>
//                         Content Creation
//                     </h1>
//                     <br />
//                     <p className='text-lg'>
//                         VFX, Rendering, Graphics, Video & Photo
//                     </p>
//                 </div>

//             </div>
//         </div>
//     )
// }

export default ViewSolutionContainer