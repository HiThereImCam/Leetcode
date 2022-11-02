var maxNumberOfBalloons = function(text) {
	if (text.length < 7) return 0;
	
    const map = { "b": 0, "a": 0, "l": 0, "o": 0, "n": 0 };
    
    for (let char of text) {
        if (char === 'b' | char === 'a' | char === 'l' | char === 'o' | char === 'n') {
            map[char]++;
        }
    }
    
    let min = Number.MAX_SAFE_INTEGER;
    
    for (let char in map) {
        if (map[char] === 0) return 0;
        switch (char) {
            case 'l':
            case 'o':
                const count = Math.floor(map[char] / 2);
                min = Math.min(min, count);
                if (min === 0) return 0;
                break;
            default:
                min = Math.min(min, map[char])
        }
    }
    
    return min;
};
