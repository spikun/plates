$(function(){
	PlateGenerator = new RandomPlateGenerator();
	PlateGenerator.start();
});

function RandomPlateGenerator() {
	
	var interval;
	var intervalId = 0;
	
	function generatePlate() {
		var container = $('.plate .number');
		
		var letters = generateLetters();
		var numbers = random3Numbers();
		container.html(letters + ' ' + numbers);
			
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
		
		intervalId && clearInterval(intervalId);
		window.setInterval(generatePlate, interval);
	}
	
	return {
		'start' : start,
		'setInterval': setInterval
	};
}