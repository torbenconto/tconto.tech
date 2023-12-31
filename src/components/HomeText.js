import "../styles/HomeText.css"
import "../styles/fonts.css"
import "../styles/colors.css"

function HomeText() {
    return (
        <div className="flex flex-col md:p-2 space-y-6">
            <h1 className="abhaya-libre-extrabold md:text-6xl sm:text-4xl text-5xl">Sculpting Digital Dreams.</h1>
            <h2 className="abhaya-libre-medium soft-text-color break-words py-6 md:text-md"> <p className="inline wave">👋</p>
                Hey there! I'm Torben, a 14-year-old who's interested in coding and creating cool stuff.
                Welcome to my portfolio, where I'll be sharing some of the projects I've been working on.
                Join me on this journey of exploration and learning as I dive into the world of software development.
                Let's have some fun with code! 🚀👩‍💻
            </h2>
        </div>
    )
}

export default HomeText