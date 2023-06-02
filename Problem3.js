// Defining a function named 'getTodos'
const getTodos = () => {

 // Creating a new XMLHttpRequest object
const request = new XMLHttpRequest();

// Adding an event listener for the 'readystatechange' event
request.addEventListener('readystatechange', () => {

// Checking if the request has completed and the response status is 200 (OK)
if (request.readyState === 4 && request.status === 200) {
       
// Logging the response text to the console
 console.log(request.responseText);
 } else if (request.readyState === 4) {

// Logging an error message if the request completed but the status is not 200
 console.log('could not fetch the data');
    }
});

// Opening a GET request to the specified URL
request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');

// Sending the request
request.send();

// Calling the 'getTodos' function to create a new XMLHttpRequest
getTodos();

// Calling the 'getTodos' function again to make another new XMLHttpRequest
getTodos();

}