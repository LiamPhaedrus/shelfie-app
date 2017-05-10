import React, { Component } from 'react'
import Select from '../components/Select'
class SelectShelf extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    let shelfOptions = []

    if (this.props.bookcases) {
      this.props.bookcases.forEach(bookcase => {
        bookcase.caseShelves.forEach(shelf => {
          let named = `${bookcase.name} at ${bookcase.location} - ${shelf.name}`
          let shelfId = shelf.id
          shelfOptions.push({id: shelfId, show: named})
        })
      })
    }

    return(
      <div>
        <Select
          handleChange={this.props.handleShelf}
          label="Pick your shelf:"
          name="shelf-chooser"
          options={shelfOptions}
          selectedOption={this.props.selectedShelf}
        />
      </div>
    )
  }
}

export default SelectShelf
