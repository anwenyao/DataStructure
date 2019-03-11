/*
声明一个对象ifExist，用于存放对应字符和其所在的下标。
声明起始字符串，表示子字符串的起始位置。
1.遍历字符串，若字符不存在，将字符作为属性，下标作为值存进ifExist。
2.若字符存在，找到原始字符的坐标，替换起始坐标的值并得到一个无重复子字符串的长度。将这个字符之前的字符坐标在ifExist中设为-1.当前坐标替换上一个相同字符的坐标。
3.以此类推。
*/
function longestSubstring(s){
	let longestLength = 1;//最长不重复子串的长度
	let ifExist = {};//存放对应字符和其所在的下标
	let startIndex = 0;
	if(s.length === 0){
		return 0;
	}
	
	ifExist[s[0]] = 0;
	for(let i = 1,len = s.length;i < len;++i){		
		if(ifExist[s[i]] + 1){
			longestLength = longestLength > (i - startIndex) ? longestLength : (i - startIndex);
			startIndex = ifExist[s[i]] + 1;//例如 abcec 将起始字符的下标移到e //for循环中的i还要+1 
			ifExist[s[i]] = i;//覆盖上一个相同字符的值
			//释放起始坐标之前的字符
			for(let char in ifExist){
				if(ifExist[char] < startIndex){
					ifExist[char] = -1;
				}
			}
		}else{
			ifExist[s[i]] = i;
		}	
		
	}
	//最后一个子字符串
	longestLength = longestLength > (s.length - startIndex) ? longestLength : (s.length - startIndex);
	return longestLength;

}


/*
声明一个对象Set，用于存放字符串的字符。
声明startIndex作为字符串的不重复起始位置，声明j作为字符串的下标用来遍历字符串
利用Set.has()判断当前字符串是否在set中.
	若没有,则将其放入Set,++j,得到一个新的长的j - startIndex与原来的作比较
	若有,则从startIndex开始移除字符,++startIndex,直到移除到当前重复的字符
*/

function longestSubstring1(s){
	const set = new Set();
	let startIndex = 0;
	let j = 0;
	let len = s.length;
	let maxLength = 0;
	while(j < len && startIndex < len){
		if(!set.has(s[j])){
			set.add(s[j++]);
			maxLength = maxLength > (j - startIndex)?maxLength : (j - startIndex);
		}else{
			/*"abcdec" 当到了第二个c 
			startIndex从0开始delete元素 此时s[j]一直是'c' 
			startIndex一直往后遍历 知道删除第一个'c'字符
			*/
			set.delete(s[startIndex++]);
		}
	}
	return maxLength;
}


let str = "a   ascsadac";
console.log(longestSubstring(str),longestSubstring1(str));