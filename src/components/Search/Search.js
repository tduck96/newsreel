import React, { useEffect } from 'react'
import { useContext, useState } from 'react'
import { NewsReelContext } from '../../context/NewsReelContext'
import search from './assets/search.png'
import styles from './Search.module.css'

const Search = () => {
    const { searchInput, newsArticles, setSearchInput, displayArticles } = useContext(NewsReelContext);

      const filteredSearch = newsArticles.filter(item => item.title.toLowerCase().includes(searchInput.toLowerCase()))
    console.log(filteredSearch);

    const searchResults = displayArticles(filteredSearch)
    
  return (
    <div>
      <div className = {styles.searchContainer}>
      <input type = 'search' className = {styles.input} onChange={(e) => setSearchInput(e.target.value) }></input>
      <img src = {search} className ={styles.searchicon}></img>
    </div>
      {searchResults}
     
    </div>
  )
}

export default Search
