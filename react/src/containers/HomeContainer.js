import React, { Component }  from 'react';

class HomeContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      books: []
    }

  }

  componentDidMount () {
    fetch('/api/v1/books', {
      credentials: 'include',
      method: 'GET'
    })
      .then(response=> response.json())
      .then(parsed=> {
        this.setState({
          name: parsed.user,
          books: parsed.books
        })
      })
  }

  render () {
    let bookTitles = this.state.books.map(book => {
      return(
        <li key={book.id}>{book.title}</li>
      )
    })
    return(
      <div>
        <h1>Hello {this.state.name}!</h1>

      </div>
    )
  }
}

export default HomeContainer
