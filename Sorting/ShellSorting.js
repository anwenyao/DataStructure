'use strict'
// let arr = [2,6,56,96,12,46,25,36,45,69];
// let arr1 = [894,23,5698,754,325,695,2,36,69];
// console.log(arr1);
// ShellSorting(arr1);
// console.log(arr1);

function ShellSorting(arr){
	//储存d的增量数组
	let len = arr.length;
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


//2018-8-9
//*************优化后***************
//希尔排序
function shellInsert(arr,d){// 数组 增量
	for(let i = d;i < arr.length;i += d){
		let key = arr[i];
		let j = i - d;
		while(j >= 0 && arr[j] > key){
			arr[j + d] = arr[j];
			j -= d;
		}
		arr[j + d] = key;
	}
	// console.log(arr);
}

function shellSorting(arr,dArr){//数组 增量序列
	for(let i = 0; i < dArr.length;++i){
		shellInsert(arr,dArr[i]);
	}
	// console.log(arr);
}

const testSort = require('./testSort.js');
let ds = [5,3,1];
for(let i = 0;i < 7;++i){
	let arr = testSort.getArr();
	let temp = arr.slice(0);
	shellSorting(arr,ds);
	testSort.isSame(temp,arr);
}