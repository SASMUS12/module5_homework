let x = prompt('Введите пременную: ');
if (x === 'true' || x === 'false') {
	console.log(x + ' - это логический тип');
} else if (typeof x === 'string') {
	console.log(x + ' - это строка');
} else if (typeof +x === 'number' && !isNaN(x)) {
	console.log(x + ' - это число');
} else {
	console.log('тип x не определен');
}
