import React, { useState, useEffect } from "react";
import axios from "axios";
import { Row, Col } from "reactstrap";

import 'bootstrap/dist/css/bootstrap.min.css';
import NewsCard from "./NewsCard";

const News = () =>{
  const [news, setNews] = useState([]);
  useEffect(() => {
    const getArticles = async () => {
      const res = await axios.get("https://gnews.io/api/v4/search?q=covid&token=c6446612887099182e67f6b63d0581f1");
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
      <NewsCard title={n.title} description={n.description} url={n.url} urlToImage={n.image} />
      </Col>
    ))}
    </Row>
  </div>
  </div>
);
}

export default News;