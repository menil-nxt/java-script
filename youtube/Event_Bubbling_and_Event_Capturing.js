// Event Bubbling and Event Capturing(Trickling)

document.querySelector("#grandparent").addEventListener(
  "click",
  (e) => {
    console.log("Grand Parent Called");
    e.stopPropagation(); // to stop event bubbling and event capturing both
  },
  true,
); // for event capturing(trickling)(true for event capturing and false for event bubbling);

document.querySelector("#parent").addEventListener(
  "click",
  (e) => {
    console.log("Parent called");
  },
  true,
); // for event capturing(true for event capturing and false for event bubbling);

document.querySelector("#child").addEventListener(
  "click",
  (e) => {
    console.log("Child called");
  },
  true,
); // for event capturing(true for event capturing and false for event bubbling);
