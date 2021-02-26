// Step 1 - Hide and Show Subscribe Form
// In this step, you will write a function that will hide the subscribe form when the 'X' is clicked. When the form is hidden, the 'X' should be a '+'. And then when the '+' is clicked, the form should reappear.

 

// index.js
// Select the element with the id of close-form and save it to a variable called formBtn
const formBtn = document.getElementById('close-form');
// Select the form and save it to a variable called form
const form = document.getElementsByClassName('form');
// go into the styles.css file to see what the hide class does and then write a function called toggler which should:
// use the built-in toggle function on form's classList to toggle the hide class
// write a conditional (you can use an if-then or a ternary) that checks if formBtn's innerText is strictly equal to 'X'
// if it does equal 'X', change the innerText to be a '+' instead
// if it does not equal 'X', change the innerText to be an 'X'
// With those two variables and the function written, the toggler function should hide the form and change the 'X' back and forth to a '+', but first you need to connect it to your HTML

 function toggler () {
  form[0].classList.toggle('hide');
  formBtn.innerText==='X' ? formBtn.innerText = '+':formBtn.innerText = 'X'
};



// index.html
// Add a script tag at the bottom of your body node and connect to index.js
// DONE
// Assign the toggler function to the formBtn so that it fies when the X/+ is clicked
// DONE
 

// Step 2 - Form Validation
// Now you are going to write a function to make sure that users type something in the form inputs before submitting. If they don't, they will be alerted to the problem and the missing field(s) will be highlighted.

 

// index.js
// Select the name and email inputs

const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email')
const emailList = []; 

// Save the name input to a variable called nameInput
// Save the email input to a variable called emailInput
// Create a variable called emailList and set it to an empty array
// you are going to store the subscriber information here -- this is one of those cases where you will do something that you know how to do in place of more complicated things
// Write a function called validateForm that will house a large if-else statement. Everything in this function will be inside the if-else.

function validateForm() {
  if (!nameInput.value && !emailInput.value) {
    nameInput.style.border = "solid red 2px";
    emailInput.style.border = "solid red 2px";
    window.alert('Please enter your name and email address to subscribe.');
  } else if (!emailInput.value) {
    emailInput.style.border = "solid red 2px";
    window.alert('Please enter your email address to subscribe.');
  } else if (!nameInput.value) {
    nameInput.style.border = "solid red 2px";
    window.alert('Please enter your name to subscribe.')
  } else if (nameInput.value && emailInput.value) {
    emailList.push({
      name: nameInput.value,
      email: emailInput.value
    });
    displayThankYou();
    console.log(emailList);
  };
};

// The first condition should check if both the nameInput.value and emailInput.value are false, which would mean that they are empty
// if they are, change both input fields' borders to be a solid red line with a 2px width using the style object
// you should also set an alert that tells the user something like 'you must enter a name and an email address to subscribe!'
// Next use an else if to check if just the nameInput.value is false
// if it is, change the name input's border to be a solid red line with a 2px width using the style object
// also set an alert that says something like 'please enter a name to subscribe'
// Next use another else if to check if just the emailInput.value is false
// if it is, change the email input's border to be a solid red line with a 2px width using the style object
// also set an alert that says something like 'please enter an email address to subscribe'
// In the last else, you will write the functionality that should be carried out if the form has both a name and an email entered
// push an object with name and email properties, whose values come from the nameInput and emailInput values respectively, into the emailList array (this array is our "database", in the future you'll send information to the back end instead)
//DONE

// in the next step, you are going to call another function inside the else block as well
// Now that you have the validateForm function written, you need to connect it to your HTML -- we are going to use addEventListener to do that.
// below your validateForm function, call addEventListener on your form variable, passing in the string 'submit' and a callback function
// the callback function should have one parameter named event
// inside the callback, invoke event.preventDefault
// then invoke validateForm
 
form[0].addEventListener('submit', event => {
  validateForm();
  event.preventDefault();
  event.stopPropagation();
  })


// Step 3 - Thank You Message
// Next, you will write the functionality to change the form into a thank you message.

 

// index.js
// Select the div that has the class form-container and save it to a vairable called formContainer

const formContainer = document.getElementsByClassName ('form-container');
// Write a function called displayThankYou which should:
// change the innerText of formContainer to the string: 'Thank you for subscribing!'



function displayThankYou () {
  formContainer[0].innerText='Thank you for subscribing!';
  window.setTimeout(()=>formContainer[0].remove(), 3000)
} 


// Back in the else block of validateForm, invoke the displayThankYou function after you push the email information into the emailList
 
// Challenge Step - Set a Timer to Remove the Thank You Message


// call the built in JavaScript function setTimeout inside of the displayThankYou function after changing the innerText
// setTimeout takes in two parameters, a callback and a time
// send in a function that uses the .remove method on formContainer to delete it from the DOM
// send in 3000 for the time (in milliseconds)
// for example: setTimeout(function(){*functionality to remove the html*}, 3000)
 
//DONE 

// Step 4 - Removing Red Border
// You already set up a function to change the email and name inputs' borders to be red if they are left blank. Now, you are going to get rid of the red border if the user types something into that field. You already have emailInput and nameInput variables that are selecting those inputs from the HTML for you, let's add event listeners to those.

 

// index.js
// Call addEventListener on nameInput, passing in the string 'change' and a callback function

nameInput.addEventListener('change',() => nameInput.style.border='none' );
emailInput.addEventListener('change',() => emailInput.style.border='none' );
// the callback should change nameInput's border to 'none' using the style object
// Call addEventListener on emailInput, passing in the string 'change' and a callback function
// the callback should change emailInput's border to 'none' using the style object
 

// Step 5 - Cart Items Counter
// Last, you'll make a 'cart' to track added items. Since you won't be saving this information to a server or database yet, you'll just create a cart counter that will increment as the 'add to cart' buttons are clicked. You will be adding a new HTML element that will show up in the top right of our page.

 

// index.js
// Use createElement to create a new div element, call the div cart

const cart = document.createElement('div',)
// Select the main node from your html file and save it to a variable called main, this is the node that you will append our new cart node to

const main = document.getElementsByClassName('hero');


// Create a variable called cartItems and set it to 0, this is the variable that will keep track of how many items are in the cart

let = cartItems = 0;

// Now let's make the function that will fire when the 'add to cart' buttons are clicked
// name the function addToCart
// addToCart should contain an if-else statement
// if cartItems equals 0 when one of the buttons is clicked, then a few things need to happen
// set cartItems to equal 1
// use setAttribute to add a class called cart-display to your cart div
// set the innerText of the cart div to be 'Your Cart: 1 item'
// use appendChild to add the cart div onto main
// else, when the cartItems does not equal 0, two things need to happen
// add 1 to cartItems
// set the innerText of the cart div to be 'Your Cart: cartItems items', which should then show the correct number like this: 'Your Cart: 2 items'
 
const addToCart = function () {
  if (cartItems===0) {
    cartItems = 1; 
    cart.setAttribute('class','cart-display');
    cart.innerText = 'Your Cart: 1 item';
    main[0].appendChild(cart);
  } else if (cartItems !== 0) {
    cartItems += 1;
    cart.innerText = `Your Cart: ${cartItems} items`;
    main[0].appendChild(cart);
  };
}

// index.html
// add an onclick attribute to all 3 'add to cart' buttons that invokes the addToCart function

const cartButtons = document.getElementsByClassName('product-card')

for (i=0; i<cartButtons.length; i++) {
  cartButtons[i].addEventListener('click', addToCart);
};

