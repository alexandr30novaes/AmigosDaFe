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
const elements = document.querySelectorAll('.hidden, .anim'); 

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

//wrapper
const wrapperHolder = document.getElementById('wrapper-holder'); 

let isHovered = false; 

wrapperHolder.addEventListener('mouseover', () => { 
  wrapperHolder.style.animationPlayState = 'paused';
   isHovered = true;
}); 
wrapperHolder.addEventListener('mouseout', () => { 
  wrapperHolder.style.animationPlayState = 'running';
   isHovered = false; 
}); 
wrapperHolder.addEventListener('mousemove', (e) => {
   if (isHovered) { 
    const boundingRect = wrapperHolder.getBoundingClientRect(); 
    const mouseX = e.clientX - boundingRect.left; 
    const percentage = mouseX / boundingRect.width; 
    const offset = -percentage * (boundingRect.width * 5); // 5 porque são 6 imagens no total 
    wrapperHolder.style.transform = `translateX(${offset}px)`; 
  } 
});