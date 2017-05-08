import React from 'react'

const ImageField = (props) => {
  return (
    <label>{props.label}
      <input
        onChange={props.handlerFunction}
        type='file'
      />
    </label>
  );
}

export default ImageField
