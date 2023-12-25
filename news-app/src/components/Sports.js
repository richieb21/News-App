import React, { useState, useEffect } from 'react'
import NewsCard from './NewsCard'
import CountrySelect from './CountrySelect';

const Sports = () => {

    const [news, setNews] = useState([]);
    const [country, setCountry] = useState("");

    const handleCountryChange = (event) => {
        setCountry(event.target.value);
    }

    const api_key = '91cf390ffa6c465eb8ef1a1edf2fb044';
    const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=sports&apiKey=${api_key}`
  
    useEffect(() => {
    if (country){
        fetch(url)
        .then(response => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json(); // Return the promise so the next .then() receives the resolved data
        })
        .then(data => {
          const filteredArticles = data.articles.filter(article => article.description !== null && article.urlToImage !== null);
          setNews(filteredArticles); // Assuming the data object has an 'articles' property
        })
        .catch(error => console.error('Error fetching data:', error));
    }
    }, [country]);
  
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
    <div className='page-container'>
        <CountrySelect
                selectedCountry={country}
                onCountryChange={handleCountryChange}
            />
        <div className='news-container'>
            {newsCards}
        </div>
    </div>
  )
}

export default Sports