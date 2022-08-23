var a, b;

function Add(a,b){
    return a + b;
}

function Diff(a,b){
    return a-b;
}

function Multiply(a,b){
    return a*b;
}

function Division(a,b){
    if(b == 0){
        console.log("Cannot divide by zero");
        return 0;
    }
    return a/b;
}