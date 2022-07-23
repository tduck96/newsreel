import React, {useContext} from 'react'
import { NewsReelContext } from '../../context/NewsReelContext';
import ReactPaginate from 'react-paginate';
import styles from "./Alphaorder.module.css"



const Alphaorder = () => {
    const { newsArticles, displayArticles, paginateBetweenPages } = useContext(NewsReelContext);
    
    const alphasort = [...newsArticles].sort(function(a,b) {
        return a.title.toLowerCase().localeCompare(b.title.toLowerCase());
       })
     
    const gettheNews = displayArticles(alphasort)
    
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

export default Alphaorder
