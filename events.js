console.log("main.js loaded");

var output = document.getElementById("output-target");


// When any section is clicked the output target text should be "You clicked on the {text of the section} section"

document.getElementById("article").addEventListener("click", (event)=> {
	// console.log("event", event);
	output.innerText = `You clicked on the ${event.target.innerText} section`;
});


// When the mouse is over the h1 tag, the output element should contain the text "You moved your mouse over the header".

document.getElementById("page-title").addEventListener("mouseover", () => {
	output.innerText = "You moved your mouse over the Header";
});


// When the mouse leaves the h1 tag, the output element should contain the text "You left me!!".

document.getElementById("page-title").addEventListener("mouseout", () => {
	output.innerText = "You left me!";
});


// When you type characters into the input field, the output element should mirror the text in the input field.

var input = document.getElementById("keypress-input");

input.addEventListener("keyup", (event) => {
	output.innerText = input.value;
});

// When you click the "Add color" button, the guinea-pig element's text color should change to blue.

guineaPig = document.getElementById("guinea-pig");

document.getElementById("add-color").addEventListener("click", () =>{
	guineaPig.classList.add("make-blue");
});

// When you click the "Hulkify" button, the guinea-pig element's font size should become much larger.


document.getElementById("make-large").addEventListener("click", () =>{
	guineaPig.classList.add("make-large");
});

// When you click the "Capture it" button, the guinea-pig element should have a border added to it.

document.getElementById("add-border").addEventListener("click", () =>{
	guineaPig.classList.add("add-border");
});

// When you click the "Rounded" button, the guinea-pig element's border should become rounded.

document.getElementById("add-rounding").addEventListener("click", () =>{
	guineaPig.classList.add("add-rounding");
});

// COMPLETE