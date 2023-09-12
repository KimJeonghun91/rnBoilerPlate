import moviesData from '../data/movies.json';

const movies: MovieDetails[] = moviesData;

export type Movie = {
  title: string;
  year: number;
}

export type MovieDetails = Movie & {
  info: {
    directors?: string[];
    release_date: string;
    rating?: number;
    genres: string[];
    image_url?: string;
    plot?: string;
    rank: number;
    running_time_secs?: number;
    actors: string[];
  };
}

function delay(t: number): Promise<void> {
  return new Promise<void>(function (resolve: () => void) {
    setTimeout(() => resolve(), t);
  });
}

export async function fetchMovies(): Promise<Movie[]> {
  console.log('fetchMovies');

  await delay(200 + Math.floor(Math.random() * 2000));

  const movieData = movies
    .slice(0, 100)
    .map((movie) => ({ title: movie.title, year: movie.year }));

  return Promise.resolve(movieData);
}


export async function fetchMovie(title: string): Promise<MovieDetails> {
  console.log('fetchMovie', title);

  await delay(200 + Math.floor(Math.random() * 2000));

  const result = movies.filter((item) => item.title === title);

  if (result.length === 0) {
    throw new Error('Movie not found');
  }
  return result[0];
}
