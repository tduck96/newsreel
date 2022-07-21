import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { NewsReelContext } from './context/NewsReelContext';
import Nav from './components/Nav/Nav';
import Newsreel from './components/Newsreel/Newsreel';
import Search from './components/Search/Search';
import Alphaorder from './components/AlphaOrder/Alphaorder'
const axios = require('axios');


function App() {

  const [newsArticles, setArticles] = useState([]);
  const [searchInput, setSearchInput] = useState('');

  const [pageNum, setPageNum] = useState(0);
  const perPage = 15;
  const whatPage = pageNum * perPage 

  const displayArticles = (arr) =>  arr.slice(whatPage, whatPage + perPage)
  .map(item => (
      <div key = {item.index}>
      <a href = {item.url} target = '_blank' >{item.title} </a> 
      <img src = {item.urlToImage} alt = 'articlethumbnail'></img>
      <p>{item.source.name}</p>
     <p> {item.description}</p>
 </div>
 
  ))

  const getArticles = () => {
    axios.get(`https://newsapi.org/v2/top-headlines?country=us&pageSize=30&apiKey=cecc1278a6874a75bc15ccd18bc30545`)
    .then(response => setArticles(response.data.articles));
  }
  useEffect(() => {
    getArticles();
  }, []);


  return (
    
      <NewsReelContext.Provider value = {{newsArticles, searchInput, setSearchInput, displayArticles, whatPage, perPage, pageNum}}>
        <Router>
          <Nav />
          <Routes>
            <Route path = '/'  element = {<Newsreel />} />
            <Route path = '/alphasort'  element = {<Alphaorder />} />
            <Route path = '/search'  element = {<Search />} />
        </Routes>
      </Router>
      
      </NewsReelContext.Provider>
    
  );
}

export default App;
