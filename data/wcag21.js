const {JSDOM} = require('jsdom');
const got = require('got');

const {mergeHeading} = require('./helper/merge-heading.js');
const {getSuccessCriterionText} = require('./helper/get-success-criterion-text.js');
const {getInnerText} = require('./helper/get-inner-text.js');
const {getDescription} = require('./helper/get-wcag-description.js');

/**
 * Extracts all needed information from https://www.w3.org/TR/WCAG21/
 *
 * @returns {Object}
 */
async function getWcag21information() {
	const url = 'https://www.w3.org/TR/WCAG21/';
	const html = (await got(url)).body;
	const {
		window: {document},
	} = new JSDOM(html);

	const information = {url};

	for (const principleContainer of document.querySelectorAll('.principle')) {
		// principle
		const principle = {};
		principle.id = principleContainer.id;
		principle.text = mergeHeading(principleContainer, 'h2', 'p');

		// guidelines
		principle.guidelines = {};

		for (const guidelineNode of principleContainer.querySelectorAll(
			'.guideline'
		)) {
			const guideline = {};
			guideline.id = guidelineNode.id;
			guideline.text = mergeHeading(guidelineNode, 'h3', 'p');

			// success criterion
			guideline.successCriterions = {};

			for (const successCriterionNode of guidelineNode.querySelectorAll('.sc'
			)) {
				const successCriterion = {};
				const handle = getSuccessCriterionText(successCriterionNode);
				successCriterion.id = successCriterionNode.id;
				successCriterion.num = handle.split(' ')[0];
				successCriterion.handle = handle.replaceAll(/([0-9]+.[0-9]+.[0-9]+ )/g, '');
				successCriterion.description = getDescription(successCriterionNode, 1);
				successCriterion.quickReference =
					successCriterionNode.querySelector(
						'a[href*="WCAG21/quickref"]'
					).href;
				successCriterion.detailedReference =
					successCriterionNode.querySelector(
						'a[href*="WCAG21/Understanding"]'
					).href;
				successCriterion.level = successCriterionNode
					.querySelector('.conformance-level')
					.textContent.match(/Level (?<level>A{1,3})/)
					.groups.level.split('').length;

				guideline.successCriterions[
					successCriterion.num.match(
						/^\d\.\d\.(?<number>\d+)/
					).groups.number
				] = successCriterion;
			}

			principle.guidelines[
				guideline.text.match(
					/Guideline \d\.(?<number>\d)/
				).groups.number
			] = guideline;
		}

		information[
			principleContainer
				.querySelector('h2 .secno')
				.textContent.replace(/\D/g, '')
		] = principle;
	}

	return information;
}

/**
 * Parses information about wcag 2.1 techniques = require(
 * https://www.w3.org/WAI/WCAG21/Techniques/
 *
 * @returns {Object}
 */
async function getWcag21Techniques() {
	const url = 'https://www.w3.org/WAI/WCAG21/Techniques/';
	const html = (await got(url)).body;
	const {
		window: {document},
	} = new JSDOM(html);

	// groups
	const techniqueGroups = {url};

	for (const techniqueGroupHeading of document.querySelectorAll('#toc h3')) {
		const techniqueList = techniqueGroupHeading.nextElementSibling;

		const techniqueGroup = {};
		techniqueGroup.id = techniqueGroupHeading.id;
		techniqueGroup.text = getInnerText(techniqueGroupHeading).replace(
			'§',
			''
		);

		// techniques
		techniqueGroup.techniques = {};

		for (const techniqueNode of techniqueList.querySelectorAll('li')) {
			const idMatch = techniqueNode.textContent.match(/^(?<id>\w+):/);

			if (!idMatch) {
				continue;
			}

			const technique = {};
			technique.text = getInnerText(techniqueNode);

			techniqueGroup.techniques[
				techniqueNode.textContent.match(/^(?<id>\w+):/).groups.id
			] = technique;
		}

		techniqueGroups[
			techniqueList
				.querySelector('li')
				.textContent.match(/^(?<id>[A-Za-z]+)/).groups.id
		] = techniqueGroup;
	}

	return techniqueGroups;
}

module.exports = {
	getWcag21information,
	getWcag21Techniques
};
