import React from 'react';
import { Link } from 'react-router-dom';
import { Header, Container } from 'semantic-ui-react';
import { Posts } from './Posts'

const Home = () => (
  <Container>
    <Header textAlign="center" as="h3">Welcome To <Link to="/posts">MySpace</Link></Header>
  </Container>
)
export default Home;