import React, {useContext, useState, useEffect, useCallback} from 'react'
import { Link } from 'react-router-dom';
import { NewsReelContext } from '../../context/NewsReelContext';
import styles from './Newsreel.module.css';

const Newsreel = () => {
    const { newsArticles } = useContext(NewsReelContext);
   
        //  const sortDate =  [...newsArticles].sort((a,b) => {
        //      return new Date(b.pubDate).valueOf() - new Date(a.pubDate).valueOf() 
        //  })
        //      console.log(sortDate);
         
             
  return (
    <div>
    { 
        newsArticles.map(article => (
        <div key = {article.index}>
        <a href = {article.url} target = '_blank' >{article.title} </a> 
        <img src = {article.urlToImage} alt = 'articlethumbnail'></img>
        <p>{article.source.name}</p>
       <p> {article.description}</p>
   </div>
      ))}
      </div>
  )
  

    }
export default Newsreel
