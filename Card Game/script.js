let yourSum = 30;
let dealerSum = 50;

let cardValue = ""




window.onload = function() { 
  buildDeck();
  shuffleDeck();
  dealerGetCard();
  showCard();
 
  
 
}

function buildDeck() {
  let values = ["2","3","4","5","6","7","8","9","10","J","Q","K","A"];
  let types = ["C","D","H","S"];
  deck = [];

      for(let i = 0; i < types.length; i++){
        for(let j = 0; j < values.length; j++){
          deck.push(values[j] + "-" + types[i]);
      }
    }
    console.log(deck);
}

function shuffleDeck(){
  for(let i = 0; i < deck.length; i++){
    let j = Math.floor(Math.random() * deck.length);
    let temp = deck[i];
    deck[i] = deck[j];
    deck[j] = temp;
}
//console.log(deck);
}


function dealerGetCard(){
   let index = Math.floor(Math.random() * deck.length);
   let dealerCard = deck[index];
   deck.filter(card => card != dealerCard);
   //console.log(dealerCard);
   return dealerCard;
    
  }

  function showCard(){
   let yourCard = document.querySelector("#yourCards");
   let topCard = deck[0];
   deck = deck.filter(card => card != topCard)
   let img = document.createElement('img')
   img.src = `./cards/${topCard}.png`;
   yourCard.appendChild(img);

   

}



function higher(){
  let giveCard = dealerGetCard();
  let yourCard = document.querySelector("#yourCards");
  deck = deck.filter(card => card != giveCard);
  let img = document.createElement('img');
  img.src = `./cards/${giveCard}.png`;
  yourCard.appendChild(img);
  //update the player score
  let cardLet = giveCard.split('-')[0];
  let oldCard = cardValue.split('-')[0];
 //Number(giveCard[0]) > Number(cardValue[0]);
    if(isNaN(cardLet) && !isNaN(oldCard)){
          yourSum += 15;
          dealerSum -= 15;
    }else if(isNaN(oldCard) && !isNaN(cardLet)){
          yourSum -= 15;
          dealerSum += 15;

      }else if (!isNaN(cardLet) && !isNaN(oldCard)){
      //if both cards are numbers;
       let oldCardNum = Number(oldCard);
       let cardLetNum = Number(cardLet);
       if(cardLetNum > oldCardNum){
        yourSum += 15;
        dealerSum -= 15;
       }else{
        yourSum -= 15;
        dealerSum += 15;
       }
    }else if(isNaN(cardLet) && isNaN(oldCard)){
      if(cardLet == "A" && oldCard == "K"){
        yourSum += 15;
        dealerSum -= 15;
      }else if(cardLet =="A" && oldCard == "Q"){
        yourSum += 15;
        dealerSum -= 15;
      }else if (cardLet == "A" && oldCard == "J"){
        yourSum += 15;
        dealerSum -= 15;
      }else if(cardLet == "K" && oldCard == "A"){
        yourSum -= 15;
        dealerSum += 15;
      }else if(cardLet == "K" && oldCard == "Q"){
        yourSum +=15;
      }else if(cardLet == "K" && oldCard == "J"){
        yourSum +=15;
      }else if (cardLet == "Q" && oldCard == "A"){
        yourSum -= 15;
        dealerSum += 15;
      } else if (cardLet == "Q" && oldCard == "K"){
        yourSum -= 15;
        dealerSum += 15;
      }else if (cardLet == "Q" && oldCard == "J"){
        yourSum += 15;
        dealerSum -= 15;
      }else if(cardLet == "J" && oldCard == "A"){
        yourSum -= 15;
        dealerSum += 15;
      }else if (cardLet == "J" && oldCard == "K"){
        yourSum -= 15;
        dealerSum += 15;
      }else if (cardLet == "J" && oldCard == "Q"){
        yourSum -= 15;
        dealerSum += 15;
      }
    }

    
    
    cardValue = giveCard;
    console.log(yourSum)
document.querySelector("#yourSum").innerText = yourSum;
document.querySelector("#dealerSum").innerText = dealerSum;
gameOver();
}

function lower(){
  let giveCard = dealerGetCard();
  let yourCard = document.querySelector("#yourCards");
  deck = deck.filter(card => card != giveCard);
  let img = document.createElement('img');
  img.src = `./cards/${giveCard}.png`;
  yourCard.appendChild(img);
  //update the player score
  let cardLet = giveCard.split('-')[0];
  let oldCard = cardValue.split('-')[0];
 //Number(giveCard[0]) > Number(cardValue[0]);
    if(isNaN(cardLet) && !isNaN(oldCard)){
          yourSum -= 15;
          dealerSum += 15;
    }else if(isNaN(oldCard) && !isNaN(cardLet)){
          yourSum += 15;
          dealerSum -= 15;

      }else if (!isNaN(cardLet) && !isNaN(oldCard)){
      //if both cards are numbers;
       let oldCardNum = Number(oldCard);
       let cardLetNum = Number(cardLet);
       if(cardLetNum > oldCardNum){
        yourSum -= 15;
        dealerSum += 15;
       }else{
        yourSum += 15;
        dealerSum -= 15;
       }
    }else if(isNaN(cardLet) && isNaN(oldCard)){
      if(cardLet == "A" && oldCard == "K"){
        yourSum -= 15;
        dealerSum += 15;
      }else if(cardLet =="A" && oldCard == "Q"){
        yourSum -= 15;
        dealerSum += 15;
      }else if (cardLet == "A" && oldCard == "J"){
        yourSum -= 15;
        dealerSum += 15;
      }else if(cardLet == "K" && oldCard == "A"){
        yourSum += 15;
        dealerSum -= 15;
      }else if(cardLet == "K" && oldCard == "Q"){
        yourSum -=15;
      }else if(cardLet == "K" && oldCard == "J"){
        yourSum -=15;
      }else if (cardLet == "Q" && oldCard == "A"){
        yourSum += 15;
        dealerSum -= 15;
      } else if (cardLet == "Q" && oldCard == "K"){
        yourSum += 15;
        dealerSum -= 15;
      }else if (cardLet == "Q" && oldCard == "J"){
        yourSum -= 15;
        dealerSum += 15;
      }else if(cardLet == "J" && oldCard == "A"){
        yourSum += 15;
        dealerSum -= 15;
      }else if (cardLet == "J" && oldCard == "K"){
        yourSum += 15;
        dealerSum -= 15;
      }else if (cardLet == "J" && oldCard == "Q"){
        yourSum += 15;
        dealerSum -= 15;
      }
    }

    
    
    cardValue = giveCard;
    console.log(yourSum)
document.querySelector("#yourSum").innerText = yourSum;
document.querySelector("#dealerSum").innerText = dealerSum;
gameOver();
}

function ace(){
  let giveCard = dealerGetCard();
  let yourCard = document.querySelector("#yourCards");
  deck = deck.filter(card => card != giveCard);
  let img = document.createElement('img');
  img.src = `./cards/${giveCard}.png`;
  yourCard.appendChild(img);
  //update the player score
  let cardLet = giveCard.split('-')[0];
  if(cardLet == "A"){
    yourSum += 30;
    dealerSum -= 15;
  }else{
    yourSum -= 30;
    dealerSum += 30;
  }
  cardValue = giveCard;
  console.log(yourSum)
document.querySelector("#yourSum").innerText = yourSum;
document.querySelector("#dealerSum").innerText = dealerSum;
gameOver();
}



 function gameOver(){
  let game = document.querySelector("#results");
  let isgameOver = false;
  if(yourSum < 0){
    game.textContent = "The Dealer has claimed another soul and pockets"
    isgameOver = true;
  }else if(yourSum >= 100){
    game.textContent = "You have done the impossible"
    isgameOver = true;
  }else if (dealerSum < 0){
    game.textContent ="I will return to claim your soul and your pockets!"
    isgameOver = true;
  }else if (dealerSum >= 100){
   game.textContent = "Is this all the money you got?"
   isgameOver = true;
  }
 if (isgameOver){
  document.querySelector("#retrybtn").style.display = "block"
 }
}
  

document.querySelector("#higher").addEventListener('click', higher);
document.querySelector("#lower").addEventListener('click', lower);
document.querySelector("#ace").addEventListener('click', ace);
document.querySelector("#yourSum").innerText = yourSum;
document.querySelector("#dealerSum").innerText = dealerSum;

