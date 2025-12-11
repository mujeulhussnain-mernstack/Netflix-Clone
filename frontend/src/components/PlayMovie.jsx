import React from "react";

const PlayMovie = ({ trailer }) => {
  const defaultMovieKey = "CID-sYQNCew";
  return (
    <div className="absolute top-0 left-0 w-screen h-screen flex justify-end items-center">
      <div className="w-[35%] h-[35%] bg-gradient-to-r from-purple-400 to-pink-400 z-20 p-1 rounded-sm mr-4">
        <iframe
          className="w-full h-full rounded-sm"
          src={`https://www.youtube.com/embed/${
            trailer ? trailer : defaultMovieKey
          }?autoplay=1&loop=1&playlist=${trailer ? trailer : defaultMovieKey}`}
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default PlayMovie;
