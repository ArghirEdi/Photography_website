import { useState } from "react";
import PhotoCard from "./PhotoCard";
import { FaInstagram } from "react-icons/fa";
import FlickrIcon from "./FlickrIcon";
import ScrollToTopButton from "./ScrollToTopButton";
import PhotoModal from "./PhotoModal";
import "../styles/custom-slick.css";
import Footer from "./Footer";

import photo1 from "../assets/1.jpeg";
import photo2 from "../assets/2.jpeg";
import photo3 from "../assets/3.jpeg";
import photo4 from "../assets/4.jpeg";
import photo5 from "../assets/5.jpeg";
import photo6 from "../assets/6.jpeg";
import photo7 from "../assets/7.jpeg";
import photo8 from "../assets/8.jpeg";
import photo9 from "../assets/9.jpeg";
import photo10 from "../assets/10.jpeg";
import photo11 from "../assets/11.jpeg";
import photo12 from "../assets/12.jpeg";

const photos = [
  { index: 1, path: photo1 },
  { index: 3, path: photo3 },
  { index: 5, path: photo5 },
  { index: 2, path: photo2 },
  { index: 4, path: photo4 },
  { index: 6, path: photo6 },
  { index: 7, path: photo7 },
  { index: 11, path: photo11 },
  { index: 9, path: photo9 },
  { index: 10, path: photo10 },
  { index: 8, path: photo8 },
  { index: 12, path: photo12 },
];

function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  const openModal = (index) => {
    setCurrentPhotoIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const showNextPhoto = () => {
    setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % photos.length);
  };

  const showPrevPhoto = () => {
    setCurrentPhotoIndex((prevIndex) =>
      prevIndex === 0 ? photos.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-5xl font-bold mb-16 text-center dark:text-white">
        Recent Work
      </h1>
      <div className="flex justify-between">
        <div className="fixed left-0 top-1/2 transform -translate-y-1/2"></div>
        <div className="grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 py-6 px-16 gap-4">
          {photos.map((photo, index) => (
            <PhotoCard
              onClick={() => openModal(index)}
              key={index}
              path={photo.path}
            />
          ))}
        </div>

        <div className="fixed right-0 top-1/2 transform -translate-y-1/2 pr-7 flex flex-col items-center space-y-4">
          <a
            href="https://www.instagram.com/arghir_raul/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="text-4xl text-red-500 hover:text-red-600" />
          </a>
          <a
            href="https://www.flickr.com/photos/198618895@N07/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FlickrIcon />
          </a>
        </div>
      </div>
      <Footer />
      <ScrollToTopButton />
      <PhotoModal
        isOpen={isModalOpen}
        photo={photos[currentPhotoIndex]}
        onClose={closeModal}
        onNext={showNextPhoto}
        onPrev={showPrevPhoto}
      />
    </div>
  );
}

export default Home;
