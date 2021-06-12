import lookup from "./lookup";
import parseArray from "./parseArray";

export default function renderTemplate(tokens, data) {
	let res = "";
	for (let i = 0; i < tokens.length; i++) {
		const token = tokens[i];
		if (token[0] == "text") {
			res += token[1];
		} else if (token[0] == "name") {
			res += lookup(data, token[1]);
		} else if (token[0] == "#") {
			res += parseArray(token, data);
		}
	}
	return res;
}
