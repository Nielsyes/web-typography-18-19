// Hier kan je tijden toevoegen in secondes
// Op die mommenten komt er een class op de body.
sounds = [
	0,
	9,
	11,
	15,
	16.5,
	24,
	25.8,
	31,
	32,
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

addAndRemoveClass('sound1', 'crt-overlay', 2000);