// Hier kan je tijden toevoegen in secondes
// Op die mommenten komt er een class op de body.
sounds = [
	0,
	9,
	11.45,
	12,
	15.3,
	19,
	22,
	23.2,
	24.5,
	29,
	31,
	33,
	34,
	86
];

function addAndRemoveClass(soundClass, element, timeOut){
	let alreadySet;
	setInterval(function(){
		if (document.body.classList.contains(soundClass) && alreadySet != true) {
			document.body.classList.add(element);
			setTimeout(function(){
				document.body.classList.remove(element);
				alreadySet = true;
			}, timeOut)
		}
	}, 10)
}

function addAndRemoveElement(soundClass, elementId, timeOut){
	let element = document.getElementById(elementId);
	let alreadySet;
	setInterval(function(){
		if (document.body.classList.contains(soundClass) && alreadySet != true) {
			element.style.display = 'flex';
			setTimeout(function() {
				element.style.display = 'none';
				alreadySet = true;
			}, timeOut)
		}
	}, 10)
}

addAndRemoveClass('sound1', 'crt-overlay', 2000);
addAndRemoveClass('sound3', 'gradient-overlay', 15000);
addAndRemoveClass('sound4', 'alarm-gradient', 2000);
addAndRemoveClass('sound8', 'alarm-gradient', 2000);
addAndRemoveClass('sound10', 'alarm-gradient', 2000);

addAndRemoveElement('sound4', 'bars', 9200);
addAndRemoveElement('sound8', 'bars-big', 9000);
