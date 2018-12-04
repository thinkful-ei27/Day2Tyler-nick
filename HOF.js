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

const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];
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
console.log(myNames.filter(word => word[0] === 'R'))

// DO NOT EDIT BETWEEN THESE LINES, BUT DO READ THE CODE ----->
// First we setup an array of strings we plan to filter:


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
    warningCounter++;
    let times = 's';
    if(warningCounter === 1){times = '';}
      console.log(`DANGER! THERE IS A ${typeOfWarning}! HAZARD ALERT HAS TRIGGERED ${warningCounter} time${times} TODAY!`);
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

const totalMovement = turtleMovements.map(x => x[0] + x[1]);

turtleMovements.forEach(function(element){
    console.log(element[0] + element[1]);  
});

//reduce function (Decoding!)

const decodingArray = 'noggin oreo the moon time tele steed his \
tent apollo her lives though shoo tofu budapest'.split(' ');

const reducer = (accumulator, currentValue) => {
  if(currentValue.length === 3){
      return accumulator + ' ';
  } else return accumulator + currentValue[currentValue.length - 1].toUpperCase();
};

console.log(decodingArray.reduce(reducer, ''));

/*console.log(decodingArray.reduce('', currentValue)) => accumulator + (if(currentValue.length === 3){
    return ' ';
} else return currentValue[currentValue.length - 1].toUpperCase();)*/

//This is not what we were supposed to do
/*const reducer = function(array){
    let tempString ='';
    for(let x = 0; x < array.length; x++){
        if(array[x].length === 3){
            tempString = tempString + ' ';
        } else tempString = tempString + array[x][array[x].length - 1].toUpperCase();
    }
    return tempString;
}

console.log(reducer(decodingArray)); */