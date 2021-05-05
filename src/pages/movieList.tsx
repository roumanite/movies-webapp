import * as React from 'react';
import MovieClient from 'httpClients/movieClient';

class MovieList extends React.Component {
  componentDidMount = async (): Promise<void> => {
    const client = new MovieClient();
    await client.getMovies();
  }

  render(): React.ReactNode {
    return (
      <div>
      </div>
    );
  }
}

export default MovieList;