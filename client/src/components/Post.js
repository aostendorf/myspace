import React from 'react';
import { connect } from 'react-redux';
import { Divider, Header, Image, Container, Table } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const Post = ({ post = {} }) => (
  <Container>
    <Link to="/post">Post</Link>
  </Container>
)



export default Post;