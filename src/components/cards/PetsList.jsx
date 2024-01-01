import React, { useState } from "react";
import PetsCard from "./PetsCard";
// import useFetchApi from "./hooks/useFetchApi";
import "./PetsList.css";
import useFetchApi from "../hooks/useFetchApi.jsx";

let original_pets = [];

function PetsList() {
  const { data: pets, setUrl } = useFetchApi("http://localhost:3000/pets");

  const itemsPerPage = 12;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(pets.length / itemsPerPage);

  const shuffleArray = (array) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  };

  return (
    <>
      <div className="select-category">

        <div className="select-category-main">
          <img className="select-category-img" src="./bird-category.jpg" alt="" />
          <button className="select-category-btn" onClick={() => setUrl("http://localhost:3000/pets")}>All</button>
        </div>

        <div className="select-category-main">
          <img className="select-category-img" src="./cat-category.jpg" alt="" />
          <button className="select-category-btn" onClick={() => setUrl("http://localhost:3000/pets?type=Cat")}>Cat</button>
        </div>

        <div className="select-category-main">
          <img className="select-category-img" src="./dog-category.jpg" alt="" />
          <button className="select-category-btn" onClick={() => setUrl("http://localhost:3000/pets?type=Dog")}>Dog</button>
        </div>

        <div className="select-category-main">
          <img className="select-category-img" src="./bird-category.jpg" alt="" />
          <button className="select-category-btn" onClick={() => setUrl("http://localhost:3000/pets?type=Bird")}>Bird</button>
        </div>

        <div className="select-category-main">
          <img className="select-category-img" src="./fish-category.jpg" alt="" />
          <button className="select-category-btn" onClick={() => setUrl("http://localhost:3000/pets?type=Fish")}>Fish</button>
        </div>


      </div>

      <div className="cardlist-main">
        <div className="cardlist">
          {shuffleArray(pets)
            .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
            .map((pet) => (
              <PetsCard key={pet.id} {...pet} />
            ))}
        </div>
      </div>
    </>
  );
}

export default PetsList;