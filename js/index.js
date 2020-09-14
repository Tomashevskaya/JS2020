$(document).ready(function(){
	console.log(1);
	
	
	
	$('.login-popup').hide();
	$('.login-popup .close').click(function(){
		
		$('.login-popup').hide();
	});
	
	$('.coin .process').click(function(){
		var data = $('.coin .data').val() - 0;
		
		var coinText = calcCoinText(data);
		
		$('.coin .result').text(coinText);
	});
	
	function calcCoinText(number){
		
		var data = $('.coin .data').val() - 0;
		
		return 'двенадцать';
	}
	
	$('.encrypt .process').click(function(){
		var data = $('.encrypt .data').val() - 0;
		
		var encryptData = encryptNumber(data);
		
		$('.encrypt .result').text(encryptData);
	});
	
	function EncryptNumber(data){
		
		var EncryptData;
		switch(data){
			
			case 0:
			  EncryptData = 4;
			break;
			case 1:
			  EncryptData = 4;
			break;
			case 2:
			  EncryptData = 3;
			break;
			case 3:
			  EncryptData = 3;
			break;
			case 4:
			  EncryptData = 6;
			break;
			case 5:
			  EncryptData = 4;
			break;
			case 6:
			  EncryptData = 5;
			break;
			case 7:
			  EncryptData = 4;
			break;
			case 8:
			  EncryptData = 6;
			break;
			case 9:
			  EncryptData = 6;
			break;
			
		}
		
		return EncryptData;
		
	}
	
	/*function EncryptNumberMassive(data){
		
		var numberNames = ['один', 'два', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять'];
		var encryptData = numberNames[data].length;
		return encryptData;
	}*/
});


// var condition0 = true;
// var condition1 = condition0 && false;

// var condition2 = condition0 || condition1;

// var condition3 = condition2 || (condition1 && condition0);

// var condition3 = !(condition1 && condition0);


// var num1 = 2;
// var num2 = 15;

// //7
// var answer = sum(num1, num2);

// //75
// var answer2 = sum(60, num2);

// var answer3 = sum(50, 100);

// //167 - 1050
// var answer4 = sum(answer, answer3) - sum(5, 7);

// var answer4 = sum(sum(60, 80), sum(1, 1)) - sum(5, 7);

// function sum(anyNumber1, anyNumber2){
	// return anyNumber1 + anyNumber2;
// }


















