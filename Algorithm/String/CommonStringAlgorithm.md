## 计算某个字符串出现的次数

**方法1**：通过用正则表达式匹配所有符合要求的字符串，用空字符串替换，和原本的字符串长度相减，再除以计算字符串的长度
```
function timeOfStr01(str,s){//原字符串 需要计算的字符串
	let reg = new RegExp(s,"g");//正则表达式匹配字符串中所有的要求字符串
	let time = 0;//记录出现的次数
	let tempStr = str.replace(reg,"");
	return (str.length - tempStr.length)/s.length;
}
```

**方法2**：通过indexOf的第二个参数(字符串中开始检索的位置)
```
function timeOfStr02(str,s){
	let count = 0;//计算s出现的次数
	let len = s.length;
	let start = -len;//开始检索的位置	
	while(true){
		start = str.indexOf(s,start + len);//start+1避免一直返回查询到的第一个坐标 
		if (start == -1) break;
		count++;	
	}
	return count;
}
```

## 使用正则表达式实现trim功能
```
var str = "   a     bccc      ";
String.prototype.trim = function(){
	var s = "";
	s = this.replace(/^ */,"").replace(/ *$/,"");//其中，/^ */匹配开头的空格 / *$/匹配结尾的空格
	return s;
};

console.log("["+str.trim()+"]");
```

## 最长回文字符串（Longest Palindromic Substring）

回文字符串有两种情况，一种是对称轴为双字符(例如abbc)，另一种对称轴为单轴(例如aba),因此分两种情况讨论。声明两个下标标识front和next，分别是当前下标的上一个和下一个。front对向前遍历，next向后遍历，如若相同，继续遍历，否则遍历结束。当前回文字符串与上一个比较，将长度长的记录下来。最终返回最长的回文字符串。

```javascript
function symmetricalSubstr(str){
    let front = 0;//上一个
    let next = 0;//下一个
    let longestSubstr = "";
    let newlongestSubstr = "";
    if(str.length == 1){
        return str;
    }
    for(let i = 1,len = str.length; i < len;++i){
        if(str[i] == str[i + 1]){
            newlongestSubstr = str[i] + str[i];
            front = i - 1;
            next = i + 2;
        }else{
            newlongestSubstr += str[i];
            front = i - 1;
            next = i + 1;
        }    
        while( front >= 0 && next < len){
            if(str[front] != str[next]) break;
            newlongestSubstr = str[front] + newlongestSubstr;
            newlongestSubstr += str[front];
            front --;
            next ++;
        } 
        longestSubstr = longestSubstr.length > newlongestSubstr.length?longestSubstr:newlongestSubstr;//将当前回文字符串与上一个作比较
        newlongestSubstr = "";
        
    }
    return longestSubstr;
}
```