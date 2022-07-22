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
    {/* { 
        newsArticles.map(article => (
        <div key = {article.index}>
        <a href = {article.url} target = '_blank' >{article.title} </a> 
        <img src = {article.urlToImage} alt = 'articlethumbnail'></img>
        <p>{article.source.name}</p>
       <p> {article.description}</p>
   </div>
      ))} */}
      </div>
  )
  

    }
export default Newsreel
