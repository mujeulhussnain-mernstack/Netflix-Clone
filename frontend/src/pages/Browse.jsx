import { FiInfo } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { FaPlay } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MovieList from "../components/MovieList";
import PlayMovie from "../components/PlayMovie";
import useGetPopularMovie from "../hooks/useGetPopularMovie";
import useGetTopRatedMovie from "../hooks/useGetTopRatedMovie";
import useGetUpCommingMovie from "../hooks/useGetUpCommingMovie";
import useGetNowPlayingMovie from "../hooks/useGetNowPlayingMovie";

const Browse = () => {
  useGetPopularMovie();
  useGetTopRatedMovie();
  useGetUpCommingMovie();
  useGetNowPlayingMovie();
  const defaultMovieKey = "CID-sYQNCew";
  const [isPlay, setIsPlay] = useState(false);
  const { selectedMovie } = useSelector((store) => store.movie);
  const navigate = useNavigate();
  const user = useSelector((store) => store.user.authUser);
  const { nowPlayingMovie, popularMovie, topRatedMovie, upcomingMovie } =
    useSelector((store) => store.movie);
  const movies = [
    { title: "Now Playing Movies", data: nowPlayingMovie },
    { title: "Popular Movies", data: popularMovie },
    { title: "Top Rated Movies", data: topRatedMovie },
    { title: "Upcoming Movies", data: upcomingMovie },
  ];
  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  });
  return (
    <div className="relative w-screen h-screen">
      {isPlay && (
        <PlayMovie trailer={isPlay && selectedMovie?.youTubeTrailerId} />
      )}
      <div className="relative w-screen h-screen bg-black">
        <iframe
          className="w-screen h-screen"
          src={`https://www.youtube.com/embed/${
            selectedMovie ? selectedMovie.youTubeTrailerId : defaultMovieKey
          }?autoplay=1&mute=1&loop=1&playlist=${
            selectedMovie ? selectedMovie.youTubeTrailerId : defaultMovieKey
          }`}
        ></iframe>
        <div className="absolute top-0 left-0 w-full h-full flex items-center text-center text-white px-4">
          <div className="flex flex-col gap-1">
            <h1 className="text-4xl text-left md:text-5xl poppins font-bold">
              {selectedMovie ? selectedMovie.title : "Welcome to StreamFlix"}
            </h1>
            <p className="text-left mb-1.5 text-lg font-medium w-[60%]">
              {selectedMovie
                ? selectedMovie.overview
                : "Discover your next favorite movie or show with our extensive library."}
            </p>
            <div className="flex gap-1.5">
              <button className="cursor-pointer font-medium poppins bg-gray-800 bg-opacity-70 hover:bg-opacity-100 text-white px-4 py-3 rounded-md flex justify-center items-center gap-1.5 transition-all duration-300 hover:scale-105">
                <FiInfo /> More Info
              </button>
              <button
                className="cursor-pointer font-medium poppins bg-white text-black px-4 py-3 rounded-md hover:bg-opacity-80 flex justify-center items-center gap-1.5 transition-all duration-300 hover:scale-105"
                onClick={() => setIsPlay(!isPlay)}
              >
                {!isPlay ? <FaPlay /> : <MdClose size={24} />}
                {!isPlay ? "Play" : "Close"}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black">
        {/* Rows Component */}
        {movies?.map((movie, index) => (
          <MovieList key={index} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Browse;
