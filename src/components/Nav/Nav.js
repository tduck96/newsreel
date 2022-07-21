import React, {useContext} from 'react'
import { Link } from 'react-router-dom';
import { NewsReelContext } from '../../context/NewsReelContext';

const Nav = () => {
    const { setSearchInput } = useContext(NewsReelContext);
    
    const submitSearch = (e) => {
        e.preventDefault();
    }
  return (
    <section>
       <Link to ='/'>Breaking News</Link>
       <Link to ='/alphasort'>A-Z</Link>
        <input type = 'search' placeholder = "Search Articles..." onChange = {(e) => setSearchInput(e.target.value)}></input>
        <button type = 'submit' onClick = {submitSearch}><Link to ='/search'>Search</Link></button>
        </section>
  )
}

export default Nav
