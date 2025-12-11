import axios from "axios";
import { API_KEY, IMAGE_BASE_URL, VIDEO_BASE_URL } from "../utils/constants";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { setSelectedMovie } from "../store/movie.slice";
const Movie = ({ individualMovie }) => {
  const dispatch = useDispatch();
  const movieHandler = async (individualMovie) => {
    try {
      const response = await axios.get(
        `${VIDEO_BASE_URL}/movie/${individualMovie.id}/videos?api_key=${API_KEY}`
      );
      const trailer = response.data.results?.find(
        (video) => video.type === "Trailer" && video.site === "YouTube"
      );
      if (!trailer) {
        toast.error("Sorry! Video is unavailable.");
      } else {
        const selectedMovie = {
          youTubeTrailerId: trailer.key,
          title: individualMovie.original_title,
          overview: individualMovie.overview,
        };
        dispatch(setSelectedMovie(selectedMovie));
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div
      className="p-2 flex justify-center items-center hover:scale-105 transition-all duration-300 cursor-pointer"
      onClick={() => {
        movieHandler(individualMovie);
      }}
    >
      <img
        src={`${IMAGE_BASE_URL}${individualMovie.poster_path}`}
        className="min-w-60 rounded-lg"
        alt=""
      />
    </div>
  );
};

export default Movie;
