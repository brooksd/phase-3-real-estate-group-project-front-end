import React from 'react';
import "./searchbar.css"

const SearchBar = () => {
  //const [searchTerm, setSearchTerm] = useState('');
  // const handleSearch = (event) => {
  // setSearchTerm(event.target.value);
  // };
  //const search = async (term) => {
  //const response = await axios.post(url, searchTerm);
  // add the response here const results=results.data
  //};

  //useEffect(() => {}, [searchTerm]);

  return (
    <>
      <div className='search-bar'>
        <div className='select-filter'>
          {/* <label>A</label> */}
          <select className='select' name='buildings' id='buildings'>
            <option value='All'>All</option>
            <option value='apartment'>Apartments</option>
            <option value='bungalows'>Bungalows</option>
            <option value='mansions'>Mansions</option>
           </select>
        </div>
        <div className='search'>
          <form className='search-form'>
            <input className='search-input' type='search' />
            <button type="button" className='search-btn'>search</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
