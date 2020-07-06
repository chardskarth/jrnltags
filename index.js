import getColorsFromVimrc from './lib/parse-rainbow-from-vimrc.js'
import getKeywordsFromVimrc from './lib/parse-keyword-from-vimrc.js'
import printInSplit from './lib/print-in-split.js'
import getMissingKeywordsFromJrnl from './lib/get-missing-from-jrnl.js'

const log = console.log

const VIM_JRNL_SYNTAX_PATH = '~/.vim/syntax/jrnl.vim'

const {
	indigo,
	teal,
	cyan,
	green,
	yellow,
	orange,
	red,
	fuchsia,
} = getColorsFromVimrc(VIM_JRNL_SYNTAX_PATH)

const {
	keywordsGrouped: keywords,
	keywords: existingKeywords
} = getKeywordsFromVimrc(VIM_JRNL_SYNTAX_PATH)

const missingKeywordsFromJrnl = getMissingKeywordsFromJrnl(existingKeywords)

log(`
-- ${indigo('Power stone')}
${printInSplit(keywords.power, indigo)}
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

-- ${fuchsia('Miscellaneous')}
${printInSplit(keywords.misc, fuchsia)}
- - - - - - - - - - - - - - - - - - - - - 

-- ${teal('Missing tags')}
${printInSplit(missingKeywordsFromJrnl, teal)}
`)
