import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { Movie } from 'models';

class MovieClient {
  getMoviesUrl(): string {
    return 'https://sometimes-maybe-flaky-api.gdshive.io';
  }

  async getMovies(): Promise<Movie[]> {
    const request: AxiosRequestConfig = {
      method: 'GET',
      url: this.getMoviesUrl(),
    };

    try {
      const response: AxiosResponse<Movie[]> = await axios(request);
      return response.data;
    } catch(error) {
      console.log(error);
      throw error;
    }
  }
}

export default MovieClient;