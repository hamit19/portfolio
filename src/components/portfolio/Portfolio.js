import React from "react";

import chatWebApp from "../../assets/images/chat-we-app.png";
import cryptoApp from "../../assets/images/cryptoApp.png";
import searchInP from "../../assets/images/searchInP.png";
import inventoryJs from "../../assets/images/inventoryJs.jpg";
import shoppingCardModal from "../../assets/images/shoppingCardModal.jpg";
import shoppingCart from "../../assets/images/shoppingCart.jpg";
import linkedInClone from "../../assets/images/linkedInClone.png";
import tourismShoe from "../../assets/images/tourismShoe.jpg";
import TrainingWebsiteTemplate from "../../assets/images/TrainingWebsiteTemplate.jpg";
import ImageCard from "../imageCard/ImageCard";

function Portfolio() {
  const images = [
    {
      id: 1,
      imageSource: chatWebApp,
      alt: "portfolio-image",
      link: "https://hamid-hassani-react-developers.netlify.app/",
    },
    {
      id: 2,
      imageSource: cryptoApp,
      alt: "portfolio-image",
      link: "https://hamid-crypto-react-app.netlify.app/",
    },
    {
      id: 3,
      imageSource: searchInP,
      alt: "portfolio-image",
      link: "/",
    },
    {
      id: 4,
      imageSource: inventoryJs,
      alt: "portfolio-image",
      link: "https://inventory-mini-project-hamid-hassani.netlify.app/",
    },
    {
      id: 5,
      imageSource: shoppingCardModal,
      alt: "portfolio-image",
      link: "https://shopping-cart-hamid-hassani.netlify.app/",
    },
    {
      id: 6,
      imageSource: shoppingCart,
      alt: "portfolio-image",
      link: "https://shopping-cart-hamid-hassani.netlify.app/",
    },
    {
      id: 7,
      imageSource: linkedInClone,
      alt: "portfolio-image",
      link: "https://linkedin-a20c8.web.app/",
    },
    {
      id: 8,
      imageSource: tourismShoe,
      alt: "portfolio-image",
      link: "https://tourism-sho.netlify.app/",
    },
    {
      id: 9,
      imageSource: TrainingWebsiteTemplate,
      alt: "portfolio-image",
      link: "https://html5css3scss.netlify.app/",
    },
  ];

  const renderImages = () => {
    return images.map((img) => <ImageCard img={img} key={img.id} />);
  };

  return (
    <div id="portfolio" className="px-4 pb-32 bt-4">
      <h2 className="mb-12 text-2xl text-center text-gray-50 font-lg md:text-3xl lg:font-xl ">
        My Portfolio
      </h2>
      <div className="grid grid-cols-custom-auto ">{renderImages()}</div>
    </div>
  );
}

export default Portfolio;
