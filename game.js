var spieler = document.querySelector('.player')
var punkteAnzeige = document.querySelector('.punkte')
var score = 0
let timeSecond = 60;
const timeH = document.querySelector("h1");
var treffer = document.querySelector('.treffer')  


spieler.style.left = '45%'
spieler.style.top = '0px'

let treffer_one = true;



displayTime(timeSecond);
    
const countDown = setInterval(() => {
  timeSecond--;
  displayTime(timeSecond);
  if (timeSecond == 0 || timeSecond < 1) {
    endCount();
    clearInterval(countDown);
  }
}, 1000);  

function displayTime(second) {
  const min = Math.floor(second / 120);
  const sec = Math.floor(second % 120);
  timeH.innerHTML = `
  ${min < 10 ? "0" : ""}${min}:${sec < 10 ? "0" : ""}${sec}
  `;
}

function endCount() {
  timeH.innerHTML = "Time out";
}

function loop() {
  if(keyboard(39)) {
    spieler.style.left = parseInt(spieler.style.left) + 5 + 'px'
  }
  if(keyboard(37)) {
    spieler.style.left = parseInt(spieler.style.left) - 5 + 'px'
  }

  if(parseInt(spieler.style.top) < 700) {
    spieler.style.top = parseInt(spieler.style.top) + 5 + 'px'
    } else {
      treffer_one = true
    }

  if(keyboard(32)) {
      spieler.style.top = parseInt(spieler.style.top) - 100 + 'px'
    }

   

if(anyCollision(spieler, [treffer])) {
  
  if(treffer_one){
    score = score + 1
    treffer_one = false
  }
  
  punkteAnzeige.textContent = score
}


  window.requestAnimationFrame(loop)
}
window.requestAnimationFrame(loop)