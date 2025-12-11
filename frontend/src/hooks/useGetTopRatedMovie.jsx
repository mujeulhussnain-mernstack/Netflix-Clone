import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { OPTIONS } from "../utils/constants.js";
import { TOP_RATED_MOVIES } from "../utils/constants.js";
import { setTopRatedMovie } from "../store/movie.slice.js";
const useGetTopRatedMovie = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    (async function () {
      try {
        const res = await axios.get(TOP_RATED_MOVIES, OPTIONS);
        dispatch(setTopRatedMovie(res.data.results));
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
};

export default useGetTopRatedMovie;
