var a = 5
    b = 4
    value = (a*a) + (2 * a * b) - (b*b)
    c = 0		

function compare() {
	if (value >= 0){
		console.log("wynik dodatni");	 
	}	
	else{
		console.log("wynik ujemny");	
	}
}	

function compare2() {
	if (value == c){
		console.log("wartość równa zeru");	 
	}	
	else{
		console.log("wartość inna niż zero");	
	}
}