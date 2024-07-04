import React from "react";
import './blog.css';
import { Article } from "../../components";
import {blog1, blog2, blog3, blog4, blog5} from './imports';

const Blog = () => {
  const blogsPost = [
    {
      imageURL: blog2,
      datePublished: "Sep 26, 2021",
      heading: "GitHub and Open  AI is the future. Let us explore how it is?",
    },
    {
      imageURL: blog3,
      datePublished: "Jan 26, 2023",
      heading: "Chat and Open  AI is the future. Let us explore.",
    },
    {
      imageURL: blog4,
      datePublished: "Oct 26, 2022",
      heading: "Open  AI's GPT-3 is the future. Let us see how it works?",
    },
    {
      imageURL: blog5,
      datePublished: "Dec 26, 2024",
      heading: "Gemini and Open  AI is the future. Let us dive into its depth",
    },
  ];

  return (
    <div className="gpt3__blog section__padding" id="blog">
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">A lot is happening,<br /> We are blogging about it.</h1>
      </div>

      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container__groupA">
          <Article imageURL={blog1} date="July 01, 2024" heading="GitLab and Open AI is the future. Let us explore how it is?"></Article>     
        </div>

        <div className="gpt3__blog-container__groupB">
          {
            blogsPost.map((element, idx) => (
              <Article imageURL={element.imageURL} date={element.datePublished} heading={element.heading}></Article>
            ))
          }     
        </div>
      </div>
    </div>
  );
}

export default Blog;