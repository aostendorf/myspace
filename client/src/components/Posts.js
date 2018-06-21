import React from 'react'
import { connect } from 'react-redux'
import {
  Container, 
  Header,
  Card,
  Button,
} from 'semantic-ui-react'
import PostForm from './PostForm'
import Post from './Post'
import FetchPosts from './FetchPosts'
import axios from 'axios'
import { setHeaders } from '../reducers/headers'

class Posts extends React.Component {
    state = { posts: [] , showForm: false }

    componentDidMount() {
    axios.get('/api/posts')
    .then( res => {
        this.props.dispatch(setHeaders(res.headers))
        this.setState({ posts: res.data })
    })
}

    toggleForm = () => {
        this.setState({ showForm: !this.state.showForm })
    }

    render () {
        const {showForm} = this.state
        return (
        <Container>
              <Header as="h1" textAlign="center">MySpace</Header>
              <PostForm/>
                <Header as="h1" textAlign="center">Posts</Header>
                <Card.Group itemsPerRow={1}>
                     {this.props.posts.map(post =>
                      <Post key={post.id} {...post}/>
                      )}
                 </Card.Group>

        </Container>
    )
  }
}
const mapStateToProps = (state) => {
    const { posts, user } = state
    return {
        posts: state.posts, user: state.user
    }
}

export default connect(mapStateToProps)(Posts)