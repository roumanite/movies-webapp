import * as React from 'react';
import { Layout } from 'antd';
import 'antd/dist/antd.css';

const { Header, Content } = Layout;

interface MainContainerProps{
  menu: React.ReactNode;
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
      <h1>
        Movies
      </h1>
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
