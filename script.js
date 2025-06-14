// function openLetter() {
//   const letter = document.getElementById("letter");
//   letter.classList.remove("hidden"); // make it visible
//    button.style.display = "none";
// }
function openLetter() {
  const letter = document.getElementById("letter");
  const button = document.querySelector("button"); // Get the button
  letter.classList.remove("hidden"); // Show the letter
  button.style.display = "none";     // Hide the button
}
