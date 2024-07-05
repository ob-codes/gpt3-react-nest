import React from "react";
import './article.css';

const Article = ( {imageURL, date, heading } ) => {
  return (
    <div className="gpt3__blog-container__article">
      <div className="gpt3__blog-container__article-image">
        <img src={imageURL} alt="" />
      </div>

      <div className="gpt3__blog-container__article-content">
        <div>
          <p>{date}</p>
          <h3>{heading}</h3>
        </div>
        <p>Read Full Article</p>
      </div>
    </div>
  );
}

export default Article;