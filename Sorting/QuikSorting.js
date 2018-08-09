'use strict'
//排序
//将数组第一个作为关键字,通过排序将数组划分为两部分,小于关键字的放在前面,大于关键字的放在后面
//具体步骤：
//先从high开始 找到第一个小于关键字的arr[high]将他赋值给arr[low] 然后high--
//然后从low开始，找到第一个大于关键字的arr[low]将他复制给arr[high] 然后 low++
//重复上述过程 最后将关键字赋值给arr[low(high)]
function partition(arr,low,high){
	let key = arr[low];//记录关键字的下标
	while(low < high){	
		while(arr[high] >= key && low < high){
			high--;
		}
		arr[low] = arr[high];
		while(arr[low] <= key && low < high){
			low++;
		}
		arr[high] = arr[low];
	}
	arr[low] = key;//将key赋值到中间位置
	return low;
}//end of partition

function QuikSorting(arr,low,high){
	if(low < high){
		let mid = partition(arr,low,high);
		QuikSorting(arr,low,mid - 1);
		QuikSorting(arr,mid + 1,high);
	}
}//end of QuikSorting

//测试排序
const testSort = require('./testSort.js');//引入测试模块
for(let i = 0;i < 7;++i){
	let arr = testSort.getArr();//获得随机生成的数组
	let temp = arr.slice(0);
	QuikSorting(arr,0,arr.length-1);
	testSort.isSame(temp,arr);//测试两个数组是否相同(不管顺序，包含的元素是否相同)
}