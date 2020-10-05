$(document).ready(function(){
	console.log(1);
	
	var bra = [
	
		['(', ')'],
		['[', ']'],
		['<', '>'],
	];

	
	var numbers0To10 = ['ноль', 'один', 'два', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять', 'десять'];
	var numbers11To19 = ['одиннадцать', 'двеннадцать', 'тринадцать', 
	                     'четырнадцать', 'пятнадцать', 'шестнадцать', 'семнадцать', 'восемнадцать', 'девятнадцать'];
	var tens = ['двадцать', 'тридцать', 'сорок', 'пятьдесят', 'шестьдесят', 'семдесят', 'восемдесят', 'девяносто', ];
	var cents = ['сто', 'двести', 'триста', 'четыреста', 'пятьсот', 'шестьсот', 'семьсот', 'восемьсот', 'девятьсот'];
	$('.login-popup').hide();
	$('.login-popup .close').click(function(){
		
		$('.login-popup').hide();
	});
	
	$('.coin .process').click(function(){
		var data = $('.coin .data').val() - 0;
		
		var coinText = calcCoinText(data);
		
		$('.coin .result').text(coinText);
	});
		
	$('.strings .process').click(function(){
		
		var text = $('.strings .data').val();
		var newText = ReverseText(text);
		$('.strings .result').text(newText);
	});
	
	$('.calcStrings .process').click(function(){
		
		var text = $('.calcStrings .data').val();
		var newCount = CalcWords(text);
		$('.calcStrings .result').text(newCount);
	});
	
	$('.Kovychki .process').click(function(){
		
		var text = $('.Kovychki .data').val();
		var errors = SearchErrors(text);
		$('.Kovychki .result').text(errors);
	});
	
	$('.bra .process').click(function(){
		
		var data = $('.bra .data').val();
		var res = checkBra(data);
		$('.bra .result').text(res);
	});
	
	$('.numbers .process').click(function(){
		
		var data = $('.numbers .data').val();
		var isGood = checkNumbers(data);
		$('.numbers .result').text(isGood);
		var res = checkQuantity(data);
		$('.numbers .res').text(res);
	});
	
	$('.textArea .process').click(function(){
		
		var data = $('.textArea .data').val();
		var res = replaceEnter(data);
		
		$('.textArea .result')[0].innerHTML = res;
		
	});
	
	$('.checkPol .process').click(function(){
		
		var data = $('.checkPol .data').val();
		var res = checkPolindrom(data);
		
		$('.checkPol .result').text(res);
		
	});
	
	$('.uppAndLow .process').click(function(){
		
		var data = $('.uppAndLow .data').val();
		var res = uppAndLowLetters(data);
		
		$('.uppAndLow .result').text(res);
		
	});
	
	$('.fibonacchiNumbs .process').click(function(){
		
		var data = $('.fibonacchiNumbs .data').val();
		var res = fibonacchiNumbers(data);
		
		$('.fibonacchiNumbs .result').text(res);
		
	});
	
	$('.minNumbs .process').click(function(){
		
		var data = $('.minNumbs .data').val().split(' ');
		var result = minNumbers(data);
		
		$('.minNumbs .result').text(result);
		
	});
	
	$('.deleteDuble .process').click(function(){
		
		var symbols = $('.deleteDuble .data').val().split(' ');
		
		var uniqSymbols = [];
		
		for(var i = 0; i < symbols.length; i++){
			
			var symbol = symbols[i];
			if(uniqSymbols.indexOf(symbol) < 0){
				
				uniqSymbols.push(symbol);
			}
		}
		
		$('.deleteDuble .result').text(uniqSymbols);
		
	});
	
	$('.sum10 .process').click(function(){
		
		var data = $('.sum10 .data').val();
		var result = sumOfNumbers10(data);
		
		$('.sum10 .result').text(result);
		
	});
	$('.pairOfWords .process').click(function(){
		
		var word1 = $('.pairOfWords .data1').val().split('');
		var word2 = $('.pairOfWords .data2').val().split('');
		var result = anagramWords(word1, word2);
		
		$('.pairOfWords .result').text(result);
		
	});
	
	
	function anagramWords(w1,w2){
		var result;
		
		var word1 = w1;
		var word2 = w2;
		
		word1.sort();
		word2.sort();
		
		for(var i = 0; i < word1.length; i++){
			
			if(word1.length != word1.length){
					
				return false;
			}else if(word1[i] != word2[i]){
				
				return false;
			}
		}
		return true;
	}
	
	//Найти пары чисел, сумма которых равно 10
	function sumOfNumbers10(numbs){
		
		var pairs = [];
		
		for(var i = 0; i < numbs.length; i++){
			
			var anotherOneNumb = 10 - numbs[i];
			if(numbs.indexOf(anotherOneNumb) > -1 && numbs.indexOf(anotherOneNumb) != i){
				
				pairs.push(numbs[i], anotherOneNumb);
			}
		}
		return pairs;
	}
	/*function deleteDuble(text){
		
		var result = [];
		var array = [];
		for(var i = 0; i < text.length; i++){
			
			array.push(text[i]);
			result.push(text[i]);
		}
			
		
		for(var i = 0; i < text.length; i++){
			
			newArray = array.splice(i, 1);
			
			for(var y = 0; y < newArray.length; y++){
				
				if(newArray[y] == text[i]){
					
					result.splice(newArray[y]);
				}
			}
		}
		text.sort(function(a, b){
			
			return a - b;
		});
		for(var i = 1; i < text.length; i++){
			
			if(text[i] == text[i-1]){
				
				text.splice(i-1, 2);
			}
		}
		return result;
	}*/

	//Найти 3 мин значения из числа введенных
	function minNumbers(numbs){
		
		
		var min = [undefined, undefined, undefined];
		
		min[0] = number[0];
		min[1] = number[1];
		min[2] = number[2];
		min.sort();
	
		for(var i = 0; i < numbs.length; i++){
				
			var number = numbs[i] - 0;
			
			if(!min[0] || number < min[0]){
				min[2] = min[1];
				min[1] = min[0];
				min[0] = number;
			}else if(!min[1] || number < min[1]){
				min[2] = min[1];
				min[1] = number;
			}else if(!min[2] || number < min[2]){
				min[2] = number;
			}
		}
		return number;
	}
	//Вывести заданное кол-во чисел фибоначи
	function fibonacchiNumbers(numb){
		
		var numbs = [];
		numbs[0] = 1;
		numbs[1] = 1;
		
		for( var i = 2; i < numb ; i++){
			
			numbs[i] = numbs[i-2] + numbs[i-1];			
		}
		return numbs;
	}
	//Меняем прописные буквы на заглавные
	function uppAndLowLetters(text){
		
		var newText = [];
		newText[0] = text[0].toUpperCase();
		newText[1] = text[1];
		for(var i = 2; i < text.length; i++){

			if(text[i-2] == '.' || text[i-2] == '!' || text[i-2] == '?'){

				newText[i] = text[i].toUpperCase();
			}else{
				
				newText[i] = text[i];
			}
		}
		return newText.join('');
	}
	
	function checkPolindrom(text){

		
		
		for(var i = 0; i < text.length / 2; i++){

			var symb = text[text.length - 1 - i];
			
			if(symb != text[i]){
				
				return false;
			}
		}
		return true;
	}



	//Меняем энтеры для HTML
	function replaceEnter(data){
		
		var text = data;
		var newText = text.replace(/(?:\r\n|\r|\n)/g, '<br>');
		return newText;
	}
	
	//Находим кол-во чисел во вводимом тексте
	function checkNumbers(text){
		
		var count = 0;
		for(var iNumb = 0; iNumb < text.length; iNumb++){
			
			var numb1 = text[iNumb];
			if(!isNaN(numb1) && numb1!=' '){
					
				count++;
			}
		}
		return count;
	}
	//Находим кол-во чисел в тексте
	function checkQuantity(text){
		
		var answer = 0;
		//Идем ли мы уже по начатому числу
		var numberWasStarted = false;
		//Встречали ли точки
		var flagDot = false;
		
		for(var iNumb = 0; iNumb < text.length; iNumb++){
			
			var symbol = text[iNumb];
			if(!isNaN(symbol)){
				if(!numberWasStarted){
					
					//Начали число
					answer++;
					numberWasStarted = true;
				}
			}else{
				if(symbol == '.' && !flagDot){
					//Встретили первую точку
					flagDot = true;

				} else {
					//Закончили число
					numberWasStarted = false;
					flagDot = false;
				}
				
			}
		}
		return answer;
	}
	


	//Проверяем, правильно ли расставлены скобки
	function checkBra(text){
		
		var count = 0;
		
		for(var iText = 0; iText < text.length; iText++){
			
			var symbol = text[iText];
			for(var iBra = 0; iBra < bra.length; iBra++){
				
				var onePairOfBra = bra[iBra]; // Example ['<', '>']
				if (onePairOfBra[0] == symbol){
					
					count++;
				}
			}
		}
		return count;
	}
	
	function SearchErrors(text){

		var resOne = 0;
		var resTwo = 0;

		for(var i = 0; i < text.length; i++){
			if (resTwo > resOne){
				return "Все плохо";
			}
			if (text[i] == ")"){
				resTwo++;
			}
			if (text[i] == "("){
				resOne++;
			}
		}
		
		
		
		
		if(resOne == resTwo) {res = "Все верно";}
		else if(resOne > resTwo) {res = "Закройте скобки";}
		else if(resOne < resTwo) {res = "Лишние скобки";}
		
		return res;
		
	}
	
	function CalcWords(text){
		var count = countSymbol(text, " ");
		return count + 1;
		
	}
	
	function countSymbol(text, symbol){
		var count = 0;
		for(var i = 0; i < text.length;i++){
			
			if(text[i] == symbol){
				count++;
			};
		}
		return count
	}
	
	function ReverseText(text){
		
		var array1 = [];
		for(var i = text.length-1; i >= 0 ; i--){
			
			array1.push(text[i]);
		}
		var array = array1.join('');
		return array;
	}
	
	function calcCoinText(number){
		

		if(number > 99)
			number = number %100;
		
		if(number < 11)
			return numbers0To10[number];
		if(number < 20)
			return numbers11To19[number - 11];
		
		var array = NumberToArray(number);  //3 2 1 
		var cent = array[2];
		var result = cents[cent -1];
		
		var ten = array[1];
		var tensNumber = tens[ten - 2];
		var numberOne = array[0];
		if(numberOne > 0){
			
			result += ' ' + tensNumber + ' ' + numbers0To10[numberOne];
		}
		return result;
	}
	
	function NumberToArray(fullNumber){
		
		var array = [];
		
		while(fullNumber > 0){
			
			var number = fullNumber % 10;
			array.push(number);
			fullNumber = (fullNumber - number) / 10;
		}
		
		return array;
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


















