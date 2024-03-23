const box = document.querySelector('.zoom-in-out-box');
const box1 = document.querySelector('.zoom-in-out-box1');
const box2 = document.querySelector('.zoom-in-out-box2');

setTimeout(function() {
  box.style.display = 'none';
  
}, 5000); // Wait 5 seconds (5000 milliseconds)

setTimeout(function() {
  box1.style.display = 'none';
  
}, 10000); // Wait 5 seconds (5000 milliseconds)

setTimeout(function() {
  box2.style.display = 'none';
  
}, 15000); // Wait 5 seconds (5000 milliseconds)


const delay = 20 * 1000;

function redirectToMain() {
  // Redirect to main.html using window.location.href
  window.location.href = "main.html";
}

// Call setTimeout to execute the redirect after the delay
setTimeout(redirectToMain, delay);


