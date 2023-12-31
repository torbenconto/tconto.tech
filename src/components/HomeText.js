import "../fonts.css"
import "../colors.css"

function HomeText() {
    return (
        <div className="flex flex-col md:p-2 space-y-3">
            <h1 className="abhaya-libre-extrabold md:text-6xl sm:text-2xl text-3xl">Sculpting Digital Dreams.</h1>
            <h2 className="abhaya-libre-normal soft-text-color break-words text-md md:text-xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
            </h2>
        </div>
    )
}

export default HomeText