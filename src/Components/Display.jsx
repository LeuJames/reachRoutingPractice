import React from 'react';


const Display = (props) => {
  return (
    <>
      {props.type === 'people' ? 
        <div>
          <h4>{props.type} {props.id}</h4>
          <p>Height:</p>
          <p>Hair Color:</p>
          <p>Eye Color:</p>
          <p>Skin Color:</p> 
        </div>
        :
        <div>
          <h4>{props.type} {props.id}</h4>
          <p>Climate:</p>
          <p>Terrain:</p>
          <p>Surface Water:</p>
          <p>Population:</p> 
        </div>
      }
    </>
  )

}

export default Display;