import { execSync } from 'child_process'

export default function(existingKeywords) {

	const jrnlTags = execSync("jrnl --tags | awk '{print $1}' | sed s/@//")
		.toString()
		.split('\n')
		.map(word => word.trim())
		.filter(word => !existingKeywords.includes(word))
	return jrnlTags
}
