import Scanner from "./Scanner.js";
import NextTokens from "./nextTokens";
/**
 * 讲模版字符串转化为tokens
 */
export default function (template) {
	let tokens = [];
	const scanner = new Scanner(template);
	let word;
	while (!scanner.eos()) {
		word = scanner.scanUtil("{{");
		if (word !== "") {
			tokens.push(["text", word]);
		}
		scanner.scan("{{");
		word = scanner.scanUtil("}}");
		if (word !== "") {
			if (word[0] === "#") {
				tokens.push(["#", word.substring(1)]);
			} else if (word[0] === "/") {
				tokens.push(["/", word.substring(1)]);
			} else {
				tokens.push(["name", word]);
			}
		}
		scanner.scan("}}");
	}

	const res = NextTokens(tokens);
	return res;
}
