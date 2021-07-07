let arr = [1, 2, 101, 5, 8, 4, 1, 98];
let element = true;
for (i = 0; i < arr.length; i++) {
	if (typeof +arr[i] == 'number' && !isNaN(arr[i])) {
		if (+arr[i] != +arr[0]) {
			element = false;
			break;
		}
	}
}
console.log(element);
