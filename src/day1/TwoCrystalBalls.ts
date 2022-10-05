export default function two_crystal_balls(breaks: boolean[]): number {
	const jumpAmount = Math.floor(Math.sqrt(breaks.length));
	
	let breakLimit = jumpAmount;
	for(breakLimit; breakLimit < breaks.length; breakLimit += jumpAmount){
		if(breaks[breakLimit]) {
			break;
		}
	}
	
	for(let i = breakLimit - jumpAmount; i < breakLimit; i++) {
		if(breaks[i]) {
			return i;
		}
	}

	return -1;

	
}
