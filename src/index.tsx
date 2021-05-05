import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
//import MovieDetail from './pages/movieDetail';
import MovieList from './pages/movieList';
import NotFound from './pages/notFound';

const App: React.FC<{}> = () => {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/">
          <Redirect to="/movies" />
        </Route>
        <Route component={MovieList} path="/movies" exact />
        <Route path="*" component={NotFound} />
      </Switch>
    </HashRouter>
  );
};

ReactDOM.render(<App/>, document.getElementById('movies-webapp'));
