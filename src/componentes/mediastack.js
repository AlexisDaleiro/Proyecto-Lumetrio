import React, { useState, useEffect } from "react";

function GNews() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const API_KEY = "84ac39bff3c0427d82246680ca3f575e";
    const API_URL = `https://gnews.io/api/v4/search?q=technology&token=${API_KEY}`;

    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => setNews(data.articles));
  }, []);

  return (
    <div className="API">
      <h1>Noticias</h1>
      {news.length > 0 ? (
        <ul className="news-container">
          {news &&
            news.map((article, index) => (
              <li key={index} className="news-item">
                <img src={article.image} alt={article.title} />
                <h2>{article.title}</h2>
                <p>{article.description}</p>
                <p>{article.source.name}</p>
                <p>{article.url}</p>
                <p>{article.publishedAt}</p>
              </li>
            ))}
        </ul>
      ) : (
        <p>No se encontraron noticias</p>
      )}
    </div>
  );
}

export default GNews;
