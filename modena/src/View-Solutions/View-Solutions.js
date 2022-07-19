import React from "react"
import { solutionList } from '../homepage'
import ViewSolutionContainer from "../View-Solutions-Container/View-Solutions-Container";


const Solutions = () => {
    if (!solutionList.length) return null

    return (
      <div className="container mx-auto mb-5">
            <div className="grid grid-flow-col gap-5 items-stretch">
                {solutionList.map((solution) => (
                <ViewSolutionContainer 
                solution={solution} 
                />
                ))}
            </div>
      </div>
    )
}

export default Solutions