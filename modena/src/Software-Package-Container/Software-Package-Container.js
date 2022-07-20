import React from "react";

const SoftwarePackageContainer = ( { software } ) => (
    <div>
        <div>
            <h1>
            {software.name}
            </h1>
        </div>
        <div>
        <img className="max-h-24" src={software.logo} alt="" />
        </div>
        <div>
            <p>
            {software.cpu}
            </p>
        </div>
        <div>
            <p>
            {software.ram}
            </p>
        </div>
        <div>
            <p>
            {software.gpu}
            </p>
        </div>
    </div>
)


export default SoftwarePackageContainer