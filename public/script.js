// cursor
let mouseCursor = document.querySelector(".cursor");

window.addEventListener('mousemove', cursor);

function cursor(e) {
  mouseCursor.style.top = e.pageY + 'px';
  mouseCursor.style.left = e.pageX + 'px';
}


// Cursor growing
let navLinks = document.querySelectorAll(".navigation li");

navLinks.forEach(link => {

  link.addEventListener('mouseover', () => {
    mouseCursor.classList.add("link-grow");
    link.classList.add("hovered-link");
  });

  link.addEventListener('mouseleave', () => {
    mouseCursor.classList.remove("link-grow");
    link.classList.remove("hovered-link");
  });
});

// form
(function(){
  emailjs.init("user_4FE7oV7W5ZH5a1TM5DCdS"); // Obtain your user ID at the dashboard https://dashboard.emailjs.com/integration
})();


