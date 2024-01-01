import React from "react";
import PetsCard from "./PetsCard";
import "./PetsList.css";

function PetsList() {
  return (
    <>
      <div className="cardlist-main">
        <div className="cardlist">
          <PetsCard />
        </div>
      </div>
    </>
  );
}

export default PetsList;
