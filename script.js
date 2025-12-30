function toggleMenu() {
  const menu = document.getElementById("menu");
  menu.style.display = menu.style.display === "flex" ? "none" : "flex";
}

const spinSound = document.getElementById("spinSound");
const winSound  = document.getElementById("winSound");
const loseSound = document.getElementById("loseSound");

function play(gameBox){
  gameBox.classList.add("playing");
  spinSound.play();
  setTimeout(()=>gameBox.classList.remove("playing"),400);
}

// SLOT
function slot(){
  const box = document.querySelectorAll(".game")[0];
  play(box);

  setTimeout(()=>{
    if(coin < 50) return alert("Coin نیت 😅");
    coin -= 50;

    if(Math.random() < 0.4){
      coin += 180;
      slotResult.innerText = "🎉 بردیت +180";
      slotResult.className = "win";
      winSound.play();
    } else {
      slotResult.innerText = "😢 باختیت";
      slotResult.className = "lose";
      loseSound.play();
    }
    updateCoin();
  },500);
}

// DICE
function dice(){
  const box = document.querySelectorAll(".game")[1];
  play(box);

  setTimeout(()=>{
    if(coin < 30) return alert("Coin نیت 😅");
    coin -= 30;

    const roll = Math.floor(Math.random()*6)+1;
    if(roll >= 4){
      coin += 100;
      diceResult.innerText = "🎲 "+roll+" بردیت +100";
      diceResult.className = "win";
      winSound.play();
    } else {
      diceResult.innerText = "🎲 "+roll+" باختیت";
      diceResult.className = "lose";
      loseSound.play();
    }
    updateCoin();
  },500);
}

// CARD
function card(){
  const box = document.querySelectorAll(".game")[2];
  play(box);

  setTimeout(()=>{
    if(coin < 40) return alert("Coin نیت 😅");
    coin -= 40;

    const c = Math.floor(Math.random()*13)+1;
    if(c >= 8){
      coin += 140;
      cardResult.innerText = "🃏 "+c+" بردیت +140";
      cardResult.className = "win";
      winSound.play();
    } else {
      cardResult.innerText = "🃏 "+c+" باختیت";
      cardResult.className = "lose";
      loseSound.play();
    }
    updateCoin();
  },500);
}