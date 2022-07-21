import React, {useContext} from 'react'
import { NewsReelContext } from '../../context/NewsReelContext';
import styles from './Newsreel.module.css';

const Newsreel = () => {
    const { articles } = useContext(NewsReelContext);
    
  return (
    <div className = {styles.newsReelContainer}>
        <label for="sortby">Sort: </label>
        <select name="sortby" id="sortby" form="sortby">
            <option value="Newest">Date</option>
            <option value="Alphebetically">Alphebetically</option>
        </select>
     {
        articles.map(article => (
            <div className = {styles.card} key = {article.index}>
                {/* <img src = {article.image_url} alt = '' ></img> */}
                <section className = {styles.descriptors}>
                 <a href = {article.link} target = '_blank' className = {styles.header}>{article.title} </a> 
                <p> {article.description}</p>
                </section>
            </div>
        ))
     }
    </div>
  )
}

export default Newsreel
