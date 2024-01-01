import React from 'react'
import './PetsCard.css'

function PetsCard() {
  return (
    <>
    <div className="card-container">
        <div className="card-image">
            <img className="card-image-img" src="https://dummyimage.com/200x200.png/cc0000/ffffff" alt="pet-image" />
        </div>
        <div className="card-details">
            <div className="card-breed">Goldfish</div>
            <div className="card-price">Rs. 9263</div>
        </div>
    </div>
    </>
  )
}

export default PetsCard