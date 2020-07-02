import chalk from 'chalk'

const INDENT = 3
const SPLIT_TO = 7

const log = console.log

export default function(keywordsList, colorChalk) {
	const arrayOfArrays = keywordsList.reduce((acc, curr) => {
		let lastArray = getLastItem(acc)
		if(!lastArray || lastArray.length == SPLIT_TO) {
			acc.push([])
			lastArray = getLastItem(acc)
		}

		lastArray.push(curr)
		return acc
	}, [])


	const arrayOfStrings = arrayOfArrays.reduce((acc, curr) => {
		acc.push(curr
			.map(keyword => colorChalk(keyword))
			.join(', ')
		)
		return acc
	}, []) 

	return arrayOfStrings.join('\n')

}


function getLastItem(arr) {
	if(!arr) return false
	
	return arr[arr.length -1]
}
