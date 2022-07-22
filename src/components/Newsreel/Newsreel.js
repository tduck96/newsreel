import React, {useContext, useState, useEffect, useCallback} from 'react'
import { Link } from 'react-router-dom';
import { NewsReelContext } from '../../context/NewsReelContext';
import styles from './Newsreel.module.css';
import ReactPaginate from 'react-paginate';

const Newsreel = () => {
    const { newsArticles, displayArticles, pageNum, whatPage } = useContext(NewsReelContext);
 
    const gettheNews = displayArticles(newsArticles)     
             
  return (
    <div>
        {gettheNews}
        <ReactPaginate
            previousLabel={"<"}
            nextLabel={">"}
            pageCount = {whatPage}
            />
      </div>
  )
  

    }
export default Newsreel
