import React, {useEffect} from "react";
import {useDispatch} from "react-redux";
import {fetchPopularMovies} from "../../features/movies/movieSlicer";

function Movies() {
  const dispatch = useDispatch();

  // async function getMovies() {
  //   const response = await api.get(
  //     `movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
  //   );

  //   console.log(response);
  // }

  useEffect(() => {
    dispatch(fetchPopularMovies());
  }, [dispatch]);

  return (
    <section>
      <div>Hello</div>
    </section>
  );
}

export default Movies;
