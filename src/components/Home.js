import TopGradient from "./TopGradient";
import SideGradient from "./SideGradient";
import MiddleGradient from "./MiddleGradient";
import HomeText from "./HomeText";
import React from "react";

function Home() {
    return (
        <>
            <TopGradient/>
            <div className={`flex-1 flex flex-col mb-12 h-full justify-end md:w-1/3 ${loading ? 'hidden' : 'block'}`}>
                <SideGradient/>
                <MiddleGradient/>
                <HomeText/>
            </div>
        </>
    )
}

export default Home