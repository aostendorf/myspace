import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import {
  Container, 
  Header,
  Card,
  Divider,
  Button,
} from 'semantic-ui-react'
import Post from './Post'
import { getPosts } from '../actions/posts'
import PostForm from './PostForm'
import { deletePost } from '../reducers/posts'


class Posts extends React.Component {

    state = { showForm: false }

    componentDidMount() {
        this.props.dispatch( getPosts() )
    }

    toggleForm = () => {
        this.setState({ showForm: !this.state.showForm })
    }


    posts = () => {
        return this.props.posts.map ( post => {
              return <Post key={post.id} {...post} />
            }
        )
    }

    render () {
        const {showForm} = this.state
        return (
            <Container>
              <Header as="h1" textAlign="center">
                Posts
              </Header>
              <Button color="green" onClick={this.toggleForm}>Add</Button>
              <Divider />
                {showForm ? 
                <PostForm toggleForm={this.toggleForm}/>
                :
                <Card.Group itemsPerRow={4}>
                    { this.posts() }
                </Card.Group>
            }
            </Container>
        )
    }
}

const mapStateToProps = (state) => {
    const { posts, user } = state
    return {
        posts,
        user
    }
}

export default connect(mapStateToProps)(Posts)