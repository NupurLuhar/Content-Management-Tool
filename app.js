   // Access the form and register the form submission event
   document.addEventListener('DOMContentLoaded', function() {
       var form = document.querySelector('#blogForm');
       form.addEventListener('submit', function(event) {
           event.preventDefault(); // Prevent the form from submitting

           // Retrieve the form values
           var title = document.querySelector('#title').value;
           var content = document.querySelector('#content').value;
           var image = document.querySelector('#image').value;
           var video = document.querySelector('#video').value;

           // Display the filled details on the webpage
           var detailsContainer = document.querySelector('#detailsContainer');
           detailsContainer.innerHTML = `
        <h2>Blog Details</h2>
        <h3>Title: ${title}</h3>
        <h3>Content: ${content}</h3>
        <img src="${image}" alt="Blog Image">
        <h3>Video URL: ${video}</h3>
      `;
       });
   });
