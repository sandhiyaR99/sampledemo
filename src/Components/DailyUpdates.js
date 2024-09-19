import React, { useEffect, useState } from 'react';

const DailyUpdates = () => {
  const [news, setnews] = useState([]);

  useEffect(() => {
    const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=9aeb2b5e216c48e7b8faf515fcf8e669`;
    fetch(url)
      .then(result => result.json())
      .then(data => setnews(data.articles))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="container my-5">
      <h1 className="text-center text-primary mb-4">Daily News</h1>
      <div className="row justify-content-center">
        {news.map((item, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card h-100 shadow-lg">
              {item.urlToImage ? (
                <img
                  src={item.urlToImage}
                  className="card-img-top"
                  alt="News Thumbnail"
                  style={{ height: "200px", objectFit: "cover" }}
                />
              ) : (
                <div
                  className="card-img-top bg-secondary d-flex align-items-center justify-content-center"
                  style={{ height: "200px" }}
                >
                  <span className="text-light">No Image Available</span>
                </div>
              )}
              <div className="card-body d-flex flex-column">
                <h5 className="card-title text-dark">{item.title}</h5>
                <p className="card-text text-muted">{item.description ? item.description : "No description available."}</p>
                <a href={item.url} className="mt-auto btn btn-outline-primary">
                  Read More
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DailyUpdates;
