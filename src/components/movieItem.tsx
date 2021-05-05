import * as React from 'react';
import { Movie } from 'models';
import { Card } from 'antd';
import 'antd/dist/antd.css';
import { CalendarOutlined, TagOutlined } from '@ant-design/icons';

interface Props {
  movie: Movie;
}

const MovieItem = (props: Props): JSX.Element => (
  <Card
    title={props.movie.name}
    style={{ width: 300, margin: '1rem', backgroundColor: '#b3f0f2', border: 0 }}
    headStyle={{backgroundColor: '#84e0e3', border: 0 }}
  >
    <p><CalendarOutlined /> {props.movie.productionYear}</p>
    <p><TagOutlined /> {props.movie.genre}</p>
    <p>{props.movie.synopsisShort}</p>
  </Card>
);

export default MovieItem;