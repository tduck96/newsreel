import React from 'react'
import { Link } from 'react-router-dom';
import styles from './Nav.module.css'
import brandHeader from './assets/bleinews.png';


const Nav = () => {

  return (
    <section className = {styles.container}>
      <img src = {brandHeader} alt = 'header' className = {styles.brandHeader}></img>
    <section className = {styles.sortbox}>
       <Link to ='/' className = {styles.links}>Breaking News</Link>
       <Link to ='/alphasort' className = {styles.links}> News A-Z</Link>
       <Link to ='/search' className={styles.links}>Search</Link>
       </section>
        </section>
  )
}

export default Nav
