const cards = document.querySelectorAll(".card");

cards.forEach(card => {
  card.addEventListener("mousemove", e => {
    let x = e.offsetX;
    let y = e.offsetY;
    card.style.transform = 
      `rotateY(${x/10}deg) rotateX(${-y/10}deg)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "rotateX(0) rotateY(0)";
  });
});
