'use strict'
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

//优化冒泡算法
//避免出现后面的数据已经有序还要遍历比较的情况 eg.[9,1,2,3,4]
function bubble2(arr){
	let flag = true;
	for(let i = 0; i < arr.length - 1 && flag;++i){
		flag = false;
		for(let j = 0;j < arr.length - i -1;++j){
			if(arr[j] > arr[j + 1]){
				flag = true;//有交换就设置flag为true
				let temp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = temp;
			}
		}
	}
}
//测试排序
const testSort = require('./testSort.js');//引入测试模块
for(let i = 0;i < 7;++i){
	let arr = testSort.getArr();//获得随机生成的数组
	let temp = arr.slice(0);
	bubble2(arr);
	testSort.isSame(temp,arr);//测试两个数组是否相同(不管顺序，包含的元素是否相同)
}