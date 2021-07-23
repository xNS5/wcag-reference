import { writeFile } from 'node:fs/promises';
import { ESLint } from 'eslint';

import { getWcag20information, getWcag20Techniques } from './wcag20.js';
import { getWcag21information, getWcag21Techniques } from './wcag21.js';
import { getWcag22information, getWcag22Techniques } from './wcag22.js';

/**
 * Generates the data used by this library.
 */
async function generateData() {
	const data = {
		wcag20: {
			information: await getWcag20information(),
			techniques: await getWcag20Techniques(),
		},
		wcag21: {
			information: await getWcag21information(),
			techniques: await getWcag21Techniques(),
		},
		wcag22: {
			information: await getWcag22information(),
			techniques: await getWcag22Techniques(),
		},
	};

	const eslint = new ESLint({ fix: true });

	await writeFile(
		'./data/data.js',
		'export default ' + JSON.stringify(data, undefined, '\t') + ';'
	)
		// fix all style problems
		.then(() => eslint.lintFiles('./data/data.js'))
		.then((fixes) => ESLint.outputFixes(fixes))
		.catch(console.error);
}

generateData();
