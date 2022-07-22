import React, {useContext} from 'react'
import { Link } from 'react-router-dom';
import { NewsReelContext } from '../../context/NewsReelContext';
import styles from './Nav.module.css'


const Nav = () => {
    const { setSearchInput, setArrayToFilter, searchInput, newsArticles } = useContext(NewsReelContext);
    
    const submitSearch = (e) => {
        
      
           

    }
  return (
    <section className = {styles.container}>
    <section className = {styles.sortbox}>
       <Link to ='/' className = {styles.links}>Breaking News</Link>
       <Link to ='/alphasort' className = {styles.links}> News A-Z</Link>
       <Link to ='/search' className={styles.links}>Search</Link>
       </section>
        </section>
  )
}

export default Nav
