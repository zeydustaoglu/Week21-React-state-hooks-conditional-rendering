import React from "react";
import animals, { useAnimals, cars } from "./dataCars";


//Destructuring Arrays
// console.log(animals);
const [cat, dog] = animals;
// console.log(cat);

const [animal, makeSound] = useAnimals(cat);
console.log(animal);
makeSound();

//Destructuring Objects
// const { name, sound} = cat;
// const { name: catName, sound: catSound } = cat;
// const { name = "Fluffy", sound = "Purr" } = cat;
// const {feedingRequirements: {food, water} } = cat;
// console.log(food);

// CHALLENGE: uncomment the code below and see the car stats rendered


const [honda, tesla] = cars;

const {
  model:hondaName,
  speedStats: { topSpeed: hondaTopSpeed, zeroToHundred: hondaZeroHundred },
  coloursByPopularity: [hondaTopColour]
} = honda;

const {
  speedStats: { topSpeed: teslaTopSpeed, zeroToHundred: teslaZeroHundred },
  coloursByPopularity: [teslaTopColour]
} = tesla;



function App(){
  return(
    <table className="table">
  <thead>
    <tr> 
      <th scope="col">#</th>
      <th scope="col">Brand</th>
      <th scope="col">Top Speed</th>
      <th scope="col">Top Colour</th>
      <th scope="col">0-100</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>{tesla.model}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColour}</td>
      <td>{teslaZeroHundred}</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>{hondaName}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColour}</td>
      <td>{hondaZeroHundred}</td>
    </tr>
  </tbody>
</table>
  )
}

export default App;
