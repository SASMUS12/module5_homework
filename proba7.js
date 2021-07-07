let array = [91, 4, NaN, 0, null, 4, 8, NaN];
let oddArray = array.filter(array => array % 2 !== 0 && array !== null);
let evenArray = array.filter(
	array => array % 2 == 0 && array !== null && array !== 0
);
let zero = array.filter(array => !array);
console.log('Количество чётных элементов: ' + evenArray.length);
console.log('Количество нечетных элементов: ' + oddArray.length);
console.log('Количество zero элементов: ' + zero.length);
console.log('Элементы приравненые к нулю: ' + zero);
