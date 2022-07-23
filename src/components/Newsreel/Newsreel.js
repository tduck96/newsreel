import React, {useContext, useState, useEffect, useCallback} from 'react'
import { Link } from 'react-router-dom';
import { NewsReelContext } from '../../context/NewsReelContext';
import styles from './Newsreel.module.css';
import ReactPaginate from 'react-paginate';

const Newsreel = () => {
    const { newsArticles, displayArticles, paginateBetweenPages} = useContext(NewsReelContext);
 
    const gettheNews = displayArticles(newsArticles)

  
  return (
    <div className = {styles.container}>
      <section className = {styles.reelContainer}>
        {gettheNews}
      </section>
       
          <ReactPaginate
            previousLabel={"<"}
            nextLabel={">"}
            pageCount = {2}
            onPageChange={paginateBetweenPages}
            containerClassName={styles.paginationContainer}
            activeClassName={styles.activePage}
            />
           
      </div>
  )
  

    }
export default Newsreel
