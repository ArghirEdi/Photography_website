import { useState } from "react";
import PhotoCard from "./PhotoCard";
import { FaInstagram } from "react-icons/fa";
import FlickrIcon from "./FlickrIcon";
import ScrollToTopButton from "./ScrollToTopButton";
import PhotoModal from "./PhotoModal";
import "../styles/custom-slick.css";
import Footer from "./Footer";

const photos = [
  { index: 1, path: "src\\assets\\1.jpeg" },
  { index: 3, path: "src\\assets\\3.jpeg" },
  { index: 5, path: "src\\assets\\/5.jpeg" },
  { index: 2, path: "src\\assets\\2.jpeg" },
  { index: 4, path: "src\\assets\\4.jpeg" },
  { index: 6, path: "src\\assets\\6.jpeg" },
  { index: 7, path: "src\\assets\\7.jpeg" },
  { index: 11, path: "src\\assets\\11.jpeg" },
  { index: 9, path: "src\\assets\\9.jpeg" },
  { index: 10, path: "src\\assets\\10.jpeg" },
  { index: 8, path: "src\\assets\\8.jpeg" },
  { index: 12, path: "src\\assets\\12.jpeg" },
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

// gap-6 mx-auto w-full pl-20 pr-20
