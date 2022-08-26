var results = [];
var result, resultString = "";
var a, b, count = 0;
var size = 6;
function Clear() {
    document.getElementById("resultsBox").value = "";
    for (var i = 0; i < count; i++) {
        results[i] = "";
    }
    document.getElementById("result").value = "";
}
function ClearTextArea() {
    document.getElementById("resultsBox").value = "";
    document.getElementById("result").value = "";
}
function resultsToTextArea(results) {
    ClearTextArea();
    if (count % size == 0) {
        count--;
        results.pop();
    }
    var latestResult = results[0];
    document.getElementById("result").value = result;
    for (var i = 0; i < count; i++) {
        resultString = resultString + results[i];
    }
    document.getElementById("resultsBox").value = resultString;
    resultString = "";
}
function Add() {
    count++;
    a = parseFloat(document.getElementById("a").value);
    b = parseFloat(document.getElementById("b").value);
    result = a + b;
    results.unshift(a + " + " + b + " = " + result + "\n");
    resultsToTextArea(results);
}
function Diff() {
    count++;
    a = parseFloat(document.getElementById("a").value);
    b = parseFloat(document.getElementById("b").value);
    result = a - b;
    results.unshift(a + " - " + b + " = " + result + "\n");
    resultsToTextArea(results);
}
function Multiply() {
    count++;
    a = parseFloat(document.getElementById("a").value);
    b = parseFloat(document.getElementById("b").value);
    result = a * b;
    results.unshift(a + " * " + b + " = " + result + "\n");
    resultsToTextArea(results);
}
function Division() {
    a = parseFloat(document.getElementById("a").value);
    b = parseFloat(document.getElementById("b").value);
    if (b == 0) {
        alert("Cannot divide by ZERO");
        return 0;
    }
    else {
        count++;
        result = a / b;
        results.unshift(a + " / " + b + " = " + result + "\n");
        resultsToTextArea(results);
    }
}
