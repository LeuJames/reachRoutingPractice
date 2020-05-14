import React from 'react';

const TripleProp = (props) => {
  return (
    <h1 style={{backgroundColor: props.color2, color: props.color1}}> The word is: {props.word}</h1>
  )

}

export default TripleProp;