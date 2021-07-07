const value = +prompt('Введите число: ');

if (typeof value == 'number' && isNaN(value)) {
	console.log('Упс, кажется, вы ошиблись');
} else if (value % 2 == 0) {
	console.log('чётное');
} else {
	console.log('нечётное');
}
