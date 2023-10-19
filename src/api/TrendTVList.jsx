
import TrendTVItem from "./TrendTVItem"


const TrendTVList = (props) => {
    return (
        <div className="max-w-[1640px] mx-auto sm:max-w-screen-xl">
            {/* Heading for Trending Movies */}
            {/* <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-semibold mt-20 px-6 py-4 rounded-lg shadow-lg">
        Trending Movies
    </h1> */}

            {/* Display a list of genres */}
            {/* <GenreList /> */}

            {/* Horizontal line separator */}
            {/* <div className="border-b border-gray-600 mt-4"></div> */}

            {/* Display a list of trending movies */}
            <ul className="grid gap-4 grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {props.trendMovies.map((movie) => (
                    <TrendTVItem
                        key={movie.id}
                        id={movie.id}
                        title={movie.name}
                        overview={movie.overview}
                        image={movie.poster_path}
                        releaseDate={movie.first_air_date}
                        lang={movie.original_language}
                    />
                ))}
            </ul>
        </div>
    )
}
export default TrendTVList