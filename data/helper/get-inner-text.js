/**
 * Strips any whitespace from the text content of an element that's coming
 * from the pure HTML content and thus simulates the `innerText` Attribute
 *
 * @param {HTMLElement|ChildNode} node
 * @returns {string}
 */
function getInnerText(node) {
	return node.textContent.replaceAll(/[\t\n\s]+/g, ' ').trim();
}

module.exports = {
	getInnerText,
};
