//针对有序的数据
function BinarySearch(arr,key){//数组 要查找的值
	let low = 0;
	let high = arr.length - 1
	let mid = Math.ceil((low+high)/2);

	while(low <= high){
		if(key > arr[mid]){
			low = mid + 1;
		}else if(key < arr[mid]){
			high = mid - 1;
		}else{
			return mid;
		}
		mid = Math.ceil((low+high)/2);
	}
	return -1;//不存在返回-1
}

let arr = [1,2,3,4,6,7,8,9];
console.log(BinarySearch(arr,10));