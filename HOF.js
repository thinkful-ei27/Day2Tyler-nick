'use strict';
function repeat(fn, n){
    for(let x = 0; x < n; x++){
        fn();
    }
}

let hello = function(){
    console.log("Hello, World");
}

function goodbye(){
    console.log("Goodbye, cruel world");
}

repeat(hello, 5);
repeat(goodbye, 1);


function filter(arr, fn) {
    let myArr = [];
    for(let i = 0; i < arr.length; i++){
        if(fn(arr[i]) === true){
            myArr.push(arr[i]);
        }
    }
    return myArr;
}
function filterbyR(word){
    if(word[0] === 'R'){
        return true;
    }
}

// DO NOT EDIT BETWEEN THESE LINES, BUT DO READ THE CODE ----->
// First we setup an array of strings we plan to filter:
const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];

// We use your `filter` function here, capturing a new array into `filteredNames`
// comprised of names that only begin with 'R'
const filteredNames = filter(myNames, function(name) {
    // This is known as a "predicate function" - it's a function that 
    // only returns a boolean
    return name[0] === 'R';
});

console.log(filteredNames) // => ['Rich', 'Ray']
// <---- DO NOT EDIT BETWEEN THESE LINES


//Functions as return values: hazard warning creator
function hazardWarningCreator(typeOfWarning){
  let warningCounter = 0;
  return function(location){
      warningCounter++
      console.log(`DANGER! THERE IS A ${typeOfWarning}! HAZARD ALERT HAS TRIGGERED ${warningCounter} time(s) TODAY!`);
  };
}

const rocksWarning = hazardWarningCreator('rocks on the road');
const willRobinson = hazardWarningCreator('Will Robinson on the station');
const snowing = hazardWarningCreator('BLIZZARD IN NOVEMBER');
rocksWarning('Vancouver, Washington');
willRobinson('OuterSpace/England?');
snowing('Kansas City, Missouri');

rocksWarning('Vancouver, Washington');
willRobinson('OuterSpace/England?');
snowing('Kansas City, Missouri');


const turtleMovements = [[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]];
let filteredMovements = turtleMovements.filter(num => num[0] >= 0 && num[1] >= 0);





