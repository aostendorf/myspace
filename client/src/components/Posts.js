import React from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getPosts } from '../actions/posts';
import { Container, Grid, Comment, Header} from 'semantic-ui-react';

class Posts extends React.Component {
  componentDidMount() {
    this.props.dispatch(getPosts())
  }

posts = () => {
  return this.props.posts.map( post => 
    <div>
      <Header>
          {post.body}
      </Header>
    </div>
  
  )
}


render() {
  return (
    <Container>
      <Header as="h3" textAlign="center">Posts</Header>
        <div>
         {this.posts()}
        </div>
      </Container>
    )
  }
}



const mapStateToProps = (state) => {
  return { posts: state.posts }
}


export default connect(mapStateToProps)(Posts);