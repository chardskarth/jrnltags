import colorNamer from 'color-namer'

import XTERM_TO_RGB from './xterm-rgb-map.js'

const COLOR_NAMER_NAME = 'basic'

export default function(ansi8bit) {
	const [_, ansiRgb] = XTERM_TO_RGB
		.find(([ansi]) => parseInt(ansi) === parseInt(ansi8bit))

	const colorName = colorNamer(ansiRgb, {pick: COLOR_NAMER_NAME})[COLOR_NAMER_NAME][0].name
	return colorName
}

