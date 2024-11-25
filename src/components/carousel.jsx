import React, { useState } from "react";
import biryani from "../assets/images/inspiration/biryani.jpg";
import cake from "../assets/images/inspiration/cake.jpg";
import chicken from "../assets/images/inspiration/chicken.jpg";
import chole_Bhature from "../assets/images/inspiration/chole_Bhature.jpg";
import cuisine_indienne from "../assets/images/inspiration/cuisine_indienne.jpg";
import hamburger from "../assets/images/inspiration/hamburger.jpg";
import noodles from "../assets/images/inspiration/noodles.jpg";
import pizza from "../assets/images/inspiration/pizza.jpg";
import plat_viande from "../assets/images/inspiration/plat_viande.jpg";
import rice from "../assets/images/inspiration/plat_viande.jpg";
import rolls from "../assets/images/inspiration/rolls.jpg";
import thali from "../assets/images/inspiration/thali.jpg";
import veg_meal from "../assets/images/inspiration/veg_meal.jpg";

const Carousel = () => {
  const images = [
    biryani,
    cake,
    chicken,
    chole_Bhature,
    cuisine_indienne,
    hamburger,
    noodles,
    pizza,
    plat_viande,
    rice,
    rolls,
    thali,
    veg_meal,
  ];

  const inspirations = [
    {
      title: "Biryani",
      image: biryani,
    },
    {
      title: "Cake",
      image: cake,
    },
    {
      title: "Chicken",
      image: chicken,
    },
    {
      title: "Chole ureBhat",
      image: chole_Bhature,
    },
    {
      title: "Cuisine indienne",
      image: cuisine_indienne,
    },
    {
      title: "Burger",
      image: hamburger,
    },
    {
      title: "Noodles",
      image: noodles,
    },
    {
        title: "Pzza",
        image: pizza,
      },
      {
        title: "Plat de viande",
        image: plat_viande,
      },
      {
        title: "Riz",
        image: rice,
      },
      {
        title: "Rolls",
        image: rolls,
      },
      {
        title: "Thali",
        image: thali,
      },
      {
        title: "Veg meal",
        image: veg_meal,
      },

  ];

  const [startIndex, setStartIndex] = useState(0); // Index du premier élément visible
  const visibleImages = 6; // Nombre d'images visibles à la fois

  // Fonction pour aller à l'image suivante
  const handleNext = () => {
    if (startIndex + visibleImages < images.length) {
      setStartIndex(startIndex + 1);
    }
  };

  // Fonction pour revenir à l'image précédente
  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  return (
    <div className="mt-10 relative w-full overflow-hidden ">
      {/* Conteneur des images */}
      <div className="flex">
        {inspirations
          .slice(startIndex, startIndex + visibleImages)
          .map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center w-1/6  px-2  cursor-pointer" // Divise en 6 colonnes égales
            >
              <img
                src={item.image}
                alt={`Slide ${startIndex + index + 1}`}
                className="w-44 h-44 object-cover rounded-full shadow-xl"
              />
              <p className="text-2xl mt-3">{item.title}</p>
            </div>
          ))}
      </div>

      {/* Flèche gauche */}
      {startIndex > 0 && (
        <button
          onClick={handlePrev}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-4 rounded-full shadow-lg hover:bg-gray-100 transition-all"
        >
          ❮
        </button>
      )}

      {/* Flèche droite */}
      {startIndex + visibleImages < images.length && (
        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-4 rounded-full shadow-lg hover:bg-gray-100 transition-all"
        >
          ❯
        </button>
      )}
    </div>
  );
};

export default Carousel;
