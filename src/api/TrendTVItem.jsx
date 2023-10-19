import { useEffect, useState } from "react"
import { Link } from "react-router-dom";


const TrendTVItem = (props) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  useEffect(() => {
    checkFavorite();
}, []);

  const handleMouseEnter = () => {
    setIsHovered(true);
  }
  const handleMouseLeave = () => {
    setIsHovered(false)
  }
  const checkFavorite = () => {
    const url = `https://api.themoviedb.org/3/account/20465724/favorite/movies?language=en-US&page=1&session_id=${localStorage.getItem('SessionID')}&sort_by=created_at.asc`;
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1Yzc4MzgyOTIzYzdmMTZhNzRiNzliY2Y0MmRiY2I4YyIsInN1YiI6IjY1MGE0MTZlMGQ1ZDg1MDBmZGI3NTBkNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5vlhHdCU3GL4v5Tirdkb84CfhgTRB-kYoOx2IotsQK0'
        }
    };

    fetch(url, options)
        .then(res => res.json())
        .then(json => {
            console.log("Movie ID", json.results)
            const isMovieLiked = json.results.some(movie => movie.id === props.id)
            setIsLiked(isMovieLiked)
            if (isMovieLiked) {
                setIsLiked(true)
            } else {
                setIsLiked(false)
            }
        }
        )
        .catch(err => console.error('error:' + err));
}

  const Favorites = () => {
    const url = `https://api.themoviedb.org/3/account/20465724/favorite?session_id=${localStorage.getItem('SessionID')}`;
    const options = {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'content-type': 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1Yzc4MzgyOTIzYzdmMTZhNzRiNzliY2Y0MmRiY2I4YyIsInN1YiI6IjY1MGE0MTZlMGQ1ZDg1MDBmZGI3NTBkNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5vlhHdCU3GL4v5Tirdkb84CfhgTRB-kYoOx2IotsQK0'
      },
      body: JSON.stringify({ media_type: 'movie', media_id: props.id, favorite: true })
    };

    fetch(url, options)
      .then(res => res.json())
      .then(json => console.log(json))
      .catch(err => console.error('error:' + err));
  }

  const RemoveFavorites = () => {
    const url = `https://api.themoviedb.org/3/account/20465724/favorite?session_id=${localStorage.getItem('SessionID')}`;
    const options = {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'content-type': 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1Yzc4MzgyOTIzYzdmMTZhNzRiNzliY2Y0MmRiY2I4YyIsInN1YiI6IjY1MGE0MTZlMGQ1ZDg1MDBmZGI3NTBkNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5vlhHdCU3GL4v5Tirdkb84CfhgTRB-kYoOx2IotsQK0'
      },
      body: JSON.stringify({ media_type: 'tv', media_id: props.id, favorite: false })
    };

    fetch(url, options)
      .then(res => res.json())
      .then(json => console.log(json))
      .catch(err => console.error('error:' + err));

  //   fetch(url, options)
  //     .then(res => res.json())
  //     .then(json => console.log(json))
  //     .catch(err => console.error('error:' + err));
   }


  function truncateText(text, maxLength) {
    if (text.length > maxLength) {
      return text.substr(0, maxLength) + '...';
    }
    return text;
  }

  

  const handleLike = () => {
    setIsLiked(!isLiked);
    if (!isLiked) {
      Favorites()
      console.log("LikePressed", props.id)
    } else (RemoveFavorites())
  }


  return (

    <div className="w-full p-4 border-b border-gray-600 mb-10">
      <Link
        to={{
          pathname: "/TvDetailsPage",
          search: `?id=${encodeURIComponent(props.id)}`,
        }}
        className="flex flex-col h-half"
      >
        <div
          className={`relative overflow-hidden rounded-lg shadow-lg transform transition-transform duration-300 hover:shadow-xl ${isHovered ? 'scale-110' : ''}`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{
            paddingBottom: "150%", // Maintain aspect ratio for the container
          }}
        >
          <div className="absolute inset-0 rounded-lg overflow-hidden">
            {/* Movie Image */}
            <img
              className={`w-full h-full object-cover transition-all duration-300 ${isHovered ? 'transform scale-105 blur-sm' : 'blur-none'}`}
              src={`https://image.tmdb.org/t/p/w400${props.image}`}
              alt=""
            />
            {isHovered && (
              // Dark overlay on hover
              <div className="absolute inset-0 bg-black bg-opacity-30 transition-opacity duration-300"></div>
            )}
          </div>

          {isHovered && (
            // Movie details on hover
            <div className="absolute inset-0 flex flex-col p-4 bg-black bg-opacity-10 backdrop-blur-sm">
              <div className="text-white">
                {/* Movie Title */}
                <p className="font-bold text-xl text-center mb-2">
                  {props.title}
                </p>
                {/* Release Date */}
                <p className="text-center text-gray-50 mb-2">
                  Release Date: {props.releaseDate}
                </p>
              </div>
              <div className="text-gray-300 mt-auto">
                {/* Movie Overview */}
                <p className="text-sm">
                  {truncateText(props.overview, 100)}
                </p>
              </div>
            </div>
          )}
        </div>
      </Link>
      <div className="flex flex-col flex-grow justify-between p-4">
        {/* Movie Title */}
        <h1 className="text-xl text-gray-200 font-semibold mb-2">
          {props.title}
        </h1>
        <div className="flex justify-between">
          {/* Release Date */}
          <p className="text-sm text-gray-600">{props.releaseDate}</p>

          {/* Like Button */}
          <button
            className={`hover:text-red-700 transition ${isLiked ? 'text-red-700' : ''}`}
            onClick={handleLike}
            aria-label="Like"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-5 w-5 ${isLiked ? 'text-red-700' : ''}`}
              viewBox="0 0 20 20"
              fill={isLiked ? 'currentColor' : 'none'}
              stroke={isLiked ? 'none' : 'currentColor'}
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M10 18.261l-1.45-1.32C3.54 11.068 1 8.35 1 5.5 1 3.019 3.019 1 5.5 1c1.418 0 2.762.668 3.633 1.814C9.738 1.668 11.082 1 12.5 1 14.981 1 17 3.019 17 5.5c0 2.85-2.54 5.568-7.55 11.442L10 18.262z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>


  )
}
export default TrendTVItem