import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import styles from './Nav.module.css'
import brandHeader from './assets/bleinews.png';
import { NewsReelContext } from '../../context/NewsReelContext';


const Nav = () => {

const { setPageNum } = useContext(NewsReelContext);

const resetPaginationWhenFlippingBetweenSort = () => {
  setPageNum(0);
}

  return (
    <section className = {styles.container}>
      <img src = {brandHeader} alt = 'header' className = {styles.brandHeader}></img>
    <section className = {styles.sortbox}>

       <Link to ='/' className = {styles.links} onClick={resetPaginationWhenFlippingBetweenSort}>Breaking News</Link>
       <Link to ='/alphasort' className = {styles.links} onClick={resetPaginationWhenFlippingBetweenSort}> News A-Z</Link>
       <Link to ='/search' className={styles.links}>Search</Link>
       
       </section>
        </section>
  )
}

export default Nav
