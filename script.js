const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let interval = null;

window.addEventListener('load', function () {
  init(document.getElementById("h1"), 
    () => document.getElementById("p1").style.visibility = "visible")
});

function init(event, _callback) {
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
    
    if(iteration >= event.dataset.value.length){ 
      clearInterval(interval);
      _callback();
    }
    
    iteration += 1 / 4;
  }, 30);
}
