import Navbar from "./components/Navbar";
import HomeText from "./components/HomeText";
import TopGradient from "./components/TopGradient";

function App() {
    return (
        <>
            <div className="flex flex-col h-screen p-4 md:px-12">
                <TopGradient/>
                <Navbar />
                <div className="flex-1 flex flex-col justify-end md:w-1/3">
                    <HomeText />
                </div>
            </div>
        </>
    );
}

export default App;
