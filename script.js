const symbols = [

"🍉",
"🍇",
"🍋",
"🍒",
"💎",
"⚡",
"🔥",
"👑"

];

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

  let reels =
  document.querySelectorAll(".reel");

  let counts = {};

  reels.forEach(function(reel){

    let sym = randomSymbol();

    reel.innerText = sym;

    if(counts[sym]){

      counts[sym]++;

    }else{

      counts[sym] = 1;

    }

  });

  let win = false;
  let totalWin = 0;

  for(let key in counts){

    if(counts[key] >= 8){

      win = true;

      totalWin += counts[key] * 20;

    }

  }

  if(win){

    coin += totalWin;

    document.querySelector(".result")
    .innerText =
    "WINNER 🎉 +" + totalWin;

  }else{

    document.querySelector(".result")
    .innerText =
    "Kalah 😢";

  }

  document.getElementById("coin")
  .innerText = coin;

}
