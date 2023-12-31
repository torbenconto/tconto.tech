import React, { useState, useEffect } from 'react';
import Navbar from "./components/Navbar";
import HomeText from "./components/HomeText";
import TopGradient from "./components/TopGradient";
import SideGradient from "./components/SideGradient";
import MiddleGradient from "./components/MiddleGradient";
import LoadingScreen from './components/Loading'; // Import the LoadingScreen component

function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Sneaky "faux" loading screen, actually does help to reduce glitches
        const timeout = setTimeout(() => {
            setLoading(false);
        }, 1000);

        return () => clearTimeout(timeout);
    }, []);

    return (
        <>
            {loading ? ( // Render LoadingScreen if loading is true
                <LoadingScreen />
            ) : ( // Render the actual content if loading is false
                <div className="flex flex-col h-screen p-4 md:px-12">
                    <TopGradient/>
                    <Navbar />
                    <div className="flex-1 flex flex-col mb-12 justify-end md:w-1/3">
                        <SideGradient/>
                        <MiddleGradient/>
                        <HomeText />
                    </div>
                </div>
            )}
        </>
    );
}

export default App;
