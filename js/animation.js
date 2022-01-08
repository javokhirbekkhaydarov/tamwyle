window.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", () => {



    
    const rights = document.querySelectorAll(".right");

  


    rights.forEach((right, index) => {
     
        right.style.animation = `rightAnim 0.5s linear forwards ${
          index / 7 + .1
        }s`;
      
    });

    for (let i = 0; i < rights.length; i++) {
      let windowHeitgh = window.innerHeight;
      let containerRight = rights[i].getBoundingClientRect().top;
      let containerPoint = 50;

      if (containerRight < windowHeitgh - containerPoint) {
        rights[i].classList.add("Ractive");
      }
    }

    // left

    const lefts = document.querySelectorAll(".left");

    for (let i = 0; i < lefts.length; i++) {
      let windowHeitgh = window.innerHeight;
      let containerLeft = lefts[i].getBoundingClientRect().top;
      let containerPoint = 50;

      if (containerLeft < windowHeitgh - containerPoint) {
        lefts[i].classList.add("leftActiv");
      }
    }
    lefts.forEach((left, index) => {
      if (left.style.animation) {
        left.style.animation = "";
      } else {
        left.style.animation = `link 0.5s linear forwards ${index / 7 + 0.45}s`;
      }
    });

    const top = document.querySelectorAll(".toTop");

    for (let i = 0; i < top.length; i++) {
      let windowHeitgh = window.innerHeight;
      let containerTop = top[i].getBoundingClientRect().top;
      let containerPoint = 50;

      if (containerTop < windowHeitgh - containerPoint) {
        top[i].classList.add("active");
      }
    }


    const bottom = document.querySelectorAll(".toBottom");

    for (let i = 0; i < bottom.length; i++) {
      let windowHeitgh = window.innerHeight;
      let containerTop = bottom[i].getBoundingClientRect().top;
      let containerPoint = -50;

      if (containerTop < windowHeitgh - containerPoint) {
        bottom[i].classList.add("active");
      }
    }
  });

  //Smooth Scroll to sections
  //-----------------------------------------------
  if ($(".smooth-scroll").length > 0) {
    $(
      ".smooth-scroll a[href*=#]:not([href=#]), a[href*=#]:not([href=#]).smooth-scroll"
    ).click(function () {
      if (
        location.pathname.replace(/^\//, "") ==
          this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
      ) {
        var target = $(this.hash);
        target = target.length
          ? target
          : $("[name=" + this.hash.slice(1) + "]");
        if (target.length) {
          if ($(window).width() > 767) {
            $("html,body").animate(
              {
                scrollTop: target.offset().top - 151,
              },
              1000
            );
          }
          if ($(window).width() < 768) {
            $("html,body").animate(
              {
                scrollTop: target.offset().top - 40,
              },
              1000
            );
          }
          return false;
        }
      }
    });
  }
});