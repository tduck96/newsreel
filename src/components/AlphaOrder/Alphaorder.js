import React, {useContext} from 'react'
import { NewsReelContext } from '../../context/NewsReelContext';
import ReactPaginate from 'react-paginate';


const Alphaorder = () => {
    const { newsArticles, displayArticles } = useContext(NewsReelContext);

    const alphasort = [...newsArticles].sort(function(a,b) {
        return a.title.toLowerCase().localeCompare(b.title.toLowerCase());
      })
     
      const gettheNews = displayArticles(alphasort)

  return (
    <div>
      {gettheNews}
      <ReactPaginate />
    </div>
  )
}

export default Alphaorder
