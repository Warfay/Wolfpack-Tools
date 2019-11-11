function targetSpeed() {

	let length = document.getElementById("speedFirstValue").value;
	length = length.replace(",", ".");
	if (!length) {
		document.getElementById("speedResultBox").value = "Enter the ship's length!";
		return;
	} else if (isNaN(length)) {
		document.getElementById("speedResultBox").value = "Ship's length must be a number!";
		return;
	}

	let time = document.getElementById("speedSecondValue").value;
	time = time.replace(",", ".");
	if (!time) {
		document.getElementById("speedResultBox").value = "Enter the stopwatch time!";
		return;
	} else if (isNaN(time)) {
		document.getElementById("speedResultBox").value = "Stopwatch time must be a number!";
		return;
	}

	let result = length / time * 1.9438;

	result = roundNumber(result, 3);

	document.getElementById("speedResultBox").value = result;

}

function targetRange() {

	let height = document.getElementById("rangeFirstValue").value;
	height = height.replace(",", ".");
	if (!height) {
		document.getElementById("rangeResultBox").value = "Enter ship's mast height!";
		return;
	} else if (isNaN(height)) {
		document.getElementById("rangeResultBox").value = "Ship's mast height must be a number!";
		return;
	}

	let centiradian = document.getElementById("rangeSecondValue").value;
	centiradian = centiradian.replace(",", ".");
	if (!centiradian) {
		document.getElementById("rangeResultBox").value = "Enter periscope centiradians!";
		return;
	} else if (isNaN(centiradian)) {
		document.getElementById("rangeResultBox").value = "Centiradians must be a number!";
		return;
	}

	let isZoomed = document.getElementById("rangeCheckbox").checked;
	let result = 0;
	if(!isZoomed) {
		result = height / centiradian;
	} else {
		result = height / centiradian * 4;
	}

	result = roundNumber(result, 3);

	document.getElementById("rangeResultBox").value = result;

}

function speedClear() {
	document.getElementById("speedResultBox").value = "";
	document.getElementById("speedFirstValue").value = "";
	document.getElementById("speedSecondValue").value = "";
}

function rangeClear() {
	document.getElementById("rangeResultBox").value = "";
	document.getElementById("rangeFirstValue").value = "";
	document.getElementById("rangeSecondValue").value = "";
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