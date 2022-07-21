import React, {useContext} from 'react'
import { NewsReelContext } from '../../context/NewsReelContext';


const Alphaorder = () => {
    const { newsArticles } = useContext(NewsReelContext);

    const alphasort = [...newsArticles].sort(function(a,b) {
        return a.title.toLowerCase().localeCompare(b.title.toLowerCase());
      })
       console.log(alphasort);

  return (
    <div>
      {alphasort.map(article => (
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

export default Alphaorder
