import React from 'react'

const Select = props => {
  let optionElements = props.options.map(option =>{
    return (
      <option key={option.id} value={option.id}>{option.show}</option>
    )
  })

  return (
    <label>{props.label}
      <select name={props.name} value={props.selectedOption} onChange={props.handleChange}>
        <option value=""></option>
        {optionElements}
      </select>
    </label>
  );
}

export default Select
