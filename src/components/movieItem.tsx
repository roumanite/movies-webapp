import * as React from 'react';
import { Movie } from 'models';
import { Card } from 'antd';
import { Link } from 'react-router-dom';
import 'antd/dist/antd.css';
import { CalendarOutlined, TagOutlined } from '@ant-design/icons';
import ReactHtmlParser from 'react-html-parser';

interface Props {
  movie: Movie;
  linkTo?: string;
}

const MovieItem = (props: Props): JSX.Element => {
  const MovieCard = (
    <Card
      title={props.movie.name}
      style={{ width: 300, margin: '1rem', backgroundColor: '#b3f0f2', border: 0 }}
      headStyle={{backgroundColor: '#84e0e3', border: 0 }}
    >
      <p><CalendarOutlined /> {props.movie.productionYear}</p>
      <p><TagOutlined /> {props.movie.genre}</p>
      <p>{ReactHtmlParser(props.movie.synopsisShort)}</p>
    </Card>
  );
  if (props.linkTo) {
    return (
      <Link to={props.linkTo}>
        {MovieCard}
      </Link>
    );
  }
  return MovieCard;
};

export default MovieItem;