import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setNowPlayingMovie } from "../store/movie.slice.js";
import { NOW_PLAYING_MOVIES, OPTIONS } from "../utils/constants.js";
const useGetNowPlayingMovie = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    (async function () {
      try {
        const res = await axios.get(NOW_PLAYING_MOVIES, OPTIONS);
        dispatch(setNowPlayingMovie(res.data.results));
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
};

export default useGetNowPlayingMovie;
