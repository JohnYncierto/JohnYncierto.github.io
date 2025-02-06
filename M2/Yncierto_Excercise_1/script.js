 // Select the button and header elements
 const button = document.getElementById('changeTextBtn');
 const paragraph = document.getElementById('text');
 // Add an event listener to the button
 button.addEventListener('click', function() {
     paragraph.textContent = 'Text Changed!';
 });