import React, {useState, useEffect} from 'react';
import {Router, navigate } from '@reach/router';
import './App.css';
import Search from './Components/Search';
import Display from './Components/Display';
import axios from 'axios';

function App() {
  const [responseData, setResponseData] = useState([]);
  const [errors, setErrors] = useState(false);
  const [url, setUrl] = useState('')

  const handleSearch = (urlSearch) => {
    setUrl(urlSearch);
  }

  useEffect (() => {
    axios.get(`https://swapi.dev/api${url}`)
      .then(response=>{
        setResponseData(response.data);
        setErrors(false)
        navigate(url);
      })
      .catch(err => {
        console.log(err);
        setErrors(true)
      })} , [url]);

  return (
    <div className="App">
      <Search search={handleSearch}/>
      { errors ? <h1>These are not the droids you're looking for</h1>:
        <Router>
          <Display 
            navToPlanet = {handleSearch}
            apiData = {responseData}
            path='/:type/:id/'
          />
        </Router>
      }
    </div>
  );
}

export default App;
