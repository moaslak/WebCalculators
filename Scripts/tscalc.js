var results = [];
var result, resultString = "";
var a, b, count = 0;
var size = 6;
function inputFromSelect() {
    var selectedString = document.getElementById("resultsBox");
    var operator = " ";
    var index;
    var temp = "";
    for (var i = 0; i < selectedString.value.length; i++) {
        index = i;
        if (selectedString.value.charAt(i) != " ") {
            temp = temp + selectedString.value.charAt(i);
            a = temp;
        }
        else
            break;
    }
    document.getElementById("a").value = a;
    for (var i_1 = index; i_1 < selectedString.value.length; i_1++) {
        if (selectedString.value.charAt(i_1) == "+") {
            operator = "+";
            index = i_1;
            break;
        }
        if (selectedString.value.charAt(i_1) == "-") {
            operator = "-";
            index = i_1;
            break;
        }
        if (selectedString.value.charAt(i_1) == "*") {
            operator = "*";
            index = i_1;
            break;
        }
        if (selectedString.value.charAt(i_1) == "/") {
            operator = "/";
            index = i_1;
            break;
        }
    }
    document.getElementById("operator").innerHTML = operator;
    temp = "";
    for (var i_2 = index + 2; i_2 < selectedString.value.length; i_2++) {
        if (selectedString.value.charAt(i_2) != " ") {
            temp = temp + selectedString.value.charAt(i_2);
            b = temp;
        }
        else {
            index = i_2;
            break;
        }
    }
    document.getElementById("b").value = b;
    index = index + 3;
    temp = "";
    for (var i_3 = index; i_3 < selectedString.value.length; i_3++) {
        if (selectedString.value.charAt(i_3) != " ") {
            temp = temp + selectedString.value.charAt(i_3);
            result = temp;
        }
        else {
            index = i_3;
            break;
        }
    }
    document.getElementById("result").value = result;
}
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
function resultsToTextArea(resultString) {
    var selector = document.getElementById("resultsBox");
    count++;
    ClearTextArea();
    if (count % size == 0) {
        count--;
        results.unshift(resultString);
        results.pop();
    }
    else {
        results.unshift(resultString);
    }
    document.getElementById("result").value = result;
    document.getElementById("resultsBox").innerHTML = "";
    for (var i = 0; i < count; i++) {
        var option = new Option();
        option.text = results[i];
        document.getElementById("resultsBox").options.add(option);
    }
}
function Add() {
    a = parseFloat(document.getElementById("a").value);
    b = parseFloat(document.getElementById("b").value);
    result = a + b;
    if (b < 0)
        resultString = a + " + (" + b + ") = " + result + "\n";
    else
        resultString = a + " + " + b + " = " + result + "\n";
    resultsToTextArea(resultString);
}
function Diff() {
    a = parseFloat(document.getElementById("a").value);
    b = parseFloat(document.getElementById("b").value);
    result = a - b;
    if (b < 0)
        resultString = a + " - (" + b + ") = " + result + "\n";
    else
        resultString = a + " - " + b + " = " + result + "\n";
    resultsToTextArea(resultString);
}
function Multiply() {
    a = parseFloat(document.getElementById("a").value);
    b = parseFloat(document.getElementById("b").value);
    result = a * b;
    if (b < 0)
        resultString = a + " * (" + b + ") = " + result + "\n";
    else
        resultString = a + " * " + b + " = " + result + "\n";
    resultsToTextArea(resultString);
}
function Division() {
    a = parseFloat(document.getElementById("a").value);
    b = parseFloat(document.getElementById("b").value);
    if (b == 0) {
        alert("Cannot divide by ZERO");
        return 0;
    }
    else {
        result = a / b;
        if (b < 0)
            resultString = a + " / (" + b + ") = " + result + "\n";
        else
            resultString = a + " / " + b + " = " + result + "\n";
        resultsToTextArea(resultString);
    }
}
