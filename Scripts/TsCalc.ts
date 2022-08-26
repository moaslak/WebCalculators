var results: string[] =[];
var result, resultString: string = "";
var a,b,count: number = 0;
var size: number = 6;

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

function resultsToTextArea(results: string[]){
    ClearTextArea();
    if(count % size == 0){
        count--;
        results.pop();
    }
    let latestResult: string = results[0];
    (<HTMLInputElement>document.getElementById("result")).value = result;
    for(var i = 0; i< count; i++){
        resultString = resultString + results[i];
    }
    (<HTMLInputElement>document.getElementById("resultsBox")).value = resultString;
    resultString = "";
}

function Add(){
    count++;
    a = parseFloat((<HTMLInputElement>document.getElementById("a")).value);
    b = parseFloat((<HTMLInputElement>document.getElementById("b")).value);
    result = a + b;
    results.unshift(a + " + " + b + " = " + result + "\n");
    resultsToTextArea(results);
}

function Diff(){
    count++;
    a = parseFloat((<HTMLInputElement>document.getElementById("a")).value);
    b = parseFloat((<HTMLInputElement>document.getElementById("b")).value);
    result = a-b;
    results.unshift(a + " - " + b + " = " + result + "\n");
    resultsToTextArea(results);
}

function Multiply(){
    count++;
    a = parseFloat((<HTMLInputElement>document.getElementById("a")).value);
    b = parseFloat((<HTMLInputElement>document.getElementById("b")).value);
    result = a*b;
    results.unshift(a + " * " + b + " = " + result + "\n");
    resultsToTextArea(results);
}

function Division(){
    a = parseFloat((<HTMLInputElement>document.getElementById("a")).value);
    b = parseFloat((<HTMLInputElement>document.getElementById("b")).value);
    if(b == 0){
        alert("Cannot divide by ZERO");
        return 0;
    }
    else{
        count++;
        result = a/b;
        results.unshift(a + " / " + b + " = " + result + "\n");
        resultsToTextArea(results);
    }
        
}