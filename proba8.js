let myMap = new Map();
myMap.set('disk', '6Tb');
myMap.set(3, 'dom');
myMap.set(true, 'yes');
myMap.set(false, 'yas');

myMap.forEach(function (value, key) {
	console.log('Ключ = ' + key + ', Значение = ' + value);
});
