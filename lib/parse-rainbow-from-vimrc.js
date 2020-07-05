import { readFileSync } from 'fs'
import chalk from 'chalk'

import resolveXtermColor from './resolve-xterm-color.js'
import resolveTilde from './resolve-tilde.js'

export default function(vimrcFilePath) {
	const resolvedVimrcPath = resolveTilde(vimrcFilePath)
	const vimrcContent = readFileSync(resolvedVimrcPath)
	const rainbowRegex = /RainbowLevel\d{1,2}\s+ctermfg=(?<ansi8bit>\d+)/g

	let rainbowMatch 
	const colorsFound = {}

	while(rainbowMatch = rainbowRegex.exec(vimrcContent)) { 
		const { groups: { ansi8bit } } = rainbowMatch

		const colorName = resolveXtermColor(ansi8bit)
		colorsFound[colorName] = chalk.ansi256(ansi8bit)
	}

	const colorsFoundProxy = new Proxy(colorsFound, {
		get: function(target, prop) {
			if(!target[prop]) {
				throw Error(`Color ${prop} is not found`)
			}
			return target[prop]
		}
	})

	return colorsFoundProxy
}

