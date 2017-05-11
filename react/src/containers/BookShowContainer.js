import React, { Component }  from 'react'
import BackButton from '../components/BackButton'
import BookDetails from '../components/BookDetails'

class BookShowContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      book: {}
    }
    this.fetchBook = this.fetchBook.bind(this)
  }

  componentDidMount () {
    this.fetchBook(this.props.params.id)
  }

  fetchBook (id) {
    fetch(`/api/v1/books/${id}`, {
      credentials: 'same-origin',
      method: 'GET'
    })
    .then(response=> response.json())
    .then(parsed=> {
      console.log(parsed)
      this.setState({
        book: parsed
      })
    })
  }

  render () {
    return(
      <div>
        <div className='row column'>
          <BookDetails
            info={this.state.book}
          />
        </div>
        <BackButton />
      </div>
    )
  }
}

export default BookShowContainer
