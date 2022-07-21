import React from 'react'
import { useContext } from 'react'
import { NewsReelContext } from '../../context/NewsReelContext'

const Search = () => {
    const { searchInput, newsArticles } = useContext(NewsReelContext);
    
    const filteredSearch = newsArticles.filter(item => item.title.includes(searchInput))
    
  return (
    <div>
      { 
      filteredSearch.map(item => (
        <div key = {item.index}>

            <a href = {item.url} target = '_blank' >{item.title} </a> 
            <img src = {item.urlToImage} alt = 'articlethumbnail'></img>
            <p>{item.source.name}</p>
            <p> {item.description}</p>

        </div>
      ))}

    </div>
  )
}

export default Search
