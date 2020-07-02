import stringCopy from './string-copy.js'

export default function(trimCharacter) {
	return toTrim => {
		let trimmed = stringCopy(toTrim)
		if(toTrim.indexOf(trimCharacter) == 0) {
			trimmed = trimmed.replace(trimCharacter, '')
		}
		return trimmed
	}
}
