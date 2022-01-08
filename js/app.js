const list = document.querySelectorAll(".list");
function activeLink() {
  list.forEach((item) => item.classList.remove("active"));
  this.classList.add("active");
}

list.forEach((item) => item.addEventListener("click", activeLink));


// list styles

// window.addEventListener("DOMContentLoaded", function () {
//   window.addEventListener("scroll", () => {
//     const navLinks = document.querySelectorAll(".rightAnim li");

//     //  Animate items
//     navLinks.forEach((link, index) => {
//       if (link.style.animation) {
//         link.style.animation = "";
//       } 
//       else  if (link.style.animation) 
        
//       {
//         link.style.animation = `rightAnim 1s linear forwards ${
//           index / 7 + 0.1
//         }s`;
//       }
//       else {
//         for (let i = 0; i < navLinks.length; i++) {
//           let windowHeitgh = window.innerHeight;
//           let containerRight = navLinks[i].getBoundingClientRect().top;
//           let containerPoint = 50;
//           if (containerRight < windowHeitgh - containerPoint) {
//             navLinks[i].classList.add("activeNav");
//           }
//         }
//       }
      
      
      
//     });


//   });
// });
