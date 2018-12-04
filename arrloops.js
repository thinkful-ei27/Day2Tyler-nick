'use strict';
function max(arr){
    let currentMax = arr[0];
    let i = 0;
    while(i < arr.length){
        if(arr[i] > currentMax){
            currentMax = arr[i];  
        }i++;
    
    }
    return currentMax;

}

