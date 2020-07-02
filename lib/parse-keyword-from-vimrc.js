import { readFileSync } from 'fs'

import resolveTilde from './resolve-tilde.js'
import trimStart from './trim-start.js'

export default function(vimrcFilePath) {
	const resolvedVimrcPath = resolveTilde(vimrcFilePath)
	const vimrcContent = readFileSync(resolvedVimrcPath)

	const keywordRegex = /syntax match jtag(?<name>\w+)\s+\/\\m\\c@\\\((?<group>[\w\|\\]+)/g
	const keywordsFound = []
	const keywords = {} 

	let keywordMatch 

	keywordRegex.lastIndex = 0
	while(keywordMatch = keywordRegex.exec(vimrcContent)) { 
		const { groups: { name, group: keywordGroup } } = keywordMatch

		const splittedKeywords = keywordGroup
			.split('\\')
			.map(trimStart('|'))
			.filter(Boolean)

		if(!keywords[name]) {
			keywords[name] = []
		}


		Array.prototype.push.apply(keywords[name], splittedKeywords)
		Array.prototype.push.apply(keywordsFound, splittedKeywords)
	}

	return {
		keywordsGrouped: keywords,
		keywords: keywordsFound
	}
}

