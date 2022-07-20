import React, {useState} from "react"
import { solutionList } from '../homepage'
import ViewSolutionContainer from "../View-Solutions-Container/View-Solutions-Container";

function SelectIndustry() {
    const [industry, setIndustry] = useState(1);
    if (!solutionList.length) return null


    return (
        <div className="container mx-auto mb-5 px-5">
            <div className="flex flex-row gap-5 items-center">
                <div className="flex flex-col gap-5 place-content-center">
                    {solutionList.map((solution) => (
                    <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                    onClick={() => setIndustry(solution.id)}>
                        {solution.name}
                    </button>
                    ))}
                </div>
                <div>
                    <ViewSolutionContainer 
                    solution={solutionList[industry]} 
                    />
                </div>
            </div>
        </div>
    )
}

export default SelectIndustry

{/* <button onClick={() => setIndustry(1)}>

</button>
<button onClick={() => setIndustry(2)}>

</button> */}