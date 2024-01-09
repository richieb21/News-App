import React, { useState } from 'react'
import SearchBar from './SearchBar'
import NewsCard from './NewsCard';

const Company = () => {

  const [news, setNews] = useState([]);
  const [score, setScore] = useState(0);
  const [display, setDisplay] = useState('Enter a company to analyze');
  const [searched, setSearched] = useState(false);

  const api_key = '91cf390ffa6c465eb8ef1a1edf2fb044';
  
  const handleSearch = (search) => {
    const encodedSearch = encodeURIComponent(search);
    const url = `https://newsapi.org/v2/everything?q=${encodedSearch}&apiKey=${api_key}`;
    
    var Sentiment = require('sentiment');
    var sentiment = new Sentiment();

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

    setDisplay((calculateAvgScore(news) > 0) ? 'Positive' : 'Negative')
    setSearched(true);
  }

  let s = calculateAvgScore(news);
  console.log((s > 0) ? true : false)

  console.log(news)
  const NewsCards = createNewsCards(news);

  return (
    <div>
        <div className='search-container'>
            <h2>Company's Media Sentiment</h2>
            <SearchBar
                onSearch={handleSearch}
            />
        </div>

        <div className='text-container'>
            <p className={(searched ? 'big' : 'small')}>
                {display}
            </p>
        </div>

        <div className='news-container'>
            {NewsCards}
        </div>
    </div>
  )
}

const calculateAvgScore = (news) => {

    var Sentiment = require('sentiment');
    var sentiment = new Sentiment();

    let x = 0

    news.forEach(item => {
        var result = sentiment.analyze(item.description)

        x = x + result.comparative
    })

    return x / news.length;
}

const createNewsCards = (news) => {

    var Sentiment = require('sentiment')
    var sentiment = new Sentiment();

    const newsCards = news.map((article, index) => (
        <NewsCard
          key={index} // It's better to use a unique identifier like article.id if available
          title={article.title}
          desc={article.description}
          url={article.url}
          urlImage={article.urlToImage}
          color={(sentiment.analyze(article.description).comparative > 0) ? 'green' : 'red'}
        />
    ));

    return newsCards
}

export default Company