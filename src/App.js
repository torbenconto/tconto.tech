import Navbar from "./components/Navbar";
import HomeText from "./components/HomeText";

function App() {
  return (
      <>
          <div className="p-12 h-screen">
              <Navbar />
              <div className="mt-auto w-1/3 h-full flex items-end">
                  <HomeText />
              </div>
          </div>
      </>
  );
}

export default App;
