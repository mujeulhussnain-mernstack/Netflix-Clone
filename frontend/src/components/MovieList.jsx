import Movie from "./Movie";
import React from "react";

const MovieList = ({ movie }) => {
  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 500;
      scrollRef.current.scrollLeft +=
        direction === "left" ? -scrollAmount : scrollAmount;
    }
  };

  return (
    <div
      className={
        movie.title === "Now Playing Movies" ? "relative -mt-75" : "relative"
      }
    >
      <h1 className="text-white text-4xl font-bold poppins my-2 ml-4">
        {movie.title}
      </h1>
      <button
        onClick={() => scroll("left")}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-50 text-white p-4 text-2xl hover:bg-opacity-70 transition"
      >
        ❮
      </button>
      <div
        ref={scrollRef}
        className="flex gap-2 overflow-x-scroll p-4"
        style={{
          scrollbarWidth: "none" /* Firefox */,
          msOverflowStyle: "none" /* IE 10+ */,
        }}
      >
        {movie.data?.map((individualMovie) => (
          <Movie key={individualMovie.id} individualMovie={individualMovie} />
        ))}
      </div>
      <button
        onClick={() => scroll("right")}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-50 text-white p-4 text-2xl hover:bg-opacity-70 transition"
      >
        ❯
      </button>
    </div>
  );
};

export default MovieList;
