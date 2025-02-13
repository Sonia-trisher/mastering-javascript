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
// let i = 1;
// while( i<= 5){
//     console.log("hello world",i);
//     i++;
    
// }
//print "your name " 100 times to the console using while loop 
//interation will start from 10.
let i = 10;
while( i<=100){
    console.log("sonia", i);
    i++
    
}
//logical operator in javascript
//&& and ||
// let passWord = " huxn-webdev";
// if(passWord.length>=8 && passWord.includes("web")){
//     console.log( "valid passWord");
    
// }else{
//     console.log("invalid passWord");
// }//VALID PASSWORD(WE CONSIDER IF BOTH IS TRUE)

let passWord = " huxn-dev";
if(passWord.length>=8 || passWord.includes("web")){
    console.log( "valid passWord");
    
}else{
    console.log("invalid passWord");
}//VALID PASSWORD(IF ONE OF THEM IS TRUE)


// let isTrue = true;
// console.log((isTrue));//true


let isTrue = true;
console.log(!isTrue);//false

//arrays>0 index based

//empty array
const myList = [] ;
console.log(myList);

const myNumbers =[1,2,3,4,5];
console.log(myNumbers);

const stringArr =['eat','sleep','code','repeat'];
// accessing items from our array means to pick from array
console.log(stringArr[2]);

// two dimension//nested Array means array in another array
const nestArr =['one',['keza','babe','sonia'],1,true,false];
console.log(nestArr[1][1]);
//create array name (favSingers) store 3 favorite singers.
// log the first singer in that array
const favSingers = ['shawn Mendes','nelNgabo','andi Umuntu'];
console.log(favSingers[0]);
//create array name(favNumbers)& store 4 fav numbers
const favNumbers = ['1','4','7','8'];
console.log(favNumbers);
// create array name (mixedArr)store["string",["otherarray"],123,true]
//now access each item in that array by using[]notation
const mixedArr = ["string",["otherarray"],123,true];
console.log(mixedArr[0]);
console.log(mixedArr[1]);
console.log(mixedArr[2]);
console.log(mixedArr[3]);

 //array method 
const fruits = ['grapefruits','pinnaples','mangos','oranges','lemons'];
console.log(fruits.length);
 //push()= aads a new element to the end of an array and returns the new length of an array
fruits.push('banana')
console.log(fruits);

//pop()= removes the last element of an array and returns the removed element
fruits.pop()
console.log(fruits);
//shift= removes the first element of an array and returns the removed element
fruits.shift();
console.log(fruits);

//unshift = adds a new element to the beginning of an array and returns the new length of an array
const numbers = [2,22,33,44,55,66];
console.log(numbers);
numbers.unshift(3)
console.log(numbers);

// concat = joins two or more arrays and returns a result
const  DomesticAnimals = ['cat',"dog","rabbit"];
const  wildAnimals = [ "ZEBRA","lion","elephant"];
const Animals = DomesticAnimals.concat(wildAnimals);
console.log(Animals);

const pl =[ "javascript","php","python","java"];
const number12 =[10,20,33,11,2,3,4];
//includes = checks if an array contains a specified element
console.log(pl.includes("php"));
console.log(pl.join("-"));
// console.log(pl.reverse());
//slice = selects the part of an array and returns the new array
console.log(pl.slice(0,2));
console.log(number12);
//sort = sorts the elements alphabetically in strings and in ascending order
console.log(number12.sort());






















 