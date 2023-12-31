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
        // Simulate data loading
        const timeout = setTimeout(() => {
            setLoading(false);
        }, 1000);

        return () => clearTimeout(timeout);
    }, []);

    return (
        <div className="flex flex-col h-screen p-4 md:px-12">
            <TopGradient/>
            <Navbar />
            <div className={`flex-1 flex flex-col mb-12 justify-end md:w-1/3 ${loading ? 'hidden' : 'block'}`}>
                <SideGradient/>
                <MiddleGradient/>
                <HomeText />
            </div>
            {loading && <LoadingScreen />}
        </div>
    );
}

export default App;
