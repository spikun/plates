$(function(){
	PlateGenerator = new RandomPlateGenerator();
	PlateGenerator.start();
});

function RandomPlateGenerator() {
	
	var interval;
	var intervalId = 0;
	var container = $('.plate .number');
	
	function generatePlate() {
		var letters = generateLetters();
		var numbers = random3Numbers();
		container.html(numbers + ' ' + letters);
			
		function generateLetters() {
			var result = '';
			for (var i = 0; i < 3; i++)
				result += randomLetter();
			return result;
		}
	}
	
	function randomLetter() {
		var letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
		return letters[Math.floor(Math.random() * 26)];
	}
	
	function random3Numbers() {
		return Math.random().toString().substring(2,5);
	}
	
	function start() {
		setInterval();
	}
	
	function setInterval(pInterval) {
		interval = pInterval || 3000;
		stop();
		intervalId = window.setInterval(generatePlate, interval);
	}
	
	function stop() {
		intervalId && clearInterval(intervalId);
	}
	
	function setPlate(value) {
		container.html(value);
	}
	
	return {
		'start': start,
		'setInterval': setInterval,
		'stop': stop,
		'setPlate': setPlate
	};
}