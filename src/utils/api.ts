import moviesData from '../data/movies.json';

let movies: MovieDetails[] = moviesData;


// Fisher-Yates 알고리즘
export const shuffleArray = () => {
  for (let i = moviesData.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [moviesData[i], moviesData[j]] = [moviesData[j], moviesData[i]];
  }
};


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

interface Response {
  data: Movie[]; // 각 페이지의 영화 목록
  nextCursor: number | null; // 다음 페이지를 가져오기 위한 커서
  hasNextPage:boolean;
}

function delay(t: number): Promise<void> {
  return new Promise<void>(function (resolve: () => void) {
    setTimeout(() => resolve(), t);
  });
}

export async function fetchMovies({ queryKey, pageParam = 1 }: { queryKey: string[], pageParam?: number }): Promise<Response> {
  const [key] = queryKey;
  console.log('fetchMovies >> key : ' + key + ' / pageParam : ' + pageParam);

  const itemsPerPage = 20;
  const start = (pageParam - 1) * itemsPerPage;
  const end = pageParam * itemsPerPage;

  await delay(200 + Math.floor(Math.random() * 2000));

  const totalPages = Math.ceil(movies.length / itemsPerPage);

  const movieData = movies.slice(start, end);
  const hasNextPage = pageParam < totalPages;
  const nextCursor = hasNextPage ? pageParam + 1 : null;

  return new Promise<Response>((resolve) => {
    resolve({ data: movieData, nextCursor, hasNextPage });
  });
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
