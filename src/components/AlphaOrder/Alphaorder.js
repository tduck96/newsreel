import React, {useContext} from 'react'
import { NewsReelContext } from '../../context/NewsReelContext';


const Alphaorder = () => {
    const { newsArticles, displayArticles } = useContext(NewsReelContext);

    const alphasort = [...newsArticles].sort(function(a,b) {
        return a.title.toLowerCase().localeCompare(b.title.toLowerCase());
      })
     
      const gettheNews = displayArticles(alphasort)

  return (
    <div>
      {gettheNews}
    </div>
  )
}

export default Alphaorder
