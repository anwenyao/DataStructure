'use strict'
let arr = [2,6,56,96,12,46,25,36,45,69];
let arr1 = [894,23,5698,754,325,695,2,36,69];
console.log(arr);
ShellSorting(arr);
console.log(arr);

function ShellSorting(arr){
	//储存d的增量数组
	let len = arr.length;
	console.log(len/2);
	let temp;//记录当前需要被插入的数
	let d = parseInt(len/2);//增量设置为n/2
	for(let i = parseInt(len/2);i >= 1;i=parseInt(i/2)){
		for(let j = d;j < len;j++){
			temp = arr[j];//记录当前需要被插入的数
			for(let k = j - d; k >= 0;k -= d){
				if(temp < arr[k]){
					arr[k + d] = arr[k];
					arr[k] = temp;
				}
			}//end of for
		}//end of for
		d = parseInt(d/2);
	}//end of for
}