import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import image1 from './../static/image1.jpg'
import image2 from './../static/image2.jpg'
import image3 from './../static/image3.jpg'
import image4 from './../static/image4.jpg'
import image5 from './../static/image5.jpg'
import image6 from './../static/image6.jpg'
import './body.css'


export default function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <div className='item'>
        <img
          className="d-sm-block w-100"
          src={image1}
          alt="First slide"
        />
        </div>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className='item'>
        <img
          className="d-sm-block w-100"
          src={image2}
          alt="Second slide"
        />
        </div>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className='item'>
        <img
          className="d-block w-100"
          src={image3}
          alt="Second slide"
        />
        </div>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className='item'>
        <img
          className="d-block w-100"
          src={image4}
          alt="Second slide"
        />
        </div>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className='item'>
        <img
          className="d-block w-100"
          src={image5}
          alt="Second slide"
        />
        </div>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className='item'>
        <img
          className="d-sm-block w-100"
          src={image6}
          alt="Second slide"
        />
        </div>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

