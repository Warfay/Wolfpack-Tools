function calculateTurn() {

	let initialCourse = document.getElementById("initialCrs").value;
	let newCourse = document.getElementById("newCrs").value;
	let odometer = document.getElementById("odometer").value;

	if (!initialCourse || !newCourse || !odometer) {
		document.getElementById("errorMsg").style.display = "block";
		document.getElementById("errorMsg").innerHTML = "Invalid inputs!";
		return;
	} else if (isNaN(initialCourse) || isNaN(newCourse) || isNaN(odometer)) {
		document.getElementById("errorMsg").style.display = "block";
		document.getElementById("errorMsg").innerHTML = "Inputs must be numbers!";
		return;
	} else if (initialCourse == newCourse) {
		document.getElementById("errorMsg").style.display = "block";
		document.getElementById("errorMsg").innerHTML = "New course can't be same as initial course!";
		return;
	} else if (initialCourse > 360 || newCourse > 360) {
		document.getElementById("errorMsg").style.display = "block";
		document.getElementById("errorMsg").innerHTML = "Course can't be higher than 360!";
		return;
	} else if (initialCourse == 360) {
		initialCourse = 0;
	} else if (newCourse == 360) {
		newCourse = 360;
	}

	document.getElementById("errorMsg").style.display = "none";
	document.getElementById("errorMsg").innerHTML = "";

	let turnAngle = initialCourse - newCourse;
	turnAngle = Math.abs(turnAngle);

	let turnRadius = (odometer * 180) / (Math.PI * turnAngle);
	let turnChord = (turnRadius * 2) * Math.sin(degreesRad(turnAngle / 2));

	turnRadius = roundNumber(turnRadius, 2);
	turnChord = roundNumber(turnChord, 2);

	document.getElementById("turnRadius").value = turnRadius;
	document.getElementById("chordLength").value = turnChord;

}

function clearFields() {
	document.getElementById("initialCrs").value = "";
	document.getElementById("newCrs").value = "";
	document.getElementById("odometer").value = "";
	document.getElementById("errorMsg").value = "";
	document.getElementById("errorMsg").style.display = "none";
	document.getElementById("turnRadius").value = "";
	document.getElementById("chordLength").value = "";
}

function degreesRad(degrees) {
	var  pi = Math.PI;
	return degrees * (pi/180);
}

function roundNumber(num, scale) {
  if(!("" + num).includes("e")) {
    return +(Math.round(num + "e+" + scale)  + "e-" + scale);
  } else {
    var arr = ("" + num).split("e");
    var sig = ""
    if(+arr[1] + scale > 0) {
      sig = "+";
    }
    return +(Math.round(+arr[0] + "e" + sig + (+arr[1] + scale)) + "e-" + scale);
  }
}