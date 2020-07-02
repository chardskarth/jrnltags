import { readFileSync } from 'fs'

import resolveTilde from './resolve-tilde.js'

export default function(vimrcFilePath) {
	const resolvedVimrcPath = resolveTilde(vimrcFilePath)
	const vimrcContent = readFileSync(resolvedVimrcPath)
	const rainbowRegex = /RainbowLevel\d{1,2}\s+ctermfg=(?<ansi8bit>\d+)/g
	const rainbowAnsiFound = []

	let rainbowMatch 
	while(rainbowMatch = rainbowRegex.exec(vimrcContent)) { 
		const { groups: { ansi8bit } } = rainbowMatch
		rainbowAnsiFound.push(ansi8bit)
	}

	return rainbowAnsiFound
}

