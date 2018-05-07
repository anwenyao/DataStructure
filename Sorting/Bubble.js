'use strict'
var arr = [2,6,56,96,12,46,25,36,45,69];
var arr1 = [894,23,5698,754,325,695,2,36,69];
console.log(arr1);
bubble(arr1);
console.log(arr1);

function bubble(arr){
	for(let i = 0; i < arr.length - 1;++i){
		for(let j = 0;j < arr.length - i -1;++j){
			if(arr[j] > arr[j + 1]){
				let temp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = temp;
			}
		}
	}
}