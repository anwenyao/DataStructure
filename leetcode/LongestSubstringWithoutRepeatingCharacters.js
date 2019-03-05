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

let str = "abcabcbb";
console.log(longestSubstring(str));
