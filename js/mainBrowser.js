var swiper = new Swiper(".mySwiper", {
    effect: "cards",
    grabCursor: true,
  });
  const iconDrop = document.querySelector("#Link");
const dropLinks = document.querySelector("#Links");
iconDrop.addEventListener("click", () => { 
    if (iconDrop==="Dotts") {
        iconDrop.classList.toggle("Dotts");
        
    }
    else if (dropLinks==="MuneLinks") {
        dropLinks.classList.toggle("links");
        dropLinks.classList.toggle("MuneLinks");
        dropLinks.style.display ="flex";
    }
    else{
        iconDrop.classList.toggle("Dotts");
        dropLinks.classList.toggle("links");
        dropLinks.classList.toggle("MuneLinks");
        dropLinks.style.display ="none";
    }
})