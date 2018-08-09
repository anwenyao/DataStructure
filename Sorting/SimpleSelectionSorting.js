'use strict'
var arr = [2,6,56,96,12,46,56,36,45,69];
var arr1 = [894,23,5698,754,325,695,2,36,69];
console.log(arr);
simpleSelection(arr);
console.log(arr);
function simpleSelection(arr){
	let index;
	let temp;
	for(let i = 0;i < arr.length;++i){
		index = i;
		for(let j = i + 1;j < arr.length;++j){
			if(arr[index] > arr[j]){
				index = j;	//记录最小值的下标
			}	
		}
		temp = arr[i];
		arr[i] = arr[index];
		arr[index] = temp;
	}
}