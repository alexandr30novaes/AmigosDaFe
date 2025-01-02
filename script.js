/////////////// function expandir menu ////////////////////////
menu = document.querySelector(".menu");
btn = document.querySelector("#btn-expandir");

btn.addEventListener("click", function() {
    menu.classList.toggle("expandir");
});


//scroll menu lateral
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
  
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
  });