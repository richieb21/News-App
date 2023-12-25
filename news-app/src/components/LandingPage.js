import React, { useState, useEffect } from 'react'
import SearchBar from './SearchBar'
import NewsCard from './NewsCard';

const LandingPage = () => {

  const [news, setNews] = useState([]);

  const api_key = '91cf390ffa6c465eb8ef1a1edf2fb044';
  
  const handleSearch = (search) => {
    const encodedSearch = encodeURIComponent(search);
    const url = `https://newsapi.org/v2/everything?q=${encodedSearch}&apiKey=${api_key}`;
    
    console.log(url);

    // Now call the API with this URL
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        const filteredArticles = data.articles.filter(article => article.description !== null && article.urlToImage !== null);
        setNews(filteredArticles);
      })
      .catch(error => console.error('Error fetching data:', error));
  }


  const newsCards = news.map((article, index) => (
    <NewsCard
      key={index} // It's better to use a unique identifier like article.id if available
      title={article.title}
      desc={article.description}
      url={article.url}
      urlImage={article.urlToImage}
      // ...other props
    />
  ));


  return (
    <div>
        <div className='search-container'>
            <h3>Search the top headlines</h3>
            <SearchBar
                onSearch={handleSearch}
            />
        </div>
    
        <div className='news-container'>
            {newsCards}
        </div>
    </div>
  )
}

export default LandingPage