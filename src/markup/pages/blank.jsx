import React, { useState } from "react";
import "./styles.css";

console.clear();

const images = [
  {
    id: 1,
    name: "mountains",
    nature: true,
    imgUrl: "https://www.w3schools.com/w3images/mountains.jpg"
  },
  {
    id: 2,
    name: "lights",
    nature: true,
    imgUrl: "https://www.w3schools.com/w3images/lights.jpg"
  },
  {
    id: 3,
    name: "forest",
    nature: true,
    imgUrl: "https://www.w3schools.com/w3images/nature.jpg"
  },
  {
    id: 4,
    name: "retro",
    cars: true,
    imgUrl: "https://www.w3schools.com/w3images/cars1.jpg"
  },
  {
    id: 5,
    name: "fast",
    cars: true,
    imgUrl: "https://www.w3schools.com/w3images/cars2.jpg"
  },
  {
    id: 6,
    name: "classic",
    cars: true,
    imgUrl: "https://www.w3schools.com/w3images/cars3.jpg"
  },
  {
    id: 7,
    name: "girl",
    people: true,
    imgUrl: "https://www.w3schools.com/w3images/people1.jpg"
  },
  {
    id: 8,
    name: "man",
    people: true,
    imgUrl: "https://www.w3schools.com/w3images/people2.jpg"
  },
  {
    id: 9,
    name: "woman",
    people: true,
    imgUrl: "https://www.w3schools.com/w3images/people3.jpg"
  }
];

const FILTER_DEFS = {
  NATURE: image => image.nature,
  CARS: image => image.cars,
  PEOPLE: image => image.people,
  NONE: image => image
};

const App = props => {
  const [state, setState] = useState({
    list: images,
    filterKey: "NONE"
  });

  const { list, filterKey } = state;
  const filteredList = list.filter(FILTER_DEFS[filterKey]);
  return (
    <div>
      <button
        type="button"
        onClick={() => setState({ ...state, filterKey: "NATURE" })}
      >
        nature
      </button>

      <button
        type="button"
        onClick={() => setState({ ...state, filterKey: "CARS" })}
      >
        cars
      </button>

      <button
        type="button"
        onClick={() => setState({ ...state, filterKey: "PEOPLE" })}
      >
        people
      </button>

      <hr />

      <button
        type="button"
        onClick={() => setState({ ...state, filterKey: "NONE" })}
      >
        Reset / Show all
      </button>
      {filteredList.map(image => (
        <div key={image.id}>
          <img src={image.imgUrl} alt="" />
          <h4>{image.name}</h4>
          <p>Lorem ipsum dolor..</p>
          <button>Click</button>
        </div>
      ))}
      <hr />
    </div>
  );
};

export default App;
