// our rgb colors:
// let colors = [
// "rgb(255, 0, 0)", //all red
// "rgb(255, 255, 0)", // red, green- yellow
// "rgb(0, 255, 0)", //all green
// "rgb(0, 255, 255)", //green, blue - turquoise
// "rgb(0, 0, 255)", // all blue
// "rgb(255, 0, 255)", //red, blue - pink
// ]

// ...............................now we want to select random colors, because in our colors array we just defined 6 colors ourselves........
// .................................we create a function and specify how many colors we want to generate in the placeholder, exp. 6.............

// to distinguish between easy and hard mode
let numberOfSquares = 6;

let colors = generateRandomColors(numberOfSquares);


//........................... defining generateRandomColors function.........................
function generateRandomColors(num){
  // make an array
let arr = [];
  // repeat num times
for (let i = 0; i < num; i++){
    // get random color and push into arr -- we will make another function 
    arr.push(randomColor());
}
  //return that array
  return arr;

}

// ........................a helper function to generate random colors...........
function randomColor(){
// pick a red from 0 - 255
let r = Math.floor(Math.random() * 256);
// pick a green from 0 - 255
let g = Math.floor(Math.random() * 256);
// pick a blue from 0 - 255
let b = Math.floor(Math.random() * 256);

//return string rgb(r, g, b);
return "rgb(" + r + ", " + g + ", " + b + ")";
}



//............................... selecting the squares
let squares = document.querySelectorAll(".square");

// selecting colors and changing display
// let pickedColor = colors[3]; now we need to pick color randomly
// .................................................we write a function and define it-
let pickedColor = pickColor();

//.................................... defining the pickColor function.......................
function pickColor() {
  // pick a random color
 let random = Math.floor(Math.random() * colors.length);
 return colors[random];

}



let colorDisplay = document.getElementById("colorDisplay");

let messageDisplay = document.querySelector("#message");

//.............................................. to change background color of H1 when the correct color is selected----
let h1 = document.querySelector("h1");

// ...........................................to select the reset button
let resetButton = document.querySelector("#reset");

resetButton.addEventListener('click', function(){
  // generate all new colors
  colors = generateRandomColors(6);
  // pick a new random color from the array
  pickedColor = pickColor();
  //change color display to change picked color
  colorDisplay.textContent = pickedColor;
  //change colors of squares
  for(let i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = colors[i];
  }
  h1.style.backgroundColor = "#232323";
})

colorDisplay.textContent = pickedColor;

// ..............................................Looping through, so we get the colors above respectively.......................
 //............................................ used here style.backgroundColor rather than style.background--its compatible with more browsers...........................
for (let i = 0; i < squares.length; i++) {

    // add initial colors to squares
    squares[i].style.backgroundColor =  colors[i]; 
    
    // add click listeners to squares
    squares[i].addEventListener("click", function(){
        // grab color of clicked square
        let clickedColor = this.style.backgroundColor;
        // compare color to pickedColor
        if(clickedColor === pickedColor){
           messageDisplay.textContent = "Correct!"
           resetButton.textContent = "Play again?"
           changeColors(clickedColor);
           h1.style.backgroundColor = clickedColor;
        } else {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again!";
        }
    })
}


//...................................... we want to change colors of the rest of the boxes when we select the correct color.........................

function changeColors(color) {
    // loop through all squares
    for(let i = 0; i < squares.length; i++){
    
    // change each color to match given color
     squares[i].style.backgroundColor = color;
}

}



let easyBtn = document.querySelector("#easyBtn");
let hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click", function(){
    hardBtn.classList.remove("selected");
    easyBtn.classList.add("selected");
    numberOfSquares = 3;
    colors = generateRandomColors(numberOfSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(let i = 0; i < squares.length; i++){
      if (colors[i]){
        squares[i].style.backgroundColor = colors[i];
      } else {
        squares[i].style.display = "none";
      }
    }
})

hardBtn.addEventListener("click", function(){
  hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    numberOfSquares = 6;
    colors = generateRandomColors(numberOfSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for(let i = 0; i < squares.length; i++){
     squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = "block";
 
    }
})


