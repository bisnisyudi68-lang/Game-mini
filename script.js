const symbols = ["🍒","⭐","💎","7️⃣","🔔"];

let coin = 1000;

function randomSymbol(){

  return symbols[
    Math.floor(Math.random() * symbols.length)
  ];

}

function spin(){

  if(coin < 50){

    document.querySelector(".result")
    .innerText = "Coin habis!";

    return;
  }

  coin -= 50;

  let a = randomSymbol();
  let b = randomSymbol();
  let c = randomSymbol();

  document.getElementById("r1").innerText = a;
  document.getElementById("r2").innerText = b;
  document.getElementById("r3").innerText = c;

  let result = "Kalah 😢";

  if(a === b && b === c){

    coin += 300;
    result = "JACKPOT 🎉 +300";

  }
  else if(a === b || b === c || a === c){

    coin += 100;
    result = "Menang kecil ✨ +100";

  }

  document.getElementById("coin")
  .innerText = coin;

  document.querySelector(".result")
  .innerText = result;

}
