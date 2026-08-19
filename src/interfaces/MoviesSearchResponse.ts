import type { Movie } from './Movie';

export interface MoviesSearchResponse {
  Search: Movie[];
  totalResults: string;
  Response: string;
}
