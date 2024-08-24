import React from "react";
import { Link } from "react-router-dom";
import { LatestBlogs } from "../../data/BlogData";
import dayjs from "dayjs";
import { useState, useRef } from "react";
import { subscribeToNewsletter } from "../../fetchers";
import { companyDetails } from "../../data/websiteData";

const API_URL = process.env.REACT_APP_API_URL;

const getLatestBlogs = LatestBlogs.slice(0, 3);
const getAllTagsFromBlogs = () => {
  let tags = [];
  LatestBlogs.forEach((blog) => {
    blog.tags.forEach((tag) => {
      tags.push(tag);
    });
  });
  return tags;
};
const getUniqueTags = [...new Set(getAllTagsFromBlogs())];

const Sidebar = () => {
  const form = useRef();

  const [email, setEmail] = useState("");
  const onSuccess = () => {
    setAlert({ success: true, error: false });
    setTimeout(() => {
      setAlert({ success: false, error: false });
    }, 7500);
  };
  const [alert, setAlert] = useState({
    success: false,
    error: false,
  });
  const onError = () => {
    setAlert({ success: false, error: true });
  };
  const handleSubmit = async (e) => {
    setAlert({ success: false, error: false });
    e.preventDefault();
    const data = {
      email,
    };
    console.log(API_URL);
    try {
      const result = await subscribeToNewsletter(data);
      console.log(result);
      if (result.status === 200) {
        console.log("success");
        onSuccess();
      } else {
        console.log("error");
        onError();
      }
    } catch (err) {
      console.log(err);
      onError();
      // onSuccess();
    }
  };

  return (
    <div className='col-lg-3'>
      <aside className='side-bar sticky-top'>
        <div className='widget'>
          <h5 className='widget-title style-1'>Search</h5>
          <div className='search-bx style-1'>
            <form role='search' method='post'>
              <div className='input-group'>
                <input
                  name='text'
                  className='form-control'
                  placeholder='Enter your keywords...'
                  type='text'
                />
                <span className='input-group-btn'>
                  <button
                    type='submit'
                    className='fa fa-search text-primary'
                  ></button>
                </span>
              </div>
            </form>
          </div>
        </div>
        <div className='widget recent-posts-entry'>
          <h5 className='widget-title style-1'>Recent Posts</h5>
          {getLatestBlogs.map((item) => {
            return (
              <>
                <div className='widget-post-bx'>
                  <div className='widget-post clearfix'>
                    <div className='dlab-post-media'>
                      <img src={item.image} width='200' height='143' alt='' />
                    </div>
                    <div className='dlab-post-info'>
                      <div className='dlab-post-meta'>
                        <ul>
                          <li className='post-date'>
                            <strong>{dayjs(item.date).format("DD MMM")}</strong>
                          </li>
                          <li className='post-author'> By {item.uploadedBy}</li>
                        </ul>
                      </div>
                      <div className='dlab-post-header'>
                        <h6 className='post-title'>
                          <Link to={item.link}>{item.title}</Link>
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
        <div className='widget widget-newslatter'>
          <h5 className='widget-title style-1'>Newsletter</h5>
          <div className='news-box'>
            <p>Enter your e-mail and subscribe to our newsletter.</p>
            <form className='dzSubscribe' ref={form} onSubmit={handleSubmit}>
              <div className='dzSubscribeMsg'></div>
              <div className='input-group'>
                <input
                  name='dzEmail'
                  required='required'
                  onChange={(e) => setEmail(e.target.value)}
                  type='email'
                  className='form-control'
                  placeholder='Your Email'
                />
                <button
                  name='submit'
                  value='Submit'
                  type='submit'
                  className='site-button w-100 radius-no'
                >
                  Subscribe Now
                </button>
              </div>
            </form>
          </div>
          {alert.success ? (
            <>
              <div>
                <p
                  style={{
                    marginTop: "1rem",
                    fontSize: "1.2rem",
                    fontWeight: "bold",
                    wordBreak: "break-word",
                  }}
                >
                  Welcome aboard{" "}
                  <span role='img' aria-label='Ship'>
                    🚢
                  </span>
                  <br />
                  {email}
                </p>
              </div>{" "}
            </>
          ) : (
            <></>
          )}

          {alert.error ? (
            <>
              <p
                style={{
                  color: "red",
                }}
              >
                ERROR PLEASE TRY AGAIN !!
                <br />
                email us at{" "}
                <a href={`mailto:${companyDetails.secondaryEmail}`}>
                  {companyDetails.secondaryEmail}
                </a>
              </p>
            </>
          ) : (
            <></>
          )}
        </div>
        <div className='widget widget_gallery gallery-grid-4'>
          <h5 className='widget-title style-1'>Our Gallery</h5>
          <ul id='lightgallery' className='lightgallery'>
            <li>
              <div className='dlab-post-thum dlab-img-effect'>
                <span
                  data-exthumbimage='images/gallery/pic1.jpg'
                  data-src='images/gallery/pic1.jpg'
                  className='check-km'
                  title='Image 1 Title will come here'
                >
                  <img src={require("../../images/gallery/pic1.jpg")} alt='' />
                </span>
              </div>
            </li>
            <li>
              <div className='dlab-post-thum dlab-img-effect'>
                <span
                  data-exthumbimage='images/gallery/pic2.jpg'
                  data-src='images/gallery/pic2.jpg'
                  className='check-km'
                  title='Image 2 Title will come here'
                >
                  <img src={require("../../images/gallery/pic2.jpg")} alt='' />
                </span>
              </div>
            </li>
            <li>
              <div className='dlab-post-thum dlab-img-effect'>
                <span
                  data-exthumbimage='images/gallery/pic3.jpg'
                  data-src='images/gallery/pic3.jpg'
                  className='check-km'
                  title='Image 3 Title will come here'
                >
                  <img src={require("../../images/gallery/pic3.jpg")} alt='' />
                </span>
              </div>
            </li>
            <li>
              <div className='dlab-post-thum dlab-img-effect'>
                <span
                  data-exthumbimage='images/gallery/pic4.jpg'
                  data-src='images/gallery/pic4.jpg'
                  className='check-km'
                  title='Image 4 Title will come here'
                >
                  <img src={require("../../images/gallery/pic4.jpg")} alt='' />
                </span>
              </div>
            </li>
            <li>
              <div className='dlab-post-thum dlab-img-effect'>
                <span
                  data-exthumbimage='images/gallery/pic5.jpg'
                  data-src='images/gallery/pic5.jpg'
                  className='check-km'
                  title='Image 5 Title will come here'
                >
                  <img src={require("../../images/gallery/pic5.jpg")} alt='' />
                </span>
              </div>
            </li>
            <li>
              <div className='dlab-post-thum dlab-img-effect'>
                <span
                  data-exthumbimage='images/gallery/pic6.jpg'
                  data-src='images/gallery/pic6.jpg'
                  className='check-km'
                  title='Image 6 Title will come here'
                >
                  <img src={require("../../images/gallery/pic6.jpg")} alt='' />
                </span>
              </div>
            </li>
            <li>
              <div className='dlab-post-thum dlab-img-effect'>
                <span
                  data-exthumbimage='images/gallery/pic7.jpg'
                  data-src='images/gallery/pic7.jpg'
                  className='check-km'
                  title='Image 7 Title will come here'
                >
                  <img src={require("../../images/gallery/pic7.jpg")} alt='' />
                </span>
              </div>
            </li>
            <li>
              <div className='dlab-post-thum dlab-img-effect'>
                <span
                  data-exthumbimage='images/gallery/pic8.jpg'
                  data-src='images/gallery/pic8.jpg'
                  className='check-km'
                  title='Image 8 Title will come here'
                >
                  <img src={require("../../images/gallery/pic8.jpg")} alt='' />
                </span>
              </div>
            </li>
          </ul>
        </div>
        <div className='widget widget_archive'>
          <h5 className='widget-title style-1'>Categories List</h5>
          <ul>
            <li>
              <Link to={"#"}>Electronic Materials</Link>
            </li>
            <li>
              <Link to={"#"}>Auto Parts</Link>
            </li>
            <li>
              <Link to={"#"}>Building Management</Link>
            </li>
            <li>
              <Link to={"#"}>Power Systems</Link>
            </li>
            <li>
              <Link to={"#"}>Power & Energy</Link>
            </li>
          </ul>
        </div>
        <div className='widget widget-project'>
          <h5 className='widget-title style-1'>Our Project</h5>
          {/* <ProjectSlider5 slideToShow={1}/> */}
        </div>
        <div className='widget widget_tag_cloud radius'>
          <h5 className='widget-title style-1'>Tags</h5>
          <div className='tagcloud'>
            {getUniqueTags.map((item, index) => {
              return (
                <Link
                  style={{
                    //capitilize first letter
                    textTransform: "capitalize",
                  }}
                  key={index}
                  to={"/blog"}
                  params={{ tag: item }}
                >
                  {item}
                </Link>
              );
            })}
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
