/*Simple calculator project */
let a = 240.25;
let b = 3.14;
let c = a * b;

   console.log (c); 
 
/* A quick quiz for Mr.Robot*/

let name = "Peter Pham ";
let name1 = "Nicole";
let result = name > name1;

if (name > name1) {

    console.log (`"Yes, way smarter!!!"`);

} else {

    alert("Error occur please restart your device!");
}

/*Favorite fruits */

let products = ["apple, Banana, pineapple, watermelon, guava"];

let hasBanana = [false, false, false, false, true];
let i = 0;

 while (i < hasBanana.length) {
     if(hasBanana[i]) {
         console.log(products[i] + " contains Banana!");
     } 
    i = i + 1;
 }
 
 /*Getting the highest score */
 
 function printAndGetHighScore(scores){
     let highScore = 0;
     let output;
    for (let i = 0; i < highScore.length; i++) {
     output = "Bubble solution #" + 1 + "score:" + scores[i];
       console.log (output);
     if (score[i] > highScore) {
         highScore = score[i];
     }
 }
 return highScore;
}
   printAndGetHighScore();

//Simple strings.

let myFirstString = "Peter Pham";
let mySecondString = "Mr.";
let myThirdString = "P.H.P";
let myFourthString = "man";

  let shortStory = "Hi, how do you know " + mySecondString + myFirstString + "?. AKA the CEO of " + myThirdString +
 ". One of the largest company!. " + myFirstString + " is a clever " + myFourthString + "." ;

     console.log(shortStory);

     //Function pratice.

        function myPracticeFunction (sayingHi) {
             console.log ("HOLA");
     }

     myPracticeFunction();
     myPracticeFunction();
     myPracticeFunction();
     myPracticeFunction();
     myPracticeFunction();
         
//Practice3.

    function positiveSix(num) {
      return num + 6;
    }

console.log (positiveSix(5));

//Practice2.

let num = myMathFunc(3,9);

function myMathFunc(a, b) {
    return 3 * 9;
   
}
console.log(myMathFunc(a*b));

//Practice3.

function trueOrFalse(itIsTrue) {
    if (itIsTrue) {
        return "Yup!";
    }
        return "Nope!";
}

console.log(trueOrFalse(false));
//Practice4.

function testEqualOrNot(value) {
    if (value == 12.3) {
        return "Equal!";
    }
        return "Not equal!";
}

console.log(testEqualOrNot(12.30));

/*Practice5*/


let myFirstText = " True";
let mySecondText = " False";
let myThirdText = " the same";
//Seperate
let Peter = 6;
let Matt = 2;
          //+
let Nicole = 4;

function testToSeeWhichOneIsBetter(strings) {
    if (strings > Nicole + Matt) {
              return "This is 100%" + myFirstText;   
  } else if (strings < Nicole + Matt) {
              return "This is 100%"  + mySecondText;
  } else if (strings = Nicole + Matt) {
              return "This is 100%" + myThirdText;
  } else {
              alert("*****xxxxxError 05 occurxxxxx*****");
    }
}
console.log(testToSeeWhichOneIsBetter(Peter));

/*Practice display on HTML*/

//document.getElementById().innerHTML 

//Calculate area of circle.

let circleRadius = 15.5;
let circleArea =
   Math.PI * (circleRadius * circleRadius);
let mySign = "cm2";

  console.log(circleArea + mySign);
  //Switch practice
let list1 = ["apple", "banana", "cat", "dog"];

function myFirstSwitch(value) {
   let answer = "";
   switch (value) {
       case "x":
           answer = "11";
           break;
       case "y": 
           answer = "12";
           break;
       case "z":
           answer = "13";
           break;
       default:
           answer = "!!!";
           break;
   }
  return answer;
}
console.log(myFirstSwitch("y"));
//Switch practice 2.

function mySecondSwitch(value1) {
    let answer = "";
    switch (value1) {
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            answer = "Group 1";
            break;
        case 6:
        case 7:
        case 8:
        case 9:
        case 10:
            answer = "Group 2";
            break;
    }
    return answer;
}
console.log(mySecondSwitch(5));

let count = 0;

/*function cc(card){
    switch(card) {
        case 2:
        case 3:
        case 4:
        case 5: 
        case 6:
            count++;
            break;
        case 10:
        case "J":
        case "Q":
        case "K":
        case "A":
             count--;
             break;  
    }
/*
//Object.
//Prompt little project.

/*var someOfValue = prompt ("Enter any digits of anything on keyboard");
    console.log("Your entered value is " + someOfValue);
   var someNum = "5";
   var someVar = "$$$$$";
   var someVarOne = "^";
   var someVarTwo = "^";

   if (someOfValue > someNum || someOfValue == someVar || someOfValue == someVarOne + " HOLA " + someVarTwo) {
        console.log("GREAT JOB!");
} else {
        console.log("TRY HARDER NEXT TIME!");
}*/
//Example from book.


/*
//Personal money robot project.

let myMoneyAmount$ = 50;
let itemsAmount = prompt ("Enter items cost $");
let myActualAmountLeftAfter = 0;
var PhoneNum = "(780) 699-4088";
let amountAfter = (myMoneyAmount$ - itemsAmount);
let contactLink = ("www.rbcroyalbank.com");

function tellUserToSeeIfPossible() {
     if (myMoneyAmount$ - itemsAmount >= myActualAmountLeftAfter) {
        alert("TRANSACTION COMPLETED. Thank you for using us.");
         alert("Your bank account balance: $" + (amountAfter));
   } else if (myMoneyAmount$ - itemsAmount < myActualAmountLeftAfter) {  
        alert("There is a problem ERROR****-3**** please visit our website at " + contactLink + " to find out why or call" + PhoneNum);
         prompt("Your bank account balance will become:  " + amountAfter + " $ " + ". Do you wish to continue? (Y or N)");
          document.write("Visit our website www.rbcroyalbank.ca or call " + PhoneNum + " for more info.");
   } else {
        console.log("ERROR please reload the page %&^%&*##($)!%");
    }  
}
console.log(tellUserToSeeIfPossible());
// Event listener practice

   document.getElementById('img-p1').addEventListener('dblclick', dblclickHandler);

function dblclickHandler() {
    document.getElementById('img-p1').src ='https://www.mdgadvertising.com/wp-content/uploads/2013/07/blog_25th-Anniversary-Just-Do-It.jpg';
}

*/