import React, {useState, useEffect} from 'react';
import axios from 'axios';
// import { navigate } from '@reach/router';


const Display = ({apiData, type, navToPlanet}) => {
  const [planetData, setPlanetData] = useState({})

  useEffect (() => {
    axios.get(`${apiData.homeworld}`)
    .then(response=>{
      setPlanetData(response.data);
    })
  }, [apiData]);

  const handleClick = () => {
    let urlSearch = apiData.homeworld.slice(20, apiData.homeworld.length -1);
    navToPlanet(urlSearch);
  }

  return (
    <>
      {type === 'people' ? 
        <div>
          <h4>{apiData.name}</h4>
          <p>Height: {apiData.height}</p>
          <p>Hair Color: {apiData.hair_color}</p>
          <p>Eye Color: {apiData.eye_color}</p>
          <p>Skin Color: {apiData.skin_color}</p>
          <p>Home Planet: <button onClick={handleClick}>{planetData.name}</button> </p> 
        </div>
        :
        <div>
          <h4>{apiData.name}</h4>
          <p>Climate: {apiData.climate}</p>
          <p>Terrain: {apiData.terrain}</p>
          <p>Surface Water: {apiData.surface_water}</p>
          <p>Population: {apiData.population}</p> 
        </div>
      }
    </>
  )

}

export default Display;