export default function bubble_sort(arr: number[]): void {

	let runFunc = true;
	do{
		runFunc = false;
		for(let i = 0; i < arr.length; i++) {
			if(arr[i] > arr[i + 1]) {
				runFunc = true;
				let newHi = arr[i];
				let newLo = arr[i+1];
				
				arr[i] = newLo;
				arr[i + 1] = newHi;
			}
		}
	} while (runFunc)

}
