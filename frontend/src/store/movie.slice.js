import { createSlice } from "@reduxjs/toolkit";
const movieSlice = createSlice({
  name: "movie",
  initialState: {
    nowPlayingMovie: null,
    popularMovie: null,
    topRatedMovie: null,
    upcomingMovie: null,
    selectedMovie: null,
  },
  reducers: {
    setNowPlayingMovie: (state, action) => {
      state.nowPlayingMovie = action.payload;
    },
    setPopularMovie: (state, action) => {
      state.popularMovie = action.payload;
    },
    setTopRatedMovie: (state, action) => {
      state.topRatedMovie = action.payload;
    },
    setUpcomingMovie: (state, action) => {
      state.upcomingMovie = action.payload;
    },
    setSelectedMovie: (state, action) => {
      state.selectedMovie = action.payload;
    },
  },
});

export const {
  setNowPlayingMovie,
  setPopularMovie,
  setTopRatedMovie,
  setUpcomingMovie,
  setSelectedMovie,
} = movieSlice.actions;
export default movieSlice.reducer;
