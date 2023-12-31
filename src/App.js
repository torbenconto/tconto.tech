import Navbar from "./components/Navbar";
import HomeText from "./components/HomeText";
import TopGradient from "./components/TopGradient";
import SideGradient from "./components/SideGradient";
import MiddleGradient from "./components/MiddleGradient";

function App() {
    return (
        <>
            <div className="flex flex-col h-screen p-4 md:px-12">
                <TopGradient/>
                <Navbar />
                <div className="flex-1 flex flex-col mb-12 justify-end md:w-1/3">
                    <SideGradient/>
                    <MiddleGradient/>
                    <HomeText />
                </div>
            </div>
        </>
    );
}

export default App;
