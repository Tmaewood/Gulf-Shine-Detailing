// Collapse navbar on click
const links = document.querySelectorAll('.nav-link');
const navbar = document.querySelector('.navbar-collapse');

links.forEach(link => {
    link.addEventListener('click', () => {
        if (navbar.classList.contains('show')) navbar.classList.remove('show');
    })
})


// Submit form
// const myform = document.getElementById("get-quote");
// e.preventDefault();
// document.getElementById("get-quote").addEventListener("click", function () {
//   myform.submit();
  
// });

// //confirm before form submit
// const form = document.querySelector('form')
// form.onsubmit = (e) => {
//   e.preventDefault()
//   const confirmSubmit = confirm('Are you sure you want to submit this form?');
//   if (confirmSubmit) {
//     console.log('submitted')
//   }
// }




// Scroll to top button
// mybutton = document.getElementById("top-btn");
// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//     mybutton.style.display = "block";
//   } else {
//     mybutton.style.display = "none";
//   }
// }

// function topFunction() {
//   document.body.scrollTop = 0;
//   document.documentElement.scrollTop = 0;
// }

// Get the button:
// mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//     mybutton.style.display = "block";
//   } else {
//     mybutton.style.display = "none";
//   }
// }





// When the user clicks on the button, scroll to the top of the document
// function topFunction() {
//   document.body.scrollTop = 0; // For Safari
//   document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
// }

// $(document).ready(function () { 
//   $(document).click(function () {
//       if($(".navbar-collapse").hasClass("in")){
//        $('.navbar-collapse').collapse('hide');
//       }
//   });
// });


// $(document).ready(function () {
//      $(document).click(function (event) {
//          var clickover = $(event.target);
//          var _opened = $(".navbar-collapse").hasClass("navbar-collapse in");
//          if (_opened === true && !clickover.hasClass("navbar-toggle")) {
//              $("button.navbar-toggle").click();
//          }
//      });
//  });
