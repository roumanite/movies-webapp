import * as React from 'react';
import { Movie } from 'models';
import { MainContainer } from 'components';
import MovieClient from 'httpClients/movieClient';
import { RouteComponentProps } from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser';
import { CalendarOutlined, UnorderedListOutlined } from '@ant-design/icons';

interface MovieDetailState {
  movie: Movie;
  error: string;
  isLoading: boolean;
}

class MovieDetail extends React.Component<RouteComponentProps<{ name: string }>, MovieDetailState> {
  client = new MovieClient();

  constructor(props: RouteComponentProps<{ name: string }>) {
    super(props);
    this.state = {
      movie: null,
      error: '',
      isLoading: false,
    };
  }

  componentDidMount = async (): Promise<void> => {
    this.setState({ isLoading: true });
    const { name } = this.props.match.params;
    try {
      const movies = await this.client.getMovies();
      this.setState({
        movie: movies.find(movie => movie.name === name),
        isLoading: false,
      });
    } catch(e) {
      this.setState({
        error: 'API unavailable. Please refresh in a few seconds.',
        isLoading: false,
      });
    }
  }

  render(): React.ReactNode {
    const { movie, error, isLoading } = this.state;

    return (
      <MainContainer>
        <div style={{ padding: '3rem' }}>
          {movie && (
            <div>
              <p>Name: {movie.name}</p>
              <p><CalendarOutlined /> Production year: {movie.productionYear}</p>
              <p><UnorderedListOutlined /> Genre: {movie.genre}</p>
              <p>Synopsis: {ReactHtmlParser(movie.synopsis)}</p>
            </div>
          )}
          {!movie && !isLoading && !error && <h2>{'No movies found'}</h2>}
          {isLoading && <h2>{'Loading ...'}</h2>}
        </div>
      </MainContainer>
    );
  }
}

export default MovieDetail;