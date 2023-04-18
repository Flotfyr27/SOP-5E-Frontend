import React, { FC } from "react"

const Overview: FC = () => {

    return <div className="h-28 w-28 bg-slate-400 border-white relative">
        <h1 className="mx-auto text-center">{"STRENGTH"}</h1>
        <div className="container rounded-full bg-red-600 h-3/4 w-3/4 mx-auto" />
        <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl">20</p>
        <div className="absolute bottom-0 left-1/2 bg-slate-600 rounded-full h-9 w-9 transform -translate-x-1/2">
            <div className="bg-green-600 rounded-full h-full relative">
                <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">+4</p>
            </div>
        </div>
    </div>
}

export default Overview;