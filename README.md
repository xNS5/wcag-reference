# [wcag-reference-cjs](https://www.npmjs.com/package/wcag-reference-cjs)

Please note that this is a fork of [wcag-reference](https://github.com/Zauberbutter/wcag-reference).

There exists a conflict in Node-based frameworks between CommonJS and ES Modules. The gist of it is that ES Modules
need to be imported via `import {foo} from 'bar'`, however CJS scripts can't use import statements in that manner.

The original module doesn't play nice with Node, so it was forked and modified so it could be imported by using `const { foo } = require('bar')`.

In fact there are 4 documents for each WCAG version:
* The WCAG guidelines itself.
* A quick reference "How to Meet WCAG 2.x".
* A detailed reference "Understanding WCAG 2.x".
* Explained techniques to meet the specific success criteria.

This tool can give you a reference to the following documents. Please note that WCAG 2.2 has not officially been released yet and as of [21 May 2021](https://www.w3.org/TR/WCAG22/) there only exists a draft of the new version:
* WCAG 2.0
    * https://www.w3.org/TR/WCAG20/
    * https://www.w3.org/WAI/WCAG20/quickref/
    * https://www.w3.org/TR/UNDERSTANDING-WCAG20/
    * https://www.w3.org/TR/WCAG20-TECHS/
* WCAG 2.1:
    * https://www.w3.org/TR/WCAG21/
    * https://www.w3.org/WAI/WCAG21/quickref/
    * https://www.w3.org/WAI/WCAG21/Understanding/
    * https://www.w3.org/WAI/WCAG21/Techniques/
* WCAG 2.2:
    * https://www.w3.org/TR/WCAG22/
    * https://www.w3.org/WAI/WCAG22/quickref/
    * https://www.w3.org/WAI/WCAG22/Understanding/
    * https://www.w3.org/WAI/WCAG22/Techniques/


## Installation

```sh
npm i wcag-reference-cjs
```

## Usage

* getLinkToCriterion(version, chapter, section, subsection) -- returns a URL to the WCAG success criteria matching the chapter, section, and subsection within the specific WCAG version. The version is a string, the rest are integers.

* getCriterionByLevel(version, level) -- creates a list of WCAG success criterion with the desired level (A-AAA).

* getCriterionData(version, chapter, section, subsection) -- returns an object containing the success criterion id, handle (e.g. '2.1.1 Keyboard'), quick reference URL, detailed reference URL, success criteria level (1-3 -> A-AAA), and a url to the WCAG itself. The first input is a string, the rest are integers.

* getTechniqueData(version, technique) -- returns an object containing the technique description, group ID, and group page. Both inputs are strings (see below for an example).

* getLinkToTechnique(version, technique) -- returns a URL to a specific technique. Both inputs are strings (see below for an example).

### Get a link to a specific success criterion

```js
getLinkToCriterion(version, chapter, section, subsection)
```

* `version`: needs to be either `'2.0'`, `'2.1'` or `'2.2'`
* `chapter`, `section`, `subsection`: needs to be a valid bullet point from the selected WCAG Version

Example:

```js
import { getLinkToCriterion } from 'wcag-reference';

const link = getLinkToCriterion('2.2', 3, 3, 4);
// → 'https://www.w3.org/TR/WCAG22/#error-prevention-legal-financial-data'
```

### Get all Success Criterion of a Specific Level
```js
getCriterionByLevel(version, level)
```
* `version`: needs to be either `'2.0'` or `'2.1'`
* `level`: needs to be `1`,`2`, or `3` (1 being `'A'` and 3 being `'AAA'`

```js
import { getCriterionByLevel } from 'wcag-reference';

const link = getCriterionByLevel('2.2', 3);
// → {
//  id: 'sign-language-prerecorded',
// 	handle: '1.2.6 Sign Language (Prerecorded)',
// 	quickReference: 'https://www.w3.org/WAI/WCAG21/quickref/#sign-language-prerecorded',
// 	detailedReference: 'https://www.w3.org/WAI/WCAG21/Understanding/sign-language-prerecorded.html',
// 	level: 3
// },
// {...}
```


### Get a link to a specific technique

```js
getLinkToTechnique(version, technique)
```

* `version`: needs to be either `'2.0'`, `'2.1'` or `'2.2'`
* `technique`: needs to be a valid technique

Example:

```js
import { getLinkToTechnique } from 'wcag-reference';

const link = getLinkToTechnique('2.0', 'SCR27');
// → 'https://www.w3.org/TR/WCAG20-TECHS/SCR27.html'
```

### Get all available data for a specific success criterion

```js
getCriterionData(version, chapter, section, subsection)
```

* `version`: needs to be either `'2.0'`, `'2.1'` or `'2.2'`
* `chapter`, `section`, `subsection`: needs to be a valid bullet point from the selected WCAG Version

Example:

```js
const { getCriterionData } = require('wcag-reference');

const data = getCriterionData('2.1', 2, 1, 1);
// → {
//   id: 'keyboard',
//   handle: '2.1.1 Keyboard',
//   quickReference: 'https://www.w3.org/WAI/WCAG21/quickref/#keyboard',
//   detailedReference: 'https://www.w3.org/WAI/WCAG21/Understanding/keyboard.html',
//   level: 1, // → 1: A, 2: AA, 3: AAA
//   wcagUrl: 'https://www.w3.org/TR/WCAG21/'
// }
```

### Get all available data for a specific technique

```js
getTechniqueData(version, chapter, section, subsection)
```

* `version`: needs to be either `'2.0'`, `'2.1'` or `'2.2'`
* `technique`: needs to be a valid technique

Example:

```js
const { getCriterionData } = require('wcag-reference');

const data21 = getTechniqueData('2.1', 'G57');
// → {
//   text: 'G57: Ordering the content in a meaningful sequence',
//   techniquesUrl: 'https://www.w3.org/WAI/WCAG21/Techniques/',
//   groupId: 'general',
//   groupPage: undefined
// }
const data20 = getTechniqueData('2.0', 'G57');
// → {
//   text: 'G57: Ordering the content in a meaningful sequence',
//   techniquesUrl: 'https://www.w3.org/TR/WCAG20-TECHS/',
//   groupId: undefined,
//   groupPage: 'general.html'
// }
```

## How does this tool work?

You can find a `./data/data.js` which contains all necessary information. This file is generated by scraping the above mentioned sites. If you want to, you can include this file by yourself:

```js
const { getCriterionData } = require('wcag-reference');
```

You can find the generating scripts also in the `./data/` folder. But these files aren't included in the final npm package. If you want to create the file yourself simply type:

```sh
node ./data/generate-data.js
```


# Contributing

Please first create an issue with a feature request, then if the feature is needed create a branch with the feature name and create a PR.
