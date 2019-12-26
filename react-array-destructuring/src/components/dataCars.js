const animals = [
    {
      name: "cat",
      sound: "meow",
      feedingRequirements: {
        food: 2,
        water: 3
      }
    },
    { name: "dog", sound: "woof" }
  ];
  
  function useAnimals(animal) {
    return [
      animal.name,
      function() {
        console.log(animal.sound);
      }
    ];
  }

  const cars = [
    {
      model: "Honda Civic",
      coloursByPopularity: ["black", "silver"],
      speedStats: {
        topSpeed: 140,
        zeroToHundred: 8.5
      }
    },
    {
      model: "Tesla Model 3",
      coloursByPopularity: ["red", "white"],
      speedStats: {
        topSpeed: 150,
        zeroToHundred: 3.2
      }
    }
  ];
    
  
  export default animals;
  export { useAnimals };
  export {cars};
  