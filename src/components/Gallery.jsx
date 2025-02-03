import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/custom-slick.css";
import { NextArrow, PrevArrow } from "./CustomArrows";
import ScrollToTopButton from "./ScrollToTopButton";
import Footer from "./Footer";

import naturePhoto1 from "../assets/gallery-nature-1.jpeg";
import naturePhoto2 from "../assets/gallery-nature-2.jpeg";
import naturePhoto3 from "../assets/gallery-nature-3.jpeg";
import portraitPhoto1 from "../assets/gallery-portrait-1.jpeg";
import portraitPhoto2 from "../assets/gallery-portrait-2.jpeg";
import portraitPhoto3 from "../assets/gallery-portrait-3.jpeg";
import portraitPhoto4 from "../assets/gallery-portrait-4.jpeg";
import carPhoto1 from "../assets/gallery-car-1.jpeg";
import carPhoto2 from "../assets/gallery-car-2.jpeg";
import carPhoto3 from "../assets/gallery-car-3.jpeg";

const naturePhotos = [
  naturePhoto1,
  naturePhoto2,
  naturePhoto3,
  // Add more nature photos here
];

const portraitPhotos = [
  portraitPhoto1,
  portraitPhoto2,
  portraitPhoto3,
  portraitPhoto4,
  // Add more portrait photos here
];

const carPhotos = [
  carPhoto1,
  carPhoto2,
  carPhoto3,
  // Add more car photos here
];

const Gallery = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="container mx-auto p-4">
      <div className="mb-8 mx-2">
        <h2 className="text-3xl font-bold mb-4 text-black dark:text-white">
          Portraits
        </h2>
        <div className="border border-black dark:border-white rounded-lg p-2">
          <Slider {...settings}>
            {portraitPhotos.map((photo, index) => (
              <div key={index} className="h-144">
                <img
                  src={photo}
                  alt={`Portrait ${index + 1}`}
                  className="w-full h-full object-contain rounded-lg shadow-lg"
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <div className="mb-8 mx-2">
        <h2 className="text-3xl font-bold mb-4 text-black dark:text-white">
          Nature
        </h2>
        <div className="border border-black dark:border-white rounded-lg p-2">
          <Slider {...settings}>
            {naturePhotos.map((photo, index) => (
              <div key={index} className="h-144">
                <img
                  src={photo}
                  alt={`Nature ${index + 1}`}
                  className="w-full h-full object-contain rounded-lg shadow-lg"
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <div className="mb-8 mx-2">
        <h2 className="text-3xl font-bold mb-4 text-black dark:text-white">
          Cars
        </h2>
        <div className="border border-black dark:border-white rounded-lg p-2">
          <Slider {...settings}>
            {carPhotos.map((photo, index) => (
              <div key={index} className="h-144">
                <img
                  src={photo}
                  alt={`Car ${index + 1}`}
                  className="w-full h-full object-contain rounded-lg shadow-lg"
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default Gallery;
