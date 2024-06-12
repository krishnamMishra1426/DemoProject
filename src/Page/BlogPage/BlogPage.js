import React from 'react';
import './BlogPage.css';

const BlogPage = () => {
  return (
    <div className="blog-page ">
      <div className="blog-header mt-3 ">
        <p className="header-text">
          There are many variations of passages of Lorem Ipsum available, but <br/> the majority have suffered alteration in some form, by injected <br/> humour, or randomised words
        </p>
        <h2 className="blog-page-title">Our work</h2>
        <p className="blog-page-subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div className="blog-container">
        {Array.from({ length: 3 }).map((_, index) => (
          <div className="blog-card" key={index}>
            <div className="blog-image-placeholder">
            <img src="../../assests/image/blog.png" alt="blog" />
            </div>
            <div className="blog-content">
              <h3 className="blog-title">Blog title heading will go here</h3>
              <p className="blog-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
              </p>
              <diV className="blog-text">
              <p className="blog-organizer">
                Organizer:<br />
                Venue - Zoom
              </p>
              <div className="arrow-icon"><div className='icon1'>↗</div></div>
              </diV>
            </div>
          </div>
        ))}
      </div>
      <button className="view-all-button ">View all</button>
    </div>
  );
}

export default BlogPage;
