import React, { useEffect } from 'react'
import { useContext, useState } from 'react'
import { NewsReelContext } from '../../context/NewsReelContext'
import search from './assets/search.png'
import styles from './Search.module.css'

const Search = () => {
    const { searchInput, newsArticles, setSearchInput, displayArticles } = useContext(NewsReelContext);

    const filteredSearch = newsArticles.filter(item => item.title.toLowerCase().includes(searchInput.toLowerCase()))

    const searchResults = displayArticles(filteredSearch)
    
  return (
    
      <div>
        <div className = {styles.searchContainer}>
          <div className = {styles.inputContainer}>
            <img src = {search} className ={styles.searchicon}></img>
            <input type = 'search' className = {styles.input} onChange={(e) => setSearchInput(e.target.value) }></input>
          </div>
        </div>
        <div className = {styles.reelContainer}>
          {searchResults}
       </div>
    </div>
  )
}

export default Search
