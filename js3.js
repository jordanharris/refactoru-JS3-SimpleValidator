		var numb = prompt("Please enter your phone number to allow this safe site to access your information. Use the following form xxx-xxx-xxxx");
		if (numb[3]==="-" && numb[7]==="-") {
			var numEval = "";
			for (var i=0; i< numb.length;i++){
				if(numb[i]==="-"){
					numEval += "";
				}
				else if (!isNaN(parseInt(numb[i]))){
					numEval += numb[i];
				}
				else {
					numEval += "";
				}
			}
		};	
		console.log(numEval)
;		// 	alert("True");
		// }
		// else {
		// 	alert("False");
		// }

		// var numb = prompt("Please enter your birth date to allow this safe site to access your information. Use the following format xx/xx/xx");
		// if (numb[2]==="/" && numb[5]==="/" && numb.length === 8) {
		// 	alert("True");
		// }
		// else {
		// 	alert("False");
		// }

		// var numb = prompt("Please enter your Postal Code information. Use one of the following formats xxxxx or xxxxx-xxxx");
		// if (numb.length === 5 || numb[5]==="-") {
		// 	alert("True");
		// }
		// else {
		// 	alert("False");
		// }

		// var numb = prompt("Please enter your state abbreviation. Use the following form (ex IA, NY, CA).  Make sure you use all CAPS");
		// if (numb.length===2 && numb.toUpperCase()===numb) {
		// 	alert("True");
		// }
		// else {
		// 	alert("False");
		// }
		
		// var numb = prompt("Are you married? Please type yes or no");
		// if (numb.toLowerCase() === "yes" || numb.toLowerCase() === "no") {
		// 	alert("True");
		// }
		// else {
		// 	alert("False");
		// } 


		// if (numb.toLowerCase()==="yes") {
		// 	alert("You are married!");
		// 	}
		// else if (numb.toLowerCase()==="no") {
		// 	alert("You are not married!")
		// }
		// else{
		// 	alert("You entered bad information");
		// }	


// var numb = prompt("Please enter your phone number to allow this safe site to access your information. Use the following form xxx-xxx-xxxx");
// 		(numb[3]==="-" && numb[7]==="-") ? alert("True") : alert("False");

// 		var numb = prompt("Please enter your birth date to allow this safe site to access your information. Use the following format xx/xx/xx");
// 		(numb[2]==="/" && numb[5]==="/" && numb.length === 8) ? alert("True") : alert("False");

// 		var numb = prompt("Please enter your Postal Code information. Use one of the following formats xxxxx or xxxxx-xxxx");
// 		(numb.length === 5 || numb[5]==="-") ? alert("True") : alert("False");

// 		var numb = prompt("Please enter your state abbreviation. Use the following form (ex IA, NY, CA).  Make sure you use all CAPS");
// 		(numb.length===2 && numb.toUpperCase()===numb) ? alert("True") : alert("False");
		
// 		var numb = prompt("Are you married? Please type yes or no");
// 		(numb.toLowerCase() === "yes" || num.toLowerCase() === "no") ? alert("True") : alert("False"); 
	
