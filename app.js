/*
function Say(){
alert("Hello");	
}
function EventHandler(){

alert("I am an event handler");
}

function getValue(){
var retVal = prompt("Enter your name : ", "your name here");
var age = prompt("Enter your age : ","Your age here");
if (retVal =="Boniphace Udoya"&& age >=18){
	document.write("<b>Welcome : </b>" + retVal);
	document.write("<br/>")
	document.write("<b>Your age is  : </b>" + age);
}
else{
document.write("You have entered incorrect name " );	
}

}

function getUser(){
	var student = new Array("kaka", "dada", "Mjomba");
	for (x in student){
		document.write(x);
		document.write("<br>");
	}
}

function getUser(){
	var student = new Array("kaka", "dada", "Mjomba");
	for (var x=0;x<student.length;x++){
		document.write(student[x]);
		document.write("<br>");
	}
}
*/


function getUser(){
	var x = 1;
	while ( x < 100){
		x+=1
		if ( x =50){
			continue;
		}
		document.write(x);
		document.write("<br>");
	}
}