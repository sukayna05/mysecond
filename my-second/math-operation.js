






var sum = 2+2;
var sub = 4-2;
var mult =5*2;
var division = 10/5;

alert ("2=2="+sum);
alert("4-2="+sub);
alert("2*5="+mult);
alert("10/5="+division);

var numOne = prompt("enter number one:");
var numTwo = prompt("enter the second Number: ");

var operation = prompt("enter the one operation as following; + , - , * , /");

calculations(operation);


function calculations(operation) {

    //if the operation is sum or + then call the sum function  
    if(operation == '+'){
        sum();
    } else if(operation == '-'){
     sub()
    } else if (operation == '*') {
       mult
    } else if (operation == '/'){
    division
    }

}

function sum() {
var sumtotal = parseInt(numOne) + parseInt (numTwo) ;
alert (sumtotal);
}

function sub (params) {
    var subtotal = parseInt(numOne) - parseInt(numTwo);
  alert(subtotal);
}

function mult(params) {
    var multitotal = parseInt(numOne) - parseInt(numTwo);
    alert(multitotal);
}

function division (params){
    var divisiontotal = parseInt(numOne) / parseInt (numTwo);
    alert ( divisiontotal );

}