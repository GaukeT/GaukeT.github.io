const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let interval = null;

const toggleNav = () => {
  document.body.dataset.nav = document.body.dataset.nav === "true" ? "false" : "true";
}

window.addEventListener('load', function () {
  loadingWord(document.getElementById("h1"));

  document.getElementById("h1").onmouseover = event => loadingWord(event.target);
});

function loadingWord(event) {
  const blob = document.getElementById("blob");

  window.onpointermove = event => { 
    const { clientX, clientY } = event;
    
    blob.animate({
      left: `${clientX}px`,
      top: `${clientY}px`
    }, { duration: 3000, fill: "forwards" });
  }

  let iteration = 0;
  
  clearInterval(interval);
  
  interval = setInterval(() => {
    event.innerText = event.innerText
      .split("")
      .map((letter, index) => {
        if(index < iteration) {
          return event.dataset.value[index];
        }
      
        return letters[Math.floor(Math.random() * 26)]
      })
      .join("");
    
    if(iteration >= event.dataset.value.length) { 
      clearInterval(interval);
    }
    
    iteration += 1 / 4;
  }, 30);
}
