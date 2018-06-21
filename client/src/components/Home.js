import React from 'react';
import { Link } from 'react-router-dom';
import { Header, Container } from 'semantic-ui-react';
import { Posts } from './Posts'

const Home = () => (
  <div>
    <Header textAlign="center" as="h3">Welcome To <Link to="/posts">MySpace</Link></Header>
  </div>
)
export default Home;