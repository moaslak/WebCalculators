let a, b, result, count = 0;
let resultString;
let size = 6;
let list = [];

function resultToTextarea(resultString){
    count++;
    let resultToBox = "";
    if(count % size == 0)
    {
        list.pop();
        list.unshift(resultString);
        count--;   
    }
    else{
        list.unshift(resultString);
    }
    for(var i = 0; i < count; i++)
        resultToBox = resultToBox + list[i];
    document.getElementById("resultsBox").value = resultToBox;
    document.getElementById("result").value = result;
}

function Add(){
    a = document.getElementById("a").value;
    b = document.getElementById("b").value;
    result = Number(a) + Number(b);

    if(Number(b) < 0){
        resultString = (a + " + (" + b + ") = " + result + "\n");
    }
    else{
        resultString = (a + " + " + b + " = " + result + "\n");
    }
    resultToTextarea(resultString);
}

function Diff(){
    a = document.getElementById("a").value;
    b = document.getElementById("b").value;
    result = Number(a) - Number(b);
    if(Number(b) < 0){
        resultString = (a + " - (" + b + ") = " + result + "\n");
    }
    else{
        resultString = (a + " - " + b + " = " + result + "\n");
    }
    resultToTextarea(resultString);
}

function Multiply(){
    a = document.getElementById("a").value;
    b = document.getElementById("b").value;
    result = Number(a) * Number(b);

    if(Number(b) < 0){
        resultString = (a + " * (" + b + ") = " + result + "\n");
    }
    else{
        resultString = (a + " * " + b + " = " + result + "\n");
    }
    resultToTextarea(resultString);
}

function Division(){
    a = document.getElementById("a").value;
    b = document.getElementById("b").value;
    
    if(b == 0){
        window.alert("Cannot divide by zero");
    }
    else{
        result = Number(a) / Number(b);
        if(Number(b) < 0){
            resultString = (a + " / (" + b + ") = " + result + "\n");
        }
        else{
            resultString = (a + " / " + b + " = " + result + "\n");
        }
        resultToTextarea(resultString);
    }
}

function Clear(){
    while(Number(count) != 0){
        list.pop()
        count--;
    }
        
    document.getElementById("resultsBox").value = list;
}