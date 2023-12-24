import React from 'react'

const NewsCard = ({title, desc, urlImage, url}) => {
  return (
    <div className="card">
        <div className='img-container'>
          <img src={urlImage} class="card-img-top" alt="..."/>
        </div>
        <div>
            <div className='text-body'>
                <h5>{title}</h5>
                <p>{desc}</p>
            </div>
        
            <div className='a-button'>
                <a href={url} class="btn btn-primary">TO SOURCE</a>
            </div>
        </div>
    </div>
  )
}

export default NewsCard