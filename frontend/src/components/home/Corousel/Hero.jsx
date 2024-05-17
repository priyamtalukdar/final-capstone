
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./hero.css";

import image1 from "../../images/image1.jpeg";
import image2 from "../../images/image2.jpeg";
import image3 from "../../images/image3.jpeg";
import image4 from "../../images/image3.jpeg";

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <Carousel
            autoPlay
            interval={3000}
            infiniteLoop
            showThumbs={false}
            showStatus={false}
          >
            <div>
              <img src={image1} alt="" />
            </div>
            <div>
              <img src={image2}  alt=""/>
            </div>
            <div>
              <img src={image3} alt="" />
            </div>
            <div>
              <img src={image4}  alt=""/>
            </div>
          </Carousel>
        </div>
      </section>
    </>
  );
};

export default Hero;
