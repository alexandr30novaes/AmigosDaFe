/////////////// function expandir menu ////////////////////////
menu = document.querySelector(".menu");
btn = document.querySelector("#btn-expandir");

btn.addEventListener("click", function() {
    menu.classList.toggle("expandir");
});

// menu lateral select
var menu = document.querySelectorAll(".item-menu")

function selectLink(){
    menu.forEach((item)=>{
        item.classList.remove("active")
    })
    this.classList.add("active")
}

menu.forEach((item)=>{
    item.addEventListener("click", selectLink)
})

//scroll menu lateral
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
  
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
  });