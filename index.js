const information = require('./data/data.js');

const versionMappings = {
	'2.0': 'wcag20',
	'2.1': 'wcag21',
	'2.2': 'wcag22',
};

/**
 * Returns all the available data for the specified bullet point or throws
 * an error if the given bullet point doesn't exist.
 *
 * @throws When the success criterion not exist.
 * @param {'2.0' | '2.1' | '2.2'} version
 * @param {number} chapter
 * @param {number} section
 * @param {number} subsection
 * @returns {Object | Error} All available data for the specified criterion
 *
 * @example
 * ```
 * import { getCriterionData } from 'wcag-reference-cjs';
 *
 * const data = getCriterionData('2.1', 2, 1, 1);
 * // → {
 * //   id: 'keyboard',
 * //   handle: '2.1.1 Keyboard',
 * //   quickReference: 'https://www.w3.org/WAI/WCAG21/quickref/#keyboard',
 * //   detailedReference: 'https://www.w3.org/WAI/WCAG21/Understanding/keyboard.html',
 * //   level: 1, // → 1: A, 2: AA, 3: AAA
 * //   wcagUrl: 'https://www.w3.org/TR/WCAG21/'
 * // }
 * ```
 */
const getCriterionData = (version, chapter, section, subsection) => {
	if (!versionMappings[version]) {
		throw new Error("Requested WCAG Version isn't valid!");
	}

	if (!information[versionMappings[version]].information[chapter]) {
		throw new Error("Requested chapter doesn't exist!");
	}

	if (!information[versionMappings[version]].information[chapter].guidelines[section]){
		throw new Error("Requested section doesn't exist!");
	}

	if (!information[versionMappings[version]].information[chapter].guidelines[section].successCriterions[subsection]) {
		throw new Error("Requested subsection doesn't exist!");
	}

	return Object.assign(
		information[versionMappings[version]].information[chapter].guidelines[section].successCriterions[subsection],
		{ wcagUrl: information[versionMappings[version]].information.url }
	);
};

/**
 * Returns a link with an anchor to the specified bullet point or throws
 * an error if the given bullet point doesn't exist.
 *
 * @throws When the success criterion not exist.
 * @param {'2.0' | '2.1' | '2.2'} version
 * @param {number} chapter
 * @param {number} section
 * @param {number} subsection
 * @returns {string} Link with an anchor pointing to the criterion
 *
 * @example
 * ```
 * import { getLinkToCriterion } from 'wcag-reference-cjs';
 *
 * const link = getLinkToCriterion('2.2', 3, 3, 4);
 * // → 'https://www.w3.org/TR/WCAG22/#error-prevention-legal-financial-data'
 * ```
 */
const getLinkToCriterion = (version, chapter, section, subsection) => {
	const criterionData = getCriterionData(
		version,
		chapter,
		section,
		subsection
	);

	return criterionData.wcagUrl + '#' + criterionData.id;
};


/**
 * Returns a list of success criterion based on their violation level (e.g. 1, 2, or 3)
 * @throws When the success criterion not exist.
 * @param {'2.0' | '2.1'} version
 * @param {1 | 2 | 3} level
 * @TODO update README with use description
 */
const getCriterionByLevel = (version, level) => {
	let list = [];
	if (!versionMappings[version]) {
		throw new Error("Requested WCAG Version isn't valid!");
	}
	let data = information[versionMappings[version]].information
	for(let chapter in data){
		const sections = data[chapter].guidelines;
		for(let section in sections){
			const subsection = sections[section].successCriterions;
			for(let criterion in subsection){
				let subsection_level = subsection[criterion].level;
				if(subsection_level === level){
					list.push(subsection[criterion]);
				}
			}
		}
	}
	return list;
}

/**
 * Returns all the available data for the specified technique or throws an
 * error if the given technique doesn't exist.
 *
 * @throws When the technique not exist.
 * @param {'2' | '2.1' | '2.2'} version
 * @param {string} technique
 * @returns {Object | Error} All available data for the specified technique
 *
 * @example
 * ```
 * import { getTechniqueData } from 'wcag-reference-cjs';
 *
 * const data21 = getTechniqueData('2.1', 'G57');
 * // → {
 * //   text: 'G57: Ordering the content in a meaningful sequence',
 * //   techniquesUrl: 'https://www.w3.org/WAI/WCAG21/Techniques/',
 * //   groupId: 'general',
 * //   groupPage: undefined
 * // }
 * const data20 = getTechniqueData('2.0', 'G57');
 * // → {
 * //   text: 'G57: Ordering the content in a meaningful sequence',
 * //   techniquesUrl: 'https://www.w3.org/TR/WCAG20-TECHS/',
 * //   groupId: undefined,
 * //   groupPage: 'general.html'
 * // }
 * ```
 */
const getTechniqueData = (version, technique) => {
	if (!versionMappings[version]) {
		throw new Error("Requested WCAG Version isn't valid!");
	}

	// get the technique prefix ex. 'ARIA12' → 'ARIA'
	const prefix = technique.replace(/\d*/g, '');

	// checks if the requested technique exists
	if (!information[versionMappings[version]].techniques[prefix] || !information[versionMappings[version]].techniques[prefix].techniques[technique]){
		throw new Error("Requested WCAG technique doesn't exist!");
	}

	return Object.assign(information[versionMappings[version]].techniques[prefix].techniques[technique], {
			techniquesUrl: information[versionMappings[version]].techniques.url,
			groupId: information[versionMappings[version]].techniques[prefix].id,
			groupPage: information[versionMappings[version]].techniques[prefix].onePage,
		}
	);
};

/**
 * Returns a link with an anchor to the specified technique or throws
 * an error if the given technique doesn't exist.
 *
 * @throws When the technique not exist.
 * @param {'2' | '2.1' | '2.2'} version
 * @param {string} technique
 * @returns {string | Error} Link with an anchor pointing to the technique
 *
 * @example
 * ```
 * import { getLinkToTechnique } from 'wcag-reference-cjs';
 *
 * const link = getLinkToTechnique('2.0', 'SCR27');
 * // → 'https://www.w3.org/TR/WCAG20-TECHS/SCR27.html'
 * ```
 */
const getLinkToTechnique = (version, technique) => {
	const techniqueData = getTechniqueData(version, technique);

	let section = '';

	// we need the right path for the technique group for 2.1 & 2.2
	if (version !== '2.0') {
		section = techniqueData.groupId + '/';
	}
		// we don't need ".html" for 2.1 & 2.2 but it works so no switch needed
	return (techniqueData.techniquesUrl + section + technique + '.html'
	);
};

module.exports = {
	getLinkToCriterion,
	getCriterionData,
	getLinkToTechnique,
	getTechniqueData,
	getCriterionByLevel,
};
