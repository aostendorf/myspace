import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';
import { connect } from 'react-redux';
import Posts from './Posts';
import axios from 'axios'

class Home extends Component {
  state = { posts: [], user: '' }

  componentDidMount() {
    axios.get('/api/posts')
    .then( res => this.setState({ posts: res.data}) )
  }

  render() {
    const { posts } = this.state
    return(
      <div>
        <ul>
        { this.state.posts.map( post =>
          <li key={post.id}>{post.body}</li>
        )
      }
        </ul>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {posts: state.posts}
}

export default connect(mapStateToProps)(Home);
