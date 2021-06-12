import nextTokens from "./nextTokens";
import parseTemplateToTokens from "./parseTemplateToTokens";
import renderTemplate from "./renderTemplate";

window.Mastrche = {
	render(template, data) {
		const tokens = parseTemplateToTokens(template);
		const domStr = renderTemplate(tokens, data);
		return domStr;
	},
};
