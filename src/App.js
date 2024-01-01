import React, { useState, useEffect } from 'react';
import Navbar from "./components/Navbar";
import HomeText from "./components/HomeText";
import TopGradient from "./components/TopGradient";
import SideGradient from "./components/SideGradient";
import MiddleGradient from "./components/MiddleGradient";
import LoadingScreen from './components/Loading'; // Import the LoadingScreen component

function App() {
    const [loading, setLoading] = useState(true);
    const [activeLink, setActiveLink] = useState(0);

    function handleActiveLinkChange(active) {
        setLoading(true)
        setActiveLink(active)
        const timeout = setTimeout(() => {
            setLoading(false);
        }, 500);

        return () => clearTimeout(timeout);
    }


    useEffect(() => {
        // Simulate data loading
        const timeout = setTimeout(() => {
            setLoading(false);
        }, 1000);

        return () => clearTimeout(timeout);
    }, []);

    return (
        <>
            <div className="flex flex-col h-screen max-h-screen p-4 md:px-12">
                <Navbar activeLink={activeLink} setActiveLink={handleActiveLinkChange}/>
                {/* Home */}
                {activeLink === 0 && (
                    <>
                        <TopGradient/>
                        <div className={`flex-1 flex flex-col mb-12 h-full justify-end md:w-1/3 ${loading ? 'hidden' : 'block'}`}>
                            <SideGradient/>
                            <MiddleGradient/>
                            <HomeText/>
                        </div>
                    </>
                )}

                {/* About */}
                {activeLink === 1 && (
                    <div>

                    </div>
                )}

                {loading && <LoadingScreen/>}
            </div>
        </>
    );
}

export default App;
