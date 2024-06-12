import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Main.css';

const Main = () => {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <div className="carousel-image-container">
          <img className="d-block w-100" src="../../assests/image/survey1.jpg" alt="First slide"/>
          <div className="carousel-caption-box">
            <h3>Sustainable Development</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <div className="carousel-image-container">
          <img className="d-block w-100" src="../../assests/image/survey1.jpg" alt="Second slide"/>
          <div className="carousel-caption-box">
            <h3>Sustainable Development</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="carousel-image-container">
          <img className="d-block w-100" src="../../assests/image/survey1.jpg" alt="Third slide"/>
          <div className="carousel-caption-box">
            <h3>Sustainable Development</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default Main;
