
//生成(max,min)范围的随机数
function getRandom(max,min){
	return Math.floor(Math.random()*(max - min + 1) + min);
}

//生成随机数组，长度和数组元素都是随机的
exports.getArr = function(){//作为接口
	let len = getRandom(1,15);
	let arr = [];
	for(let i = 0;i < len;++i){
		arr.push(getRandom(0,50));
	}
	return arr;
}

//判断两个数组是否相同,不看顺序
exports.isSame = function(arr1,arr2){//作为接口
	console.log(arr1);
	console.log(arr2);
	if (arr1.length != arr2.length) {
		console.log('不相同');
		return false;
	}
	for(let i = 0;i < arr1.length;++i){
		if (arr2.indexOf(arr1[i]) < 0) {
			console.log('不相同');
			return false;
		}	
	}
	console.log('相同');
	return true;
	
}