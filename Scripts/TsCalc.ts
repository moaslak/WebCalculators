var results: string[] =[];
var result, resultString: string = "";
var a,b,count: number = 0;
var size: number = 6;

function inputFromSelect(){
    var selectedString = <HTMLSelectElement>document.getElementById("resultsBox");
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
    (<HTMLInputElement>document.getElementById("a")).value = a;
    for(let i = index; i < selectedString.value.length; i++){
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
    (<HTMLElement>document.getElementById("operator")).innerHTML = operator;
    temp = "";
    for(let i = index+2; i < selectedString.value.length; i++){
        if(selectedString.value.charAt(i) != " "){
            temp = temp + selectedString.value.charAt(i);
            b = temp;    
        }
        else{
            index = i;
            break;
        }      
    }
    (<HTMLInputElement>document.getElementById("b")).value = b;
    index = index + 3;
    temp = "";
    for(let i = index; i < selectedString.value.length; i++){
        if(selectedString.value.charAt(i) != " "){
            temp = temp + selectedString.value.charAt(i);
            result = temp;    
        }
        else{
            index = i;
            break;
        }
    }
    (<HTMLInputElement>document.getElementById("result")).value = result;
}

function Clear(){
    (<HTMLInputElement>document.getElementById("resultsBox")).value = "";
    for(var i = 0; i < count; i++){
        results[i] = "";
    }
    (<HTMLInputElement>document.getElementById("result")).value = "";
    
}

function ClearTextArea(){
    (<HTMLInputElement>document.getElementById("resultsBox")).value = "";
    (<HTMLInputElement>document.getElementById("result")).value = "";
}

function resultsToTextArea(resultString: string){
    var selector = (<HTMLSelectElement>document.getElementById("resultsBox"));
    
    count++;
    
    ClearTextArea();
    
    if(count % size == 0)
    {
        count--;
        results.unshift(resultString);
        results.pop();
    }
    else
    {
        results.unshift(resultString);
    }
    (<HTMLInputElement>document.getElementById("result")).value = result;
    (<HTMLSelectElement>document.getElementById("resultsBox")).innerHTML = "";
    for(var i = 0; i< count; i++){
        var option = new Option(); 
        option.text = results[i];
        (<HTMLSelectElement>document.getElementById("resultsBox")).options.add(option);
    }
    
}

function Add(){
    a = parseFloat((<HTMLInputElement>document.getElementById("a")).value);
    b = parseFloat((<HTMLInputElement>document.getElementById("b")).value);
    result = a + b;
    if(b < 0)
        resultString = a + " + (" + b + ") = " + result + "\n";
    else
        resultString = a + " + " + b + " = " + result + "\n";
    resultsToTextArea(resultString);
}

function Diff(){
    a = parseFloat((<HTMLInputElement>document.getElementById("a")).value);
    b = parseFloat((<HTMLInputElement>document.getElementById("b")).value);
    result = a-b;
    if(b < 0)
        resultString = a + " - (" + b + ") = " + result + "\n";
    else
        resultString = a + " - " + b + " = " + result + "\n";
    resultsToTextArea(resultString);
}

function Multiply(){
    a = parseFloat((<HTMLInputElement>document.getElementById("a")).value);
    b = parseFloat((<HTMLInputElement>document.getElementById("b")).value);
    result = a*b;
    if(b < 0)
        resultString = a + " * (" + b + ") = " + result + "\n";
    else
        resultString = a + " * " + b + " = " + result + "\n";
    resultsToTextArea(resultString);
}

function Division(){
    a = parseFloat((<HTMLInputElement>document.getElementById("a")).value);
    b = parseFloat((<HTMLInputElement>document.getElementById("b")).value);
    if(b == 0){
        alert("Cannot divide by ZERO");
        return 0;
    }
    else{
        result = a/b;
        if(b < 0)
        resultString = a + " / (" + b + ") = " + result + "\n";
    else
        resultString = a + " / " + b + " = " + result + "\n";
    resultsToTextArea(resultString);
    }
        
}