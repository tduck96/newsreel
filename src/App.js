import { useState, useEffect } from 'react';
import { NewsReelContext } from './context/NewsReelContext';
import Newsreel from './components/Newsreel/Newsreel';
const axios = require('axios');


function App() {

  const [articles, setArticles] = useState([]);
  
  const apiKey = 'pub_9414d2d02ad737ddbd066187613b2fdeefa2';

  const getArticles = () => {
    axios.get(`https://newsdata.io/api/1/news?apikey=pub_9414d2d02ad737ddbd066187613b2fdeefa2`)
    .then(response => setArticles(response.data.results));
  }

  useEffect(() => {
    getArticles();
  }, []);


  return (
    <div>
    <NewsReelContext.Provider value = {{articles}}>
    <Newsreel />
    </NewsReelContext.Provider>
    </div>
  );
}

export default App;
