import React, {useState} from "react"
import { contentSoftwareList } from '../homepage'
import SoftwarePackageContainer from "../Software-Package-Container/Software-Package-Container";

function SelectSoftware() {
    const [software, setSoftware] = useState(0);
    if (!contentSoftwareList.length) return null


    return (
        <div className="container mx-auto mb-5 px-5">
            <div className="flex flex-row gap-5 items-center">
                <div className="flex flex-col gap-5 place-content-center">
                    {contentSoftwareList.map((software) => (
                    <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                    onClick={() => setSoftware(software.id)}>
                        {software.name}
                    </button>
                    ))}
                </div>
                <div>
                    <SoftwarePackageContainer 
                    software={contentSoftwareList[software]} 
                    />
                </div>
            </div>
        </div>
    )
}

export default SelectSoftware