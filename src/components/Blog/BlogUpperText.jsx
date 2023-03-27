import React from "react";
import dayjs from "dayjs";
import { Link } from "react-router-dom";
const BlogUpperText = ({ item }) => {
  return (
    <div className='dlab-post-meta'>
      <ul>
        <li className='post-date'>{dayjs(item.date).format("DD MMM")}</li>
        <li className='post-author'>{item.uploadedBy}</li>
      </ul>
      <div className='dlab-post-title '>
        <h1 className='post-title m-t0'>
          <Link to={item.link}>{item.title}</Link>
        </h1>
      </div>
      <div className='dlab-post-media dlab-img-effect zoom-slow'>
        <Link to={item.link}>
          <img src={item.image} alt='' />
        </Link>
      </div>
    </div>
  );
};

export default BlogUpperText;
