import React, { Component } from 'react'
import { DragDropContext } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'

class DragContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      shelves: [],
      books: []
    }
  }

  componentDidMount () {
    fetch(`api/v1/shelves`, {
      credentials: 'include',
      method: 'GET'
    })
      .then(response => response.json())
      .then(data => {
        this.setState({ shelves: data.shelves, books: data.books })
      })
  }

  render () {
    console.log(this.state)
    return(
      <h1>Drag and drop begins!</h1>
    )
  }
}

export default DragContainer
