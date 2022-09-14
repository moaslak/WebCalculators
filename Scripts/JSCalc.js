let a, b, result, count = 0;
let resultString;
let size = 6;
let list = [];
let selectSize = "";

function inputFromSelect(){
    var selectedString = document.getElementById("resultsBox");
    var operator = " ";
    var index;
    var temp = "";
    for(var i = 0; i < selectedString.value.length; i++){
        index = i;
        
        if(selectedString.value.charAt(i) != " "){
            temp = temp + selectedString.value.charAt(i);
            a = temp;    
        }
        else
            break;
    }
    document.getElementById("a").value = a;
    for(var i = index; i < selectedString.value.length; i++){
        if(selectedString.value.charAt(i) == "+"){
            operator = "+";
                index = i;
                break;
        }
        if(selectedString.value.charAt(i) == "-"){
            operator = "-";
                index = i;
                break;
        }
        if(selectedString.value.charAt(i) == "*"){
            operator = "*";
                index = i;
                break;
        }
        if(selectedString.value.charAt(i) == "/"){
            operator = "/";
                index = i;
                break;
        }
    }
    document.getElementById("operator").innerHTML = operator;
    temp = "";
    for(var i = index+2; i < selectedString.value.length; i++){
        if(selectedString.value.charAt(i) != " "){
            temp = temp + selectedString.value.charAt(i);
            b = temp;    
        }
        else{
            index = i;
            break;
        }      
    }
    document.getElementById("b").value = b;
    index = index + 3;
    temp = "";
    for(var i = index; i < selectedString.value.length; i++){
        if(selectedString.value.charAt(i) != " "){
            temp = temp + selectedString.value.charAt(i);
            result = temp;    
        }
        else{
            index = i;
            break;
        }
    }
    document.getElementById("result").value = result;
}

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
    //document.getElementById("result").value = result;

    document.getElementById("resultsBox").innerHTML = "";

    for(var i = 0; i < list.length; i++){
        var li = document.createElement('option');
        li.value = list[i];
        li.text = list[i];    
        document.getElementById("resultsBox").options.add(li);
    }
    inputFromSelect();
    var sel = document.getElementById("resultsBox");
    var selText = sel.value;
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
    document.getElementById("operator").innerHTML = "";
    document.getElementById("a").value = 0;
    document.getElementById("b").value = 0;
    document.getElementById("result").value = 0;    
    document.getElementById("resultsBox").value = list;
}