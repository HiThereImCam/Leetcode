function isValidSubsequence(array, sequence) {
	// if arr[i] === sequence[i]
	let arrIdx = 0
	let seqIdx = 0
	while(arrIdx < array.length){
		if(array[arrIdx] === sequence[seqIdx]){
			seqIdx++
		}
		arrIdx++
	}
	
	return seqIdx === sequence.length
}