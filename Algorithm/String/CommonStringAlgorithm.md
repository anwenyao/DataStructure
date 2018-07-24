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
