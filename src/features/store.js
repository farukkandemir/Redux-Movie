import {configureStore} from "@reduxjs/toolkit";
import movieReducer from "../features/movies/movieSlicer";

export const store = configureStore({
  reducer: {
    movies: movieReducer,
  },
});
