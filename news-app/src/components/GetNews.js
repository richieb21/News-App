import React from 'react'

// feed in information to grab from news api
const GetNews = ({}) => {

  const api_key = '91cf390ffa6c465eb8ef1a1edf2fb044';

  //function to fetch news
  const fetchNews = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${api_key}`
    var req = new Request (url)

    let data = await fetch(req)
    let data_json = await data.json()

    return data_json.articles;
  }

  let raw_data = fetchNews();

  console.log(raw_data);

  return (
    <div>GetNews</div>
  )
}

export default GetNews