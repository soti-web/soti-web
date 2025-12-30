function toggleMenu() {
  const menu = document.getElementById("menu");
  menu.style.display = menu.style.display === "flex" ? "none" : "flex";
}

let coin = 1000;

// SLOT
function slot(){
  if(coin < 50) return alert("Coin نیت 😅");
  coin -= 50;
  if(Math.random() < 0.35){
    coin += 150;
    slotResult.innerText = "بردیت! 🎉 +150";
  } else {
    slotResult.innerText = "باختیت 😢";
  }
  updateCoin();
}

// DICE
function dice(){
  if(coin < 30) return alert("Coin نیت 😅");
  coin -= 30;
  const roll = Math.floor(Math.random()*6)+1;
  if(roll >= 4){
    coin += 90;
    diceResult.innerText = "Dice: "+roll+" 🎉 بردیت +90";
  } else {
    diceResult.innerText = "Dice: "+roll+" 😢 باختیت";
  }
  updateCoin();
}

// CARD
function card(){
  if(coin < 40) return alert("Coin نیت 😅");
  coin -= 40;
  const card = Math.floor(Math.random()*13)+1;
  if(card >= 8){
    coin += 120;
    cardResult.innerText = "Card: "+card+" 🎉 بردیت +120";
  } else {
    cardResult.innerText = "Card: "+card+" 😢 باختیت";
  }
  updateCoin();
}

function updateCoin(){
  document.getElementById("coin").innerText = coin;
}