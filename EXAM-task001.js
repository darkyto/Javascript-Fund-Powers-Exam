function solve(args) {
	var nk = args[0].split(' ').map(Number);
	var n = nk[0];
	var k = nk[1]; // number of transitions
	var numbers = args[1].split(' ').map(Number);

	var len = numbers.length;
	var i;
	var resultSum = 0; // use for final sum

	resultArr = makeTransctions(numbers, k);

	for (i = resultArr.length - 1; i >= 0; i-=1) {
		resultSum += resultArr[i];
	}
	return resultSum;

	function makeTransctions(arr , k) {
		while (k > 0) {
			arr = forEachKTransaction(arr);
			k -=1;
		}
		return arr;
	}
	function forEachKTransaction(numbers) {
		var resultArr = [];
		for (var i = 0; i < len; i+=1) {
			if (i === 0) {
				if (numbers[i] === 0) {
					resultArr[i] = Math.abs(numbers[len-1] - numbers[i+1]);
				}
				else if (numbers[i] === 1) {
					resultArr[i] = numbers[len-1] + numbers[i+1];
				}
				else if (numbers[i] % 2 === 0 && numbers[i] !== 0) {
					resultArr[i] = Math.max(numbers[len-1], numbers[i+1]);
				}
				else if (numbers[i] % 2 !== 0 && numbers[i] !== 1) {
					resultArr[i] = Math.min(numbers[len-1], numbers[i+1]);
				}
			}
			else if (i === len - 1) {
				if (numbers[i] === 0) {
					resultArr[i] = Math.abs(numbers[i-1] - numbers[0]);
				}
				else if (numbers[i] === 1) {
					resultArr[i] = numbers[i-1] + numbers[0];
				}
				else if (numbers[i] % 2 === 0 && numbers[i] !== 0) {
					resultArr[i] = Math.max(numbers[i-1], numbers[0]);
				}
				else if (numbers[i] % 2 !== 0 && numbers[i] !== 1) {
					resultArr[i] = Math.min(numbers[i-1], numbers[0]);
				}
			}
			else {
				if (numbers[i] === 0) {
					resultArr[i] = Math.abs(numbers[i-1] - numbers[i+1]);
				}
				else if (numbers[i] === 1) {
					resultArr[i] = numbers[i-1] + numbers[i+1];
				}
				else if (numbers[i] % 2 === 0 && numbers[i] !== 0) {
					resultArr[i] = Math.max(numbers[i-1], numbers[i+1]);
				}
				else if (numbers[i] % 2 !== 0 && numbers[i] !== 1) {
					resultArr[i] = Math.min(numbers[i-1], numbers[i+1]);
				}
			}
		}
		return resultArr;
	}
}



var test = ['5 1', '9 0 2 4 1'];
var test2 = ['10 3','1 9 1 9 1 9 1 9 1 9'];
var test3 = ['10 10','0 1 2 3 4 5 6 7 8 9'];

var test4 = ['3 1','1 0 1'];

console.log(solve(test));
console.log(solve(test2));
console.log(solve(test3));
console.log(solve(test4));
