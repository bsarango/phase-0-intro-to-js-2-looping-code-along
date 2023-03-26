// Code your solutions in this file


function writeCards(listOfNames,event){
    const cardsToReturn = [];
    for(let i=0; i<listOfNames.length; i++){
        cardsToReturn.push(`Thank you, ${listOfNames[i]}, for the wonderful ${event} gift!`);
    }
    return cardsToReturn;
}

writeCards(["Guadalupe","Ollie","Aki"],"surprise");

function countDown(posInteger){
    let countNum = posInteger;
    while(countNum > 0){        //Only will console.log values to 1 since the > will not work once countNum == 0
        console.log(countNum);
        countNum--;
    }
    console.log(countNum);      //add console.log after the loop to always console.log the value of 0
}

