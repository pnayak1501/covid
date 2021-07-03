import React from "react"
import "./NewsCard.css"

const NewsCard = ({title, description, url, urlToImage}) =>{
  return(
    <div className="news-item">
      <img src={urlToImage} alt="News Image" className="news-img" />
      <h3><a href={url}>{title}</a></h3>
      <p>{description}</p>
    </div>
  )
}

export default NewsCard;