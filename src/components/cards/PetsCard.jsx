import React from 'react'
import './PetsCard.css'

function PetsCard(props) {
  return (
    <>
    <div className="card-container">
        <div className="card-image">
            <img className="card-image-img" src={props.image} alt="pet-image" />
        </div>
        <div className="card-details">
            <div className="card-breed">{props.breed}</div>
            <div className="card-price">Rs. {props.price}</div>
        </div>
    </div>
    </>
  )
}

export default PetsCard