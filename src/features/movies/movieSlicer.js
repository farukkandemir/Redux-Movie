import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {api} from "../../api/api";

export const fetchPopularMovies = createAsyncThunk(
  "movies/fetchPopularMovies",
  async () => {
    const response = await api.get(
      `movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
    );
    return response.data.results;
  }
);

const initialState = {
  movies: {},
};

export const movieSlicer = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchPopularMovies.fulfilled, (state, action) => {
      return {...state, movies: action.payload};
    });
    builder.addCase(fetchPopularMovies.rejected, (state, action) => {
      console.log("Rejected");
    });
  },
});

export const selectPopular = (state) => state.movies.movies;

export default movieSlicer.reducer;
