export default class Scanner {
	constructor(template) {
		this.poi = 0;
		this.tail = template;
	}
	scan(stopTag) {
		const index = this.tail.indexOf(stopTag);
		if (index === 0) {
			this.tail = this.tail.substring(index + 2);
		}
	}
	scanUtil(stopTag) {
		const index = this.tail.indexOf(stopTag);
		const word = index > -1 ? this.tail.substring(0, index) : this.tail;
		this.tail = word === this.tail ? "" : this.tail.substring(index);
		return word;
	}
	eos() {
		return this.tail.length === 0;
	}
}
