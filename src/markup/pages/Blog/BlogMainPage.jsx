import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { LatestBlogs } from "data/BlogData";
import Sidebar from "markup/element/sidebar";
import dayjs from "dayjs";
import "./pagination.css";
import { useParams } from "react-router-dom";
import ReactPaginate from "react-paginate";
const bg = require("images/banner/bnr1.jpg");
const Post = ({ currentItems }) => {
  return (
    <>
      {currentItems?.map((item) => {
        return (
          <>
            <div className='blog-post blog-md clearfix'>
              <div className='dlab-post-media dlab-img-effect zoom-slow'>
                <Link to={item.link}>
                  <img src={item.image} alt='' />
                </Link>
              </div>
              <div className='dlab-post-info'>
                <div className='dlab-post-meta'>
                  <ul>
                    <li className='post-date'>
                      <strong>{dayjs(item.date).format("DD MMM")}</strong>
                    </li>
                    <li className='post-author'>By {item.uploadedBy}</li>
                  </ul>
                </div>
                <div className='dlab-post-title'>
                  <h4 className='post-title'>
                    <Link to={item.link}>{item.title}</Link>
                  </h4>
                </div>
                <div className='dlab-post-text'>
                  <p>{item.shortDescription}</p>
                </div>
                <div className='dlab-post-readmore'>
                  <Link
                    to={item.link}
                    title='READ MORE'
                    rel='bookmark'
                    className='site-button'
                  >
                    READ MORE
                    <i className='ti-arrow-right'></i>
                  </Link>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

const BlogMainPage = () => {
  // get tags from url
  const { tag } = useParams();
  // get all blogs
  console.log(tag);

  const items = LatestBlogs;
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 6;
  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };
  return (
    <>
      <div className='page-content bg-white'>
        <div className='row'>
          <div>
            <Post currentItems={currentItems} />

            <div

            // className='pagination-bx clearfix text-center'
            >
              <ReactPaginate
                activeClassName={"item active "}
                breakClassName={"item break-me "}
                breakLabel={"..."}
                containerClassName={"pagination"}
                disabledClassName={"disabled-page"}
                marginPagesDisplayed={2}
                nextClassName={"item next"}
                pageCount={pageCount}
                pageClassName={"item pagination-page "}
                pageRangeDisplayed={3}
                previousClassName={"item previous"}
                nextLabel={
                  <div>
                    Next <i className='ti-arrow-right'></i>
                  </div>
                }
                onPageChange={handlePageClick}
                previousLabel={
                  <div>
                    <i className='ti-arrow-left'></i> Prev
                  </div>
                }
                renderOnZeroPageCount={null}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default BlogMainPage;
