import React from 'react';
import { connect } from 'react-redux';
import Post from './Post'
import { ADD_POST } from '../reducers/posts'
import { INC_ID } from '../reducers/posts'

class PostForm extends React.Component {
  state = { body: '' }

  handleSubmit = (e) => {
    e.preventDefault()
    const { dispatch, id } = this.props
    const { name } = this.state
    const todo = { name, id, complete: false }
    dispatch({ type: 'ADD_POST', todo })
    dispatch({ type: 'INC_ID' })
    this.setState({ name: '' })
  }

  handleChange = (e) => {
    this.setState({ name: e.target.value })
  }

  render() {
    const { name } = this.state

    return (
      <div>
        <h3>Add A Post</h3>
        <form onSubmit={this.handleSubmit}>
          <input value={name} onChange={this.handleChange} />
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { id: state.nextId }
}

export default connect(mapStateToProps)(PostForm);