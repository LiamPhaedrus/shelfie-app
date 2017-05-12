import React, { Component } from 'react'

class PlusMinus extends Component {
  constructor (props) {
    super(props)
    this.handlePlus = this.handlePlus.bind(this)
    this.handleMinus = this.handleMinus.bind(this)
    this.handleEmptyShelf = this.handleEmptyShelf.bind(this)
  }

  handleEmptyShelf (event) {
    event.preventDefault()
    confirm('Are you sure you want to remove all the books from the shelf?')
  }

  handlePlus (event) {
    event.preventDefault()
    console.log('plus one')
  }

  handleMinus (event) {
    event.preventDefault()
    console.log('minus one')
  }

  render () {
    return(
      <span>
        <button className="button plus" onClick={this.handlePlus}>
          +
        </button>
        <button className="button minus" onClick={this.handleMinus}>
          -
        </button>
        <button className="button empty" onClick={this.handleEmptyShelf}>
          Empty this shelf
        </button>
      </span>
    )
  }
}

export default PlusMinus
