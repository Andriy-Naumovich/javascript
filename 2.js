function linearSearch(array, search) {
	for (let i = 0; i < array.length; i++) {
		if (array [i] === search) {
			return i;
		}
	}
	return -1;
}

const array = [1, 34, 67, 765, 4, 546, 3];
const search = 765;

const result = linearSearch(array, search);

console.log(result)
