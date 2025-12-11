import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setPopularMovie } from "../store/movie.slice";
import { OPTIONS, POPULAR_MOVIES } from "../utils/constants";
const useGetPopularMovie = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    (async function () {
      try {
        const res = await axios.get(POPULAR_MOVIES, OPTIONS);
        dispatch(setPopularMovie(res.data.results));
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
};

export default useGetPopularMovie;
