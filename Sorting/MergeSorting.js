//1.递归法
//一个长度为n的数组最终会调用MerSorting() 2*n-1次，这意味着如果需要排序的数组长度很大会在某些栈小的浏览器上发生栈溢出错误。
function Merge(left,right){
	let result = [];//存储两个数组排序归并后的数组
	let i = 0;//result数组的下标
	while(left.length !=0 && right.length!=0){
		if(left[0] >= right[0]){
			result[i++] = right.shift();
		}else{
			result[i++] = left.shift();
		}

	}//end of while
	return result.concat(left).concat(right);
}

function MerSorting(arr){
	if(arr.length == 1){
		return arr;
	}
	let mid = Math.floor(arr.length / 2);//分成两个数组 分别进行排序
	let left = arr.slice(0,mid);//slice左闭右开
	let right = arr.slice(mid);

	return Merge(MerSorting(left),MerSorting(right));
}

//测试排序
const testSort = require('./testSort.js');
for(let i = 0;i < 7;++i){
	let arr = testSort.getArr();
	let temp = arr.slice(0);
	arr = MerSorting(arr);
	testSort.isSame(temp,arr);
}