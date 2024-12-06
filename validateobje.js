const obj = {
  data: [
    {
      name: "muthu",
      age: 20,
    },
    {
      name: "kapil",
      age: 25,
    },
    {
      name: "naina",
      age: "",
    },
  ],
};

const arr = ["kapil", "naina", "muthu", "kjkjlj"];
arr.forEach((name) => {
  // Check if name is a valid string
  if (typeof name !== "string" || name.trim() === "") {
    console.error("Invalid name:", name, "- Name must be a non-empty string.");
    return;
  }

  const person = obj.data.find((item) => item.name === name);

  if (person) {
    // Validate age: check if it's a number and not NaN
    if (typeof person.age !== "number" || isNaN(person.age)) {
      console.error(`Invalid age for ${person.name}:`, person.age);
    } else {
      console.log(person.name, person.age);
    }
  } else {
    // Handle undefined or missing entries
    console.warn(name, "Not Found");
  }
});
