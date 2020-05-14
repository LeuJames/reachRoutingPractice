import React, {useState} from 'react';
import {Router, navigate } from '@reach/router';
import './App.css';
import Search from './Components/Search';
import Display from './Components/Display';
import axios from 'axios';

function App() {
  const [responseData, setResponseData] = useState(null);

  const handleSearch = (typeInput, idInput) => {
    navigate(`/${typeInput}/${idInput}`);
    axios.get(`https://swapi.dev/api/${typeInput}/${idInput}/`)
    .then(response=>{setResponseData(response.data)})
    .catch(err => console.log(err));
  }


  return (
    <div className="App">
      <Search search={handleSearch}/>
      <Router>
        <Display 
          data = {responseData}
          path='/:type/:id/'
        />
      </Router>
    </div>
  );
}

export default App;
