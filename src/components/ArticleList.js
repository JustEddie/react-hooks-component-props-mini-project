import React from "react";
import Article from "./Article";

function ArticleList({ posts }) {
  const postElements = posts.map((element) => {
    return <Article key={element.id} 
    title={element.title}
    date={element.date}
    preview={element.preview}
    minutes={element.minutes}
    
    />;
  });
  return <main>{postElements}</main>;
}

export default ArticleList;
