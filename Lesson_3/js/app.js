/*
	Пользователь вводит по очереди год(1999) и число (9) рождения. 
	Мы знаем сегодняшний день (2019, 12, 2). Посчитать количество полных лет.
*/

let dateToday = '2019,12,2';

const namesOfMonths = {
	'january': 1,
	'february': 2,
	'march': 3,
	'april': 4,
	'may' : 5,
	'june': 6,
	'july': 7,
	'august': 8,
	'september': 9,
	'october': 10,
	'november': 11,
	'december': 12,
};

const arr1 = [' number of year ', ' name of month ( for exemple "january" or "february", "march",  "april",' + 
' "may", "june", "july", "august", "september", "october", "november", "december" ', ' number of day '];
let arr2 = [];
let tempRes = '', flag = true, correctInputFlag, i, j, result;

while( flag ){
	correctInputFlag = true;
	arr2 = [];
	for( i = 0; i < 3; i++ ) {
		if( ! correctInputFlag ) {
			console.log('Entered symbol is not correct.');
			// break;
		}

		tempRes = prompt('Enter' + arr1[i]).trim();

// Проверка. Является введённый символ числом или нет?
		let len = tempRes.length;

		if(i == 0 || i == 2) {
			// Проверка длинны полученной строки.
			if(i == 0 && len != 4 ) {
				alert("You must enter 4 number synbols.");
				// console.log("You must enter 4 synbols.");
				break;
				
			} else if(i == 0 && +tempRes < 1920 ) {
					alert("Your age more then 100 years old.");
					break;
			} else if(i == 0 && +tempRes > 2019){
				alert("You entered a year greater than 2019  : " + tempRes);
				break;
			} 
			  else if (i == 2 && len > 2) {
				alert("You must enter 1 or 2  number simbols");
				break;
			}
			for (j = 0; j < len; j++) {
				if( typeof +tempRes[j] == 'number' && ! Number.isNaN(+tempRes[j]) ){
					
				}else{
					correctInputFlag = false;
					
					alert("Symbol " + '"' + tempRes[j] + '"' + " is not number.");
					break;
				}
			}
		} else if (i == 1 && tempRes.toLowerCase() in namesOfMonths) {

			tempRes = tempRes.toLowerCase();
	
		} else {
			correctInputFlag = false;
			alert("You are not careful. Enter the data again");
			break;
		}
		arr2.push( tempRes );
	}
	if( ! correctInputFlag){
		// Возвращаемся в начало главного цикла
		continue;
	}
	if(arr2.length < 3) {
		continue;
	}
	flag = false;
}

// console.log(tempRes, arr2);
// 
arr2 = arr2.map((value, index) => {
	if(index == 1){
		value = namesOfMonths[value];
	} 
	 else {
		value = +value;
	}	
	return value;
});
////////////////////////////////////////////////
dateToday = dateToday.split(",").map((value, index) => {
	return +value;
});
/////////////////////////////////////////////////
// console.log(arr2, dateToday);

result = arr2.reduce((accumulator, currentValue, index, ) => {
	if(index === 0) {
		accumulator = dateToday[index] - currentValue;
	}
	if(index === 1){
		if(dateToday[index] < currentValue){
			accumulator--;
		} else if (dateToday[index] === currentValue){
			if(dateToday[index + 1] < arr2[index + 1]){
				accumulator--;
			}
		}
	}
	if(accumulator < 0){
		accumulator = 0;
	}
	return accumulator;
}, 0);
console.log("Your age is ", result, " full years.");