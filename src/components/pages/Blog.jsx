import React, { useState, useEffect } from "react";

function Blog() {
  const [petsData, setPetsData] = useState([]);
  const [formData, setFormData] = useState({
    pet_name: "",
    type: "",
    breed: "",
    age: 0,
    price: 0,
    image: "",
  });

  useEffect(() => {
    // Fetch data from JSON Server on component mount
    fetch("http://localhost:3000/pets")
      .then((response) => response.json())
      .then((data) => setPetsData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const getNextId = () => {
    const maxId = petsData.reduce(
      (max, pet) => (pet.id > max ? pet.id : max),
      0
    );
    return maxId + 1;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Add the new pet data to the server with auto-incrementing ID
    const newPet = {
      id: getNextId(),
      ...formData,
    };

    fetch("http://localhost:3001/pets", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPet),
    })
      .then((response) => response.json())
      .then((addedPet) => setPetsData([...petsData, addedPet]))
      .catch((error) => console.error("Error adding pet:", error));

    // Reset the form data
    setFormData({
      pet_name: "",
      type: "",
      breed: "",
      age: 0,
      price: 0,
      image: "",
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <label>Pet Name:</label>
        <input type="text" name="pet_name" value={formData.pet_name} onChange={handleInputChange}/>

        <br />
        
        <label htmlFor="type">Pet Type: </label>
        <select name="type" id="type" onChange={handleInputChange}>
          <option value="dog">Dog</option>
          <option value="cat">Cat</option>
          <option value="bird">Bird</option>
          <option value="fish">Fish</option>
        </select>
        
        <br />
        
        <label>Pet Breed:</label>
        <input type="text" name="breed" value={formData.breed} onChange={handleInputChange}/>
        
        <br />
        
        <label>Pet Age:</label>
        <input type="number" name="age" value={formData.age} onChange={handleInputChange}/>
        
        <br />
        
        <label>Pet Price:</label>
        <input type="number" name="price" value={formData.price} onChange={handleInputChange}/>
        
        <br />
        
        <label>Pet Image:</label>
        <input type="file" name="image" value={formData.image} onChange={handleInputChange}/>
        
        <br />
        <br />

        <button type="submit">Add Pet</button>
      </form>

      {/* Display pets */}
      <ul>
        {petsData.map((pet) => (
          <li key={pet.id}>
            {pet.pet_name} -{" "}
            <img
              src={pet.image}
              alt={pet.pet_name}
              style={{ width: "50px", height: "50px" }}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Blog;
