'use strict'
let arr = [2,6,56,96,12,46,25,36,45,69];
let arr1 = [894,23,5698,754,325,695,2,36,69];
console.log(arr);
StraightInsertSorting(arr);
console.log(arr);
function StraightInsertSorting(arr){
	let len = arr.length;
	let temp;
	for(let i = 1;i < len;++i){
		temp = arr[i];//记录当前需要被插入的数
		for(let j = i - 1; j >= 0;j--){
			if(temp < arr[j]){
				arr[j + 1] = arr[j];
				arr[j] = temp;
			}
		}
	}
}