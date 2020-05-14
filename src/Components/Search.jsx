import React, {useState} from 'react';

const Search = (props) => {
  const [typeInput, setTypeInput] = useState('');
  const [idInput, setIdInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    props.search(typeInput,idInput);
    setIdInput('');
    setTypeInput('');
  }
  
  return (
    <form onSubmit= {handleSubmit}>
      <p>Search for: &nbsp;
        <select value={typeInput} onChange = { (e) => setTypeInput(e.target.value)} required>
          <option value="none">Select a type</option>
          <option value="people">People</option>
          <option value="planets">Planet</option>
        </select>
        &nbsp; ID: &nbsp;
        <input type="text" placeholder="ID #" value={idInput} onChange = { (e) => setIdInput(e.target.value)} required/>
        &nbsp;
        <button type="submit">Search</button>
      </p>

    </form>

  )

}

export default Search;