import React from 'react'
import background from './img/yourwork.jpg'

const YourWork = () => {
    return (
        <div className='container mx-auto'>
            <div className='flex flex-row gap-5 items-center'>
                <div className='basis-1/2 font-extralight'>
                    <h1 className='text-left text-2xl'>
                        We Understand Your Work
                    </h1>
                    <br />
                    <p className='text-left text-lg'>
                        Very rarely do people or companies have the exact same workflow.
                    </p>
                    <br />
                    <p className='text-left text-lg'>
                        We treat every customer as a unique individual with specific requirements. Every interaction starts with our consultant asking key questions in order to better understand your workflow, and what you’ll ultimately require from your workstation.
                    </p>
                    <br />
                    <p className='text-left text-lg'>
                        This includes not only questions about the type of software being used, but also the specific functions and features used most often in that software.
                    </p>
                </div>
                <div className="basis 1/2">
                    <img src={ background } alt="" />
                </div>
            </div>      
        </div>
    )
}

export default YourWork