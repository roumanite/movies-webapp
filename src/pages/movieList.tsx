import * as React from 'react';
import { Movie, Option } from 'models';
import MovieClient from 'httpClients/movieClient';
import GENRES from 'constants/genres';
import { MainContainer, FilterButton, MovieItem } from 'components';
import { Menu } from 'antd';
import 'antd/dist/antd.css';
import { CalendarOutlined, UnorderedListOutlined } from '@ant-design/icons';

interface MoviesState {
  movies: Movie[];
  filter: {
    year: string;
    genre: string;
  };
  error: string;
  isLoading: boolean;
}

class MovieList extends React.Component<{}, MoviesState> {
  client = new MovieClient();
  yearOptions: Option[] = [{
    text: 'All year',
    value: '',
  }];
  allMovies: Movie[] = [];

  constructor(props = {}) {
    super(props);
    this.state = {
      movies: [],
      filter: {
        year: '',
        genre: '',
      },
      error: '',
      isLoading: false,
    };
  }

  componentDidMount = async (): Promise<void> => {
    this.setState({ isLoading: true });
    for (let year = 2000; year <= new Date().getFullYear(); year++) {
      this.yearOptions.push({ text: year.toString(), value: year.toString() });
    }
    try {
      const movies = await this.client.getMovies();
      this.allMovies = movies;
      this.setState({ movies, isLoading: false });
    } catch(e) {
      this.setState({
        error: 'API unavailable. Please refresh in a few seconds.',
        isLoading: false,
      });
    }
  }

  async componentDidUpdate(_: {}, prevState: MoviesState): Promise<void> {
    const { filter: prevFilter } = prevState;
    const { filter: thisFilter } = this.state;
    if (prevFilter.year != thisFilter.year || prevFilter.genre != thisFilter.genre) {

      this.setState({
        movies: this.allMovies.filter(
          movie => (thisFilter.year.length === 0 || movie.productionYear == thisFilter.year)
            && (thisFilter.genre.length === 0 || movie.genre == thisFilter.genre),
        ),
      });
    }
  }

  onFilterChange = (field: string, value: string): void => {
    this.setState(prevState => ({
      filter: {
        ...prevState.filter,
        [field]: value,
      },
    }));
  }

  render(): React.ReactNode {
    const { isLoading, error, filter, movies } = this.state;

    return (
      <MainContainer
        menu={(
          <Menu
            style={{ padding:'1rem', backgroundColor: '#b3f0f2' }}
            mode="horizontal"
          >
            <FilterButton
              defaultValue=""
              value={filter.year}
              onChange={(value): void => this.onFilterChange('year', value)}
              options={this.yearOptions}
              icon={<CalendarOutlined />}
            />
            <FilterButton
              defaultValue=""
              value={filter.genre}
              onChange={(value): void => this.onFilterChange('genre', value)}
              options={GENRES}
              icon={<UnorderedListOutlined />}
            />
          </Menu>
        )}
      >
        <div style={{ padding: '3rem', display: 'flex', flexWrap: 'wrap' }}>
          {error && (
            <div style={{ flex: '0 0 100%' }}>
              <h2>{error}</h2>
            </div>
          )}
          {movies && movies.map((movie, i) => (
              <MovieItem key={i} movie={movie} />
          ))}
          {movies.length === 0 && !isLoading && !error && <h2>{'No movies found'}</h2>}
          {isLoading && <h2>{'Loading ...'}</h2>}
        </div>
      </MainContainer>
    );
  }
}

export default MovieList;