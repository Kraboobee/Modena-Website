import React from "react";

const CopyrightStrip = () => {
    const currentYear = new Date().getFullYear();
    return (
        <div className="bg-slate-800">
            <div className="container mx-auto py-2 text-center text-white">
                Modena Computers {'\u00A9'} { currentYear } | All Rights Reserved
            </div>
        </div>
    )
}

export default CopyrightStrip