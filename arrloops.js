'use strict';
function max(arr){
    if(arr.length === 0){
        return undefined;
    }
    let currentMax = arr[0];
    let i = 0;
    while(i < arr.length){
        if(arr[i] > currentMax){
            currentMax = arr[i];  
        }i++;
    
    }
    return currentMax;

}

//Min function without for

function min(arr){
    let currentMin = arr[0];
    if(arr.length === 0){
        return undefined;
    }
    let i = 0;
    while(i < arr.length){
        if(arr[i] < currentMin){
            currentMin = arr[i];  
        }i++;
    
    }
    return currentMin;

}

const myNum = [10, 3, 6, 2, 3, 100, 20];
// console.log(min(myNum));

function computeAverage(arr){
    let total = 0;
    arr.forEach(function(element){
        total += element}
    );
    return total / arr.length;
    }
    console.log(computeAverage(myNum)) 
