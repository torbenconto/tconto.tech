import React, { useState, useEffect } from 'react';
import Navbar from "./components/Navbar";
import LoadingScreen from './components/Loading';
import Home from "./components/Home";

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
                {activeLink === 0 && <Home />}

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
