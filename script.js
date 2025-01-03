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

// Animação escroll
const elements = document.querySelectorAll('.hidden'); 

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
});

elements.forEach((el) => observer.observe(el))