import React from 'react';

const SingleProp = (props) => {
  
  return (
    <>
      {isNaN(props.prop) ? <h1>The word is: {props.prop} </h1> : <h1>The number is: {props.prop}</h1>}
    </>
  )

}

export default SingleProp;