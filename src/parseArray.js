import renderTemplate from "./renderTemplate";
import lookup from "./lookup";

export default function parseArray(token, data) {
	let res = "";
	//找到需要循环的数组
	let arr = lookup(data, token[1]);
	for (let i = 0; i < arr.length; i++) {
		res += renderTemplate(token[2], arr[i]);
	}
	return res;
}
