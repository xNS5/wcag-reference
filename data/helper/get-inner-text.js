/**
 * Strips any whitespace from the text content of an element that's coming
 * from the pure HTML content and thus simulates the `innerText` Attribute
 *
 * @param {HTMLElement|ChildNode} node
 * @returns {string}
 */
function getInnerText(node) {
	if (node !== null) {
		return node.textContent.replace(/\s+/g, ' ').trim();
	}

	return '';
}

/**
 * Grabs the description from the WCAG node element
 *
 * @param {HTMLElement} node
 * @returns {string}
 */

function getDescription(node) {
	if (node === null) {
		return '';
	}

	let ret = '';
	for (const child of node.childNodes) {
		ret += getInnerText(child).replaceAll(/\((Level [A]+)\)/g, '').replaceAll(/How to Meet [0-9].[0-9].[0-9] \| Understanding [0-9].[0-9].[0-9]/g, '');
	}

	return ret.substring(ret.indexOf(':') + 1);
}

module.exports = {
	getInnerText,
	getDescription,
};
