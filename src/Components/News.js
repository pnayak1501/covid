import React, { useState, useEffect } from "react";
import axios from "axios";
import { Row, Col } from "reactstrap";

import 'bootstrap/dist/css/bootstrap.min.css';
import NewsCard from "./NewsCard";

const News = () =>{
  const [news, setNews] = useState([]);
  useEffect(() => {
    const getArticles = async () => {
      const res = await axios.get("https://newsapi.org/v2/everything?q=covid&from=2021-07-01&sortBy=publishedAt&apiKey=fc78b843553d4413a4b36654a6619c7a");
      setNews(res.data.articles);
    };
    getArticles();
  }, []);

return (
  <div className="container">
  <div className="jumbotron">
   <div className="container" style={{textAlign:"center"}}>
    <h1 className="display-4" style={{color:"#24292e"}}> Find the latest Covid News! </h1>      
  </div>
  </div>
  <div>
    <Row>
    {news.map(n => (
      <Col>
      <NewsCard title={n.title} description={n.description} url={n.url} urlToImage={n.urlToImage} />
      </Col>
    ))}
    </Row>
  </div>
  </div>
);
}

export default News;