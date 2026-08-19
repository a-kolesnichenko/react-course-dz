
import { useLoaderData } from 'react-router-dom';
import Header from '../../components/Header/Header.tsx';
import type { MovieDetails } from '../../interfaces/MovieDetails.ts';


function Movie() {  

  const movieDetails = useLoaderData() as MovieDetails;

  return (	
    <>      
      <Header text={movieDetails.Title}/>
    </>	
  );
}

export default Movie;