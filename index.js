import chalk from 'chalk'

import getColorsFromVimrc from './lib/parse-rainbow-from-vimrc.js'
import getKeywordsFromVimrc from './lib/parse-keyword-from-vimrc.js'
import printInSplit from './lib/print-in-split.js'
import getMissingKeywordsFromJrnl from './lib/get-missing-from-jrnl.js'

const log = console.log

const VIMRC_PATH = '~/.vimrc'
const VIM_JRNL_SYNTAX_PATH = '~/.vim/syntax/jrnl.vim'

const [
	violet,
	blue,
	cyan,
	green,
	yellow,
	orange,
	red,
	magenta,
] = getColorsFromVimrc(VIMRC_PATH)
	.map(ii => chalk.ansi256(ii))

const {
	keywordsGrouped: keywords,
	keywords: existingKeywords
} = getKeywordsFromVimrc(VIM_JRNL_SYNTAX_PATH)

const missingKeywordsFromJrnl = getMissingKeywordsFromJrnl(existingKeywords)

chalk.enabled = true
chalk.supportsColor = true
log(`
-- ${violet('Power stone')}
${printInSplit(keywords.power, violet)}
- - - - - - - - - - - - - - - - - - - - - 

-- ${yellow('Mind stone')}
${printInSplit(keywords.mind, yellow)}
- - - - - - - - - - - - - - - - - - - - - 

-- ${orange('Soul stone')}
${printInSplit(keywords.soul, orange)}
- - - - - - - - - - - - - - - - - - - - - 

-- ${cyan('Space stone')}
${printInSplit(keywords.space, cyan)}
- - - - - - - - - - - - - - - - - - - - - 

-- ${red('Reality stone')}
${printInSplit(keywords.reality, red)}
- - - - - - - - - - - - - - - - - - - - - 

-- ${green('Time stone')}
${printInSplit(keywords.time, green)}
- - - - - - - - - - - - - - - - - - - - - 

-- ${magenta('Miscellaneous')}
${printInSplit(keywords.misc, magenta)}
- - - - - - - - - - - - - - - - - - - - - 

-- ${blue('Missing tags')}
${printInSplit(missingKeywordsFromJrnl, blue)}
`)
