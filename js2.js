var a = 5;
    b = 4;
    c = 0;    
    value = (a*a) + (2 * a * b) - (b*b);

console.log(value);

function compare() {
	if (value >= 0){
		console.log("wynik dodatni");	 
	}	
	else{
		console.log("wynik ujemny");	
	}
}	

compare()

function compare2() {
	if (value == c){
		console.log("wartość równa zeru");	 
	}	
	else{
		console.log("wartość inna niż zero");	
	}
}

compare2()