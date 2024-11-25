import { useState } from "react";
import { MapPin, Search, Settings2 } from "lucide-react";
import beer from "./assets/images/deli/beer.png";
import dinner from "./assets/images/deli/dinner.png";
import motorcycle from "./assets/images/deli/motorcycle.png";
import Carousel from "./components/carousel";

import bikanervala from "./assets/images/top-brands/logo/bikanervala.png";
import burger_king from "./assets/images/top-brands/logo/burger_king.png";
import burger_singh from "./assets/images/top-brands/logo/burger_singh.jpg";
import kfc from "./assets/images/top-brands/logo/kfc.png";
import subway from "./assets/images/top-brands/logo/subway.png";

import poulet_sauce_tomate from "./assets/images/top-brands/foods/poulet_sauce_tomate.jpg";

// import pinoz_pizza from "./assets/images/top-brands/logo/pinoz_pizza.png";

function App() {
  const topBrandsLogo = [
    {
      title: "Text",
      image: bikanervala,
    },
    {
      title: "Text",
      image: burger_king,
    },
    {
      title: "Text",
      image: burger_singh,
    },
    {
      title: "Text",
      image: kfc,
    },
    {
      title: "Text",
      image: subway,
    },
    // {
    //   title: "Text",
    //   image: pinoz_pizza,
    // },
  ];

  return (
    <>
      <div className="w-full h-full bg-white ">
        <div className="w-full py-4 ">
          <div className="flex flex-col w-10/12 mx-auto">
            {/* Header */}
            <div className="flex flex-wrap items-center justify-between gap-4">
              <h1 className="text-3xl lg:text-4xl font-bold">Zomato</h1>
              {/* Search Bar */}
              <div className="flex items-center w-full lg:w-3/5 max-w-4xl gap-4 p-2 bg-white shadow-md rounded-lg border">
                <div className="flex items-center w-2/5">
                  <MapPin color="#ff335b" size={30} />
                  <select className="w-full px-2 border-none">
                    <option disabled selected>
                      Pick your favorite Simpson
                    </option>
                    <option>Homer</option>
                    <option>Marge</option>
                    <option>Bart</option>
                    <option>Lisa</option>
                    <option>Maggie</option>
                  </select>
                </div>
                <div className="hidden lg:block lg:divider lg:divider-horizontal"></div>
                <div className="flex items-center w-full">
                  <Search color="#696767" size={30} />
                  <input
                    type="text"
                    placeholder="Rechercher restaurant ou nourriture"
                    className="w-full px-2 border-none focus:outline-none"
                  />
                </div>
              </div>
              {/* Login/Signup */}
              <div className="flex items-center gap-4">
                <span className="text-xl lg:text-2xl text-gray-500 cursor-pointer">
                  Log in
                </span>
                <span className="text-xl lg:text-2xl text-gray-500 cursor-pointer">
                  Sign up
                </span>
              </div>
            </div>
            {/* Breadcrumb */}
            <ul className="py-5 flex flex-wrap items-center font-light text-gray-500">
              <li>
                <a href="#" className="hover:text-orange-400 transition-colors">
                  Home
                </a>
                <span className="px-1">/</span>
              </li>
              <li>
                <a href="#" className="hover:text-orange-400 transition-colors">
                  India
                </a>
                <span className="px-1">/</span>
              </li>
              <li>
                <a href="#" className="hover:text-orange-400 transition-colors">
                  Restaurants
                </a>
              </li>
            </ul>

            {/* Category Buttons */}
            <div className="flex flex-wrap  gap-4 py-5">
              <div className="flex items-center px-6 cursor-pointer">
                <div className="p-3 bg-orange-100 rounded-full">
                  <img src={dinner} alt="dinner" className="w-12 h-12" />
                </div>
                <h3 className="text-xl lg:text-2xl text-gray-500 px-3">
                  Dining out
                </h3>
              </div>
              <div className="flex items-center px-6 cursor-pointer">
                <div className="p-3 bg-green-100 rounded-full">
                  <img src={motorcycle} alt="delivery" className="w-12 h-12" />
                </div>
                <h3 className="text-xl lg:text-2xl text-gray-500 px-3">
                  Delivery
                </h3>
              </div>
              <div className="flex items-center px-6 cursor-pointer">
                <div className="p-3 bg-gray-100 rounded-full">
                  <img src={beer} alt="nightlife" className="w-12 h-12" />
                </div>
                <h3 className="text-xl lg:text-2xl text-gray-500 px-3">
                  Nightlife
                </h3>
              </div>
            </div>
          </div>
          {/* Divider */}
          <div className="divider"></div>

          {/* Filter Buttons */}
          <div className="w-10/12 mx-auto py-3 flex flex-wrap  gap-4">
            <button className="p-3 px-6 border rounded-lg hover:bg-gray-100 transition-colors text-gray-500 flex items-center gap-2">
              <Settings2 color="#696767" />
              <span>Filter</span>
            </button>
            <button className="p-3 px-6 border rounded-lg hover:bg-gray-100 transition-colors text-gray-500">
              Pure Veg
            </button>
            <button className="p-3 px-6 border rounded-lg hover:bg-gray-100 transition-colors text-gray-500">
              Cuisine
            </button>
          </div>
        </div>
        {/* Inspiration Section */}
        <div className="w-full py-12 bg-slate-50">
          <div className="w-11/12 mx-auto">
            <h1 className="text-3xl lg:text-4xl font-medium mb-6">
              Inspiration for your first order
            </h1>
            <Carousel />
          </div>
        </div>
        {/* Top Brands */}
        <div className="w-11/12 mx-auto py-10">
          <h1 className="text-3xl lg:text-4xl font-medium mb-6">
            Top brands for you
          </h1>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {topBrandsLogo.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center cursor-pointer"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-24 h-24 lg:w-40 lg:h-40 object-cover rounded-full shadow-lg"
                />
                <p className="text-lg mt-2">{item.title}</p>
                <p className="text-sm text-gray-500">24 min</p>
              </div>
            ))}
          </div>
            <CardGrid/>
        </div>
        <div className="w-full mb-40 flex items-center justify-center gap-32">
          <h1 className="font-medium text-4xl">End of search results</h1>
          <h1 className="font-medium text-4xl">End of search results</h1>
        </div>
        <div className="w-full h-full">
          <div className="w-full  py-10 bg-slate-50">
            <div className="w-10/12 mx-auto">
              <h1 className="text-4xl font-medium ">Explore options near me</h1>
              <select className="mt-10 select select-bordered select-lg w-full max-w-full">
                =<option>Large Tomato</option>
              </select>
              <select className="mt-10 select select-bordered select-lg w-full max-w-full">
                =<option>Large Tomato</option>
              </select>
              <select className="mt-10 select select-bordered select-lg w-full max-w-full">
                =<option>Large Tomato</option>
              </select>
            </div>
          </div>
          <div className="w-full  py-10 bg-slate-100">
            <div className="w-10/12 mx-auto">
              <div className="mt-10 flex items-center justify-between">
                <h1 className="text-4xl font-bold ">Zomato</h1>
                <div className="space-x-10">
                  <select className="select select-bordered w-full max-w-[150px]">
                    <option disabled selected>
                      Who shot first?
                    </option>
                    <option>Han Solo</option>
                    <option>Greedo</option>
                  </select>
                  <select className="select select-bordered w-full max-w-[150px]">
                    <option disabled selected>
                      Who shot first?
                    </option>
                    <option>Han Solo</option>
                    <option>Greedo</option>
                  </select>
                </div>
              </div>
              <div className="py-10 grid sm:grid-cols-1 lg:grid-cols-5 gap-8  ">
                <div className="flex flex-col  leading-8 text-xl text-gray-500 font-light ">
                  <p className="font-semibold text-black">Lorem ipsum, </p>
                  <p>Lorem ipsum, </p>
                  <p>Lorem ipsum, </p>
                  <p>Lorem ipsum, </p>
                  <p>Lorem ipsum, </p>
                  <p>Lorem ipsum, </p>
                </div>
                <div className="flex flex-col  leading-8 text-xl text-gray-500 font-light">
                  <p className="font-semibold text-black">Lorem ipsum, </p>
                  <p>Lorem ipsum, </p>
                  <p>Lorem ipsum, </p>
                  <p>Lorem ipsum, </p>
                  <p>Lorem ipsum, </p>
                  <p>Lorem ipsum, </p>
                </div>
                <div className="flex flex-col  leading-8 text-xl text-gray-500 font-light">
                  <p className="font-semibold text-black">Lorem ipsum, </p>
                  <p>Lorem ipsum, </p>
                  <p>Lorem ipsum, </p>
                  <p>Lorem ipsum, </p>
                  <p>Lorem ipsum, </p>
                  <p>Lorem ipsum, </p>
                </div>
                <div className="flex flex-col  leading-8 text-xl text-gray-500 font-light">
                  <p className="font-semibold text-black">Lorem ipsum, </p>
                  <p>Lorem ipsum, </p>
                  <p>Lorem ipsum, </p>
                  <p>Lorem ipsum, </p>
                  <p>Lorem ipsum, </p>
                  <p>Lorem ipsum, </p>
                </div>
                <div className="flex flex-col  leading-8 text-xl text-gray-500 font-light">
                  <p className="font-semibold text-black">Lorem ipsum, </p>
                  <p>Lorem ipsum, </p>
                  <p>Lorem ipsum, </p>
                  <p>Lorem ipsum, </p>
                  <p>Lorem ipsum, </p>
                  <p>Lorem ipsum, </p>
                </div>
              </div>
              <div className="divider"></div>
              <p className="mt-10 text-sm text-gray-600 ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                quibusdam atque quos iure. Doloribus accusantium vel sunt dolore
                id, beatae minus perferendis, repudiandae rem obcaecati expedita
                non, molestias reprehenderit veniam.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const cardsData = Array(10)
  .fill(null)
  .map((_, index) => ({
    id: index + 1,
    image: poulet_sauce_tomate, // Remplace par le chemin réel
    name: `Samosa Singh ${index + 1}`,
    rating: (Math.random() * 5).toFixed(1), // Génère une note aléatoire
    description: "Lorem ipsum dolor sit amet",
    time: `${Math.floor(Math.random() * 60) + 20} min`, // Temps aléatoire entre 20 et 80 min
  }));

export const CardGrid = () => {
  return (
    <div className="py-10 grid grid-cols-1 lg:grid-cols-3 gap-10">
      {cardsData.map((card) => (
        <div
          key={card.id}
          className="flex flex-col rounded-lg h-full p-3 hover:shadow-xl hover:border transition-all cursor-pointer"
        >
          <div className="relative">
            <img
              className="w-full h-[300px] rounded-xl object-cover"
              src={card.image}
              alt={card.name}
            />
            <span></span>
          </div>
          <div className="flex items-center justify-between mt-2">
            <p className="text-xl font-medium">{card.name}</p>
            <div className="bg-green-700 text-white font-bold px-3 rounded-md flex items-center justify-center">
              <span>{card.rating}</span>
              <div className="rating">
                <input
                  type="radio"
                  name={`rating-${card.id}`}
                  className="mask mask-star bg-white w-3"
                  defaultChecked
                />
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <p className="truncate text-gray-400 text-lg">{card.description}</p>
            <p className="truncate text-gray-400 text-lg">{card.description}</p>
          </div>
          <p className="font-medium mt-2 text-end">{card.time}</p>
        </div>
      ))}
    </div>
  );
};

export default App;
