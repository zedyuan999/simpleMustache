/**
 *  将#和/之间的tokens折叠起来
 */

export default function nextTokens(tokens) {
	const nextedTokens = [];
	const sections = [];
	let collecter = nextedTokens;
	for (let i = 0; i < tokens.length; i++) {
		let token = tokens[i];
		if (token[0] === "#") {
			collecter.push(token);
			sections.push(token);
			collecter = token[2] = [];
		} else if (token[0] === "/") {
			sections.pop();
			collecter = sections.length > 0 ? sections[sections.length - 1][2] : nextedTokens;
		} else {
			collecter.push(token);
		}
	}
	return nextedTokens;
}
