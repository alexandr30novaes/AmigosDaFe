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
const elements = document.querySelectorAll('.hidden, .anim, .anim-txt'); 

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

//wrapper carrosel
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
////carrosel doacao
let posicaoAtual = 0; 
const carrossel = document.querySelector('.carrosel'); 
const cards = document.querySelectorAll('.card'); 
let isDragging = false; 
let startX; 
let scrollLeft; 

function moverCarrossel(direcao) { 
  posicaoAtual += direcao; 
  if (posicaoAtual < 0) { 
    posicaoAtual = cards.length - 1; 
  } else if (posicaoAtual >= cards.length) { 
    posicaoAtual = 0; 
  } atualizarCarrossel(); 
} 
function atualizarCarrossel() { 
  carrossel.style.transform = `translateX(-${posicaoAtual * 100}%)`; 
} 
carrossel.addEventListener('mousedown', (e) => { 
  isDragging = true; 
  carrossel.style.cursor = 'grabbing'; 
  startX = e.pageX - carrossel.offsetLeft; 
  scrollLeft = carrossel.scrollLeft; 
}); 
carrossel.addEventListener('mouseleave', () => { 
  isDragging = false; 
  carrossel.style.cursor = 'grab'; 
}); 
carrossel.addEventListener('mouseup', () => { 
  isDragging = false; 
  carrossel.style.cursor = 'grab'; 
}); 
carrossel.addEventListener('mousemove', (e) => { 
  if (!isDragging) return; 
  e.preventDefault(); 
  const x = e.pageX - carrossel.offsetLeft; 
  const walk = (x - startX) * 3; // Multiplicar pelo número de slides 
  carrossel.scrollLeft = scrollLeft - walk; 
});