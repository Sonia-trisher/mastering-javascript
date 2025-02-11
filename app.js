//valiable
//  log = console.log();
//  clg = console.log(object);
// console.log();
// console.log('object');
// declared valiable
// let name ;
// assign value
let banana;
banana = "banana"
console.log(banana);
const youtubeChannel ="mrbeast";
// youtubeChannel = "huxn webdev";
console.log(youtubeChannel);

// create is the same to declare and to store is to initialized 
// primitive types
// 1.number
// let num =2;
// // basic math
// console.log(2+2) ;
// console.log(2-2) ;
// console.log(2*2) ;
// console.log(2/2) ;
// console.log(2%2) ;modules
// console.log(2**2) ;powe


let counter = 10;
// counter--;increement
counter--;
console.log(counter);

let firstNum = 5;
let secondNum= 6;
add = firstNum+secondNum;
subtract= firstNum-secondNum;
multiply= firstNum*secondNum;
divided= firstNum-secondNum;
mod= firstNum%secondNum;
power= firstNum**secondNum;

console.log(firstNum+secondNum);
console.log(firstNum-secondNum);
console.log(firstNum*secondNum);
console.log(firstNum/secondNum);
console.log(firstNum%secondNum);
console.log(firstNum**secondNum);
// check like log same how
// bollean
 let notDefined= null;
 console.log(notDefined);

//  let isIsSoft= true;
//  let isIsHard= false;
//  let favNumb =7;
//  console.log(isIsSoft );
 
//  console.log(favNumb+undefined )

// //  true/false(relation operator)
// // console.log(10>10); //false
// // console.log(10<10);//false
// // console.log(10<=10);//true
// // console.log(10>=10);//true

// //equality operator
// //=== strict equality
// //==lose equality
// console.log(10===10);//true
// console.log(10==10);//false
// console.log(10==="10");//false
// console.log(10=="10");//true it doesn't matter whether these string or not



let firstfavNumb= 2;
let secondfavNumb= 6;
// console.log(firstfavNumb>secondfavNumb);
// console.log(firstfavNumb<secondfavNumb);
// console.log(firstfavNumb>=secondfavNumb);
// console.log(firstfavNumb<=secondfavNumb);
// console.log(firstfavNumb===secondfavNumb);
// console.log(firstfavNumb==secondfavNumb);
// console.log(firstfavNumb===!secondfavNumb);
// console.log(firstfavNumb==!secondfavNumb);

// //string
// let firstName = "sonia";
// let secondName = 'leys';
// let fullName = firstName+secondName;
// console.log(firstName);
// console.log(secondName);
// console.log (fullName);

//.concatenation
// let firstName = "       sonia    ";
// let secondName = 'leys';
// console.log(firstName);

// // let fullName= firstName.concat(secondName)
// // console.log(fullName);

// // .append
// // firstName += "everything"
// // console.log(firstName); 
 
// // .length
// console.log(firstName.length);
// //.case
// // console.log(firstName.toLowerCase());
// // console.log(firstName.toUpperCase());
// //.slice
// console.log( firstName.slice(0,3));
// //.includes
// console.log(firstName.includes("x"));
// //.TRIM
// console.log(firstName.trim());

// //butics
let desc = `this everything  
text
`;
 console.log(desc);


let firstName = "keza";
let secondName = "Sonia";
// fullName = `${firstName} ${secondName} everything`;
// console.log(fullName);

// exercises
let facActorFirstName = "keza  ";
let facActorSecondName = "sonia ";
let fullName = facActorFirstName.concat(facActorSecondName);
let upperCase= fullName.toUpperCase();
let message = `my fovorite actor is ${upperCase},`;
message += "his best  tv show is silicon valley";
console.log(message);

// let money = "50";
// console.log(money); 
// // convert string to number
// // money = parseInt(money)
// // money = +money;
// money = Number(money);
// console.log(typeof money);

let money = 50;
console.log(money);
// convert number to String
// money = money.toString();
money = String(money);

console.log(typeof money);

//CONDITION STATEMENT
// if (condition){...}
// else if()
// else

let a = 9;
let b = 20; 

if (a > b) {
    console.log("a is greater then b");

}else if(a<b){
    console.log("a is  less then  b ");
       
}else{
    console.log("a is equal to   b");
    
}
let time = 30;
let greetings;
if(time>10){
    greetings ="Good morning";
    console.log(greetings);

}else if (time < 20){
    greetings = "Good day";
    console.log(greetings);
}else{
    greetings ="Good Evening";
    console.log(greetings);
}

// EXERCISE
let password = 8;
if (password ==8){
    password = "welcame"
    console.log(password)
}else if(password<=8){
    console.log("password is too short");
    
}else if( password>= 8){
    console.log("too long password");
    console.log("password should be 8");
    
}else{
    console.log("please provide a password");
    
}
//switch statement 
// switch (){
// case1:
// print;
// break;
// case 2:
// print;
// break;
// }
// example
let day = "friday";//if is number u don't but the string 
switch(day){//is like if condition (if ())
    case "monday":
        console.log("today is monday");
        break;
        case "tuesday":
            console.log("today is tuesday");
            break;
            case "thursday":
                console.log("today is thursday");
                Break;
                default:
                    console.log("i don't know the day");
}
let fruit = "lemon"
switch(fruit){
    case"Banana":
    console.log("Banana is good");
    break;

    case"Apple":
    console.log("How you like them apples");
    break;

  case"Orange":
    console.log("I am not fun of Orange");
    break;
    default:
        console.log( "I have never heard of that fruit");
}
// for loop
//for(initialExpression; condition;incrementExpretion){ }

//   for(let index = 0; index<Array.length;index++){
// const element = array[index];
//   }
  //example
//   for (let i = 1; i<=100; i++){
//     console.log(i);
    
//   } 
//   //print your  name and numbers from 0 through 1000  
// for (let i = 0; i<=10; i++){
//     console.log("sonia",i);
// }
    
    
//while(condition){
//code block to be executed.
//}
let i = 1;
while( i<= 5){
    console.log("hello world",i);
    i++;
    
}


















 