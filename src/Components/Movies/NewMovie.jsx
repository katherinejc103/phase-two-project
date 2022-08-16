import React, {useState} from 'react'

const NewMovie = ({addMovie}) => {

  // console.log(newMovie)



  const initialState = {
    Title: "",
    Description: "",
    Year: "",
    Image: "",
  }

  const [formData, setFormData] = useState(initialState);

  const handleChange = (event) => {
    setFormData({
      ...formData, [event.target.name] : event.target.value
      })
    }

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("http://localhost:4001/Movies", {
      method: "POST",
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData),
    })
    .then((res) => res.json())
    .then((movie) => addMovie(movie));
    setFormData(initialState);
    }
  
  return ( 
    <div>
    <h1>Add a New Movie</h1>

    <form onSubmit={handleSubmit}>
      <label>Title</label>
      <input
        onChange={handleChange} 
        type="text"
        value={formData.Title}
        name="Title"
        ana-label="title">
        </input>
        <label>Description</label>
      <input 
        onChange={handleChange}
        type="text"
        value={formData.Description}
        name="Description"
        ana-label="description">
        </input>
        <label>Year</label>
      <input 
        onChange={handleChange}
        type="number"
        value={formData.Year}
        name="Year"
        ana-label="year">
        </input>
        <label>Image</label>
      <input 
        onChange={handleChange}
        type="text"
        value={formData.Image}
        name="Image"
        ana-label="image">
        </input>
    </form>
    </div>
  )
}

export default NewMovie