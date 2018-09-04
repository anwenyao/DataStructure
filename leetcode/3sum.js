//SumOfThree
var threeSum = function(nums) {
	let len = nums.length;
	if(len < 3) return [];
	quickSorting(0,len-1,nums);
	let arr =[];
	
    for(let i = 0;i < len - 2;++i){
    	if(nums[i] > 0) break;//第一个数不能>0
    	if(nums[i] == nums[i - 1]) continue;
    	// if(nums[i] != nums[i - 1]){//第一个数不能重复
		let j = i + 1;//第二个数的下标
		let k = len - 1;//第三个数的下标 越来越小
		while(j < k){
			let sum = -(nums[i] + nums[j]);
			//第三个数不能为负数
			if(nums[k] < 0) break;
			//sum > nums[k] 如果前两个值的相反数没找目标时已经大于nums[k]了 说明目标不存在
			//sum == nums[k] 理想状态
			//sum > nums[k] k--
			if(sum == nums[k]){
				arr.push([nums[i],nums[j],nums[k]]);
				//剔除相同
				j++;
				k--;
				while(nums[j] == nums[j - 1] && j < k)	j++;
    			while(nums[k] == nums[k + 1] && j < k)	k--;
			}else if(sum > nums[k]) j++;
			else	k--;
		}
    }
    return arr;
};


function quickSorting(low,high,arr){
	if(low < high){
		let mid = partition(low,high,arr);
		quickSorting(low,mid - 1,arr);//左边
		quickSorting(mid + 1,high,arr)
	}


	function partition(low,high,arr){
		let key = arr[low];
		while(low < high){
			while(low < high && key <= arr[high]){
				high--;
			}
			arr[low] = arr[high];
			while(low < high && arr[low] <= key){
				low++;
			}
			arr[high] = arr[low];
		}
		arr[low] = key;

		return low;
	}//end of partition
}


let arr =  [-1,0,0,0,0,1];
console.log(threeSum(arr));