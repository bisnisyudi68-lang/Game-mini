const symbols = [

"👑",
"🔥",
"⚡",
"🎁"

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

  reels.forEach(function(reel){

    reel.innerText =
    randomSymbol();

  });

  document.getElementById("coin")
  .innerText = coin;

  document.querySelector(".result")
  .innerText = "SPIN BERHASIL 🎰";

}
