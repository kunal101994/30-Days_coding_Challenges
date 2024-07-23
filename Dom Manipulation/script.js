// Task 1
const myElement = document.getElementById("myElement");

myElement.textContent = "Abracadabra! Text changed! 🎩✨";

// Task 2

// const myElement = document.querySelector(".my-element-class");

// myElement.style.backgroundColor = "#ffcc00";
// myElement.style.color = "white";

// Activity 2;
// Task 3
const newDiv = document.createElement("div");

newDiv.textContent = "Hello from the magical div! 🌟";
document.body.appendChild(newDiv);

// Task 4
const newDiv = document.createElement("div");

newDiv.textContent = "Hello from the magical div! 🌟";
document.body.appendChild(newDiv);

// Activity 3: Removing Element
// Task 5
const vanishingElement = document.getElementById("myVanishingElement"); // Replace with your actual selector

if (vanishingElement) {
  vanishingElement.remove();
  console.log("Poof! Element vanished!");
} else {
  console.log("Element not found. No magic today.");
}

// TASK 6
const parentElement = document.getElementById("myParentElement");
// Check if the parent element exists
if (parentElement) {
  // Remove the last child
  const lastChild = parentElement.lastElementChild;
  if (lastChild) {
    parentElement.removeChild(lastChild);

// Activity 4: Modifying Attributes and classes
// task7:
const myElement = document.getElementById("myElement");

if (myElement) {
  myElement.src = "new-image.jpg";

  console.log("Attribute updated! 🎉");
} else {
  console.log("Element not found. No magic today.");
}

// Task 8
const myElement1 = document.getElementById("myElement");
if (myElement1) {
  myElement1.classList.add("my-class");
  console.log("Class added! 🎉");
} else {
  console.log("Element not found. No magic today.");
}

if (myElement1) {
  // Remove a class from it
  myElement1.classList.remove("my-class");
} else {
  console.log("Element not found. No magic today.");
}

// Activity 5: Event Handling
// Task 9:
const myButton = document.getElementById("myButton");
const myParagraph = document.getElementById("myParagraph");

myButton.addEventListener("click", () => {
    if (myParagraph.textContent === "Click the button to change me!") {
        myParagraph.textContent = "I was clicked!";
    } else {
        myParagraph.textContent = "Click the button to change me!";
    }
});




