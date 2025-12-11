import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUpcomingMovie } from "../store/movie.slice";
import { OPTIONS, UPCOMING_MOVIES } from "../utils/constants";
const useGetUpCommingMovie = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    (async function () {
      try {
        const res = await axios.get(UPCOMING_MOVIES, OPTIONS);
        dispatch(setUpcomingMovie(res.data.results));
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
};

export default useGetUpCommingMovie;
