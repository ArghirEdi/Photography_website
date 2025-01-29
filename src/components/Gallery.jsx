import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/custom-slick.css";
import { NextArrow, PrevArrow } from "./CustomArrows";
import ScrollToTopButton from "./ScrollToTopButton";
import Footer from "./Footer";

const naturePhotos = [
  "src/assets/gallery-nature-1.jpeg",
  "src/assets/gallery-nature-2.jpeg",
  "src/assets/gallery-nature-3.jpeg",
  // Add more nature photos here
];

const portraitPhotos = [
  "src/assets/gallery-portrait-1.jpeg",
  "src/assets/gallery-portrait-2.jpeg",
  "src/assets/gallery-portrait-3.jpeg",
  "src/assets/gallery-portrait-4.jpeg",
  // Add more portrait photos here
];

const carPhotos = [
  "src/assets/gallery-car-1.jpeg",
  "src/assets/gallery-car-2.jpeg",
  "src/assets/gallery-car-3.jpeg",
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
