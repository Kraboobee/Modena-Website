import React from "react";

const SoftwarePackageContainer = ( { software } ) => (
    <div className="container mx-auto">
        <div className="flex flex-col gap-5 mx-5">
            <div>
                <h1 className="text-2xl">
                Recommendations for the best computer for {software.name}
                </h1>
            </div>
            <div>
                <img className="w-16" src={software.logo} alt="" />
            </div>
            <div>
                <h1 className="text-xl">
                    Processor
                </h1>
                <p>
                {software.cpu}
                </p>
            </div>
            <div>
                <h1 className="text-xl">
                    Memory
                </h1>
                <p>
                {software.ram}
                </p>
            </div>
            <div>
                <h1 className="text-xl">
                    GPU
                </h1>
                <p>
                {software.gpu}
                </p>
            </div>
            <div>
                <h1 className="text-xl">
                    SSD
                </h1>
                <p>
                {software.ssd}
                </p>
            </div>
        </div>
    </div>
)


export default SoftwarePackageContainer