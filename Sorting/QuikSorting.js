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
		while(arr[high] > key && low < high){
			high--;
		}
		arr[low] = arr[high];
		while(arr[low] < key && low < high){
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

//let arr = [24,6,56,96,12,46,25,36,45,69];
let arr = [1,16,56,96,2,46,225,34,45,9];
console.log(arr);
QuikSorting(arr,0,arr.length - 1)
console.log(arr);