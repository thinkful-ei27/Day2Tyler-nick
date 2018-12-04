function repeat(fn, n){
    for(let x = 0; x < n; x++){
        fn;
        console.log(x);
    }
}

function hello(){
    console.log("Hello, World");
}

function goodbye(){
    console.log("Goodbye, cruel world");
}

repeat(hello(), 5);