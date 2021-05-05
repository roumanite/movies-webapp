import * as React from 'react';
import { Layout } from 'antd';
import 'antd/dist/antd.css';
import { Link } from 'react-router-dom';

const { Header, Content } = Layout;

interface MainContainerProps{
  menu?: React.ReactNode;
  children: React.ReactNode;
}

const MainContainer = (props: MainContainerProps): JSX.Element => (
  <Layout>
    <Header
      style={{
        backgroundColor: '#84e0e3',
        top: '0',
      }}
    >
      <Link to="/movies">
        <h1>
          Movies
        </h1>
      </Link>
    </Header>
    {props.menu}
    <Content
      style={{backgroundColor: '#FFFFFF'}}
    >
      {props.children}
    </Content>
  </Layout>
);

export default MainContainer;
