window.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("main");
  const items = document.querySelectorAll(".pottu");


   const isMobile = window.innerWidth <= 700;

  // Define separate positions for mobile and desktop
  const positions = isMobile
    ? [
        { x: "0vw", y: "-50vh" },
        { x: "0vw", y: "-20vh" },
        { x: "0vw", y: "10vh" },
        { x: "0vw", y: "40vh" },
        { x: "0vw", y: "70vh" },
        { x: "0vw", y: "100vh" }
      ]
    : [
        { x: "-36vw", y: "8vh" },
        { x: "-16vw", y: "-10vh" },
        { x: "14vw", y: "-10vh" },
        { x: "-20vw", y: "28vh" },
        { x: "24vw", y: "30vh" },
        { x: "34vw", y: "0vh" }
      ];

  items.forEach((item, i) => {
    item.style.setProperty("--x", positions[i].x);
    item.style.setProperty("--y", positions[i].y);
    item.style.setProperty("--i", i);
    const randDeg = Math.floor(Math.random() * 60 - 30); 
    item.style.setProperty("--r", `${randDeg}deg`);
  });

  setTimeout(() => {
    document.getElementById("potli").src="assets/pottu packs/potliOpened.png"
    container.classList.add("loaded");
  }, 300); 
});