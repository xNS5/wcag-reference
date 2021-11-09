
const {getInnerText} = require('./get-inner-text');

/**
 * Grabs the description from the WCAG node element
 *
 * @param {HTMLElement} node
 * @param {int} version
 * @returns {string}
 */

function getDescription(node, version) {
	if (node === null) {
		return '';
	}

	const data = node.querySelectorAll('dt');
	for (let i = 0; i < data.length; i++) {
		node.getElementsByTagName('dt')[i].innerHTML += ': ';
	}

	// eslint-disable-next-line default-case
	switch (version) {
		case 0:
			/*
			* Removing the following elements from WCAG 2.0 descriptions:
			* (Level [A-AA])
			* How to meet 1.1.1 | Understanding 1.1.1
			* 1.1.1 Non-text Content:
			* */
			return getInnerText(node).replaceAll(/\((Level [A]+)\)/g, '')
				.replace(/(How to Meet [0-9].[0-9].[0-9] \| Understanding [0-9].[0-9].[0-9])/, '')
				.replace(/([0-9].[0-9].[0-9])[a-zA-Z-()* ]+:/, '')
				.replace(/^\s+|\s+$/g, '')
				.replace(/(Note)+/g, ' Note: ');
		case 1:
			/*
			* Removing the following elements from WCAG 2.1 descriptions:
			* Success Criterion 1.1.1 Non-text Content§
			* Understanding Non-text Content | How to Meet Non-text Content (Level [A-AA])
			* NoteNote: (This is a specific case for WCAG 1.4.10 which has another 'Note' within the 'Note' div)
			* */
			return getInnerText(node)
				.replaceAll(/(Success Criterion [0-9].[0-9].[0-9][a-zA-Z-()* ]+§)/g, '')
				.replace(/(Understanding[^]+\((Level [A]+)\))/, '')
				.replace(/^\s+|\s+$/g, '')
				.replace(/(Note)+(?::|)/g, 'Note: ');
		case 2:
			/*
			* Removing the following elements from WCAG 2.2 decription:
			* Success Criterion 1.1.1 Non-text Content Understanding Non-text Content | How to Meet Non-text Content(Level [A-AAA])
			* */
			return getInnerText(node)
				.replaceAll(/(Success Criterion [^]+(?:\s{2}|\((Level [A]+)\)))/g, '')
				.replace(/\[New\]/, '')
				.replace(/^\s+|\s+$/g, '')
				.replace(/(Note)+/g, 'Note: ');
	}
}

module.exports = {
	getDescription
};
