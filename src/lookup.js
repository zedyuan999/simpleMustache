export default function lookup(data, str) {
	if (str.indexOf(".") != -1 && str !== ".") {
		let arr = str.split(".");
		let temp = data;
		for (let i = 0; i < arr.length; i++) {
			temp = temp[arr[i]];
		}
		return temp;
	} else if (str === ".") {
		return data;
	}

	return data[str];
}
