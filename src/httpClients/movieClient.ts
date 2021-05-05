import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { Movie } from 'models';

class MovieClient {
  getMoviesUrl(): string {
    return 'https://sometimes-maybe-flaky-api.gdshive.io';
  }

  async getMovies(): Promise<void> {
    const request: AxiosRequestConfig = {
      method: 'GET',
      url: this.getMoviesUrl(),
    };

    try {
      const response: AxiosResponse<Movie[]> = await axios(request);
      console.log(response);
    } catch(error) {
      console.log(error);
    }
  }
}

export default MovieClient;