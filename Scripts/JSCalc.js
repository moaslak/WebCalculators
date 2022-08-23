var a, b;

function Add(){
    a = document.getElementById("a").value;
    b = document.getElementById("b").value;
    window.alert(Number(a) + " + " + Number(b) + " = " + (Number(a) + Number(b)));
}

function Diff(a,b){
    a = document.getElementById("a").value;
    b = document.getElementById("b").value;
    window.alert(Number(a) + " - " + Number(b) + " = " + (Number(a) - Number(b)));
}

function Multiply(a,b){
    a = document.getElementById("a").value;
    b = document.getElementById("b").value;
    window.alert(Number(a) + " * " + Number(b) + " = " + (Number(a) * Number(b)));
}

function Division(a,b){
    a = document.getElementById("a").value;
    b = document.getElementById("b").value;
    if(b == 0){
        window.alert("Cannot divide by zero");
    }
    else{
        window.alert(Number(a) + " / " + Number(b) + " = " + (Number(a) / Number(b)));
    }
    
}