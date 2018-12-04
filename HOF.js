
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