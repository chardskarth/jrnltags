import strcopy from './string-copy.js'

const TILDE_RESOLVE_HOME_NOT_FOUND = "Couldn't resolve ~. $HOME variable is not found in environment"

export default function(vimrcFilePath) {
	let resolvedVimrcPath = strcopy(vimrcFilePath)
	
	if(tildeExisting(vimrcFilePath)) {
		if(!process.env.HOME) throw new Error(TILDE_RESOLVE_HOME_NOT_FOUND)

		resolvedVimrcPath = resolvedVimrcPath.replace('~', process.env.HOME)
	}
	return resolvedVimrcPath
}

function tildeExisting(path) {
	return path.indexOf('~') != -1
}

