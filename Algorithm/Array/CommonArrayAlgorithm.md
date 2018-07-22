## 去除重复数组

**方法1**：利用set不可重复的性质
```
[...new Set(array)]
console.log([...new Set(array)]);//[...set]将set转换为数组
```

**方法2**：利用indexOf方法判断是否有重复字符
```
for(let i = 0;i < array.length;++i){
	if(arr_cy.indexOf(array[i]) == -1){
		arr_cy.push(array[i]);
	};
}
console.log(arr_cy);
```

**方法3**：利用对象对应属性赋值来判断是否有重复字符
```
let ifExist = {};
let cpArr = [];
for(let i = 0;i < array.length;++i){
	if(!ifExist[array[i]]){
		ifExist[array[i]] = 1;
		cpArr.push(array[i]);
	}
}
console.log(cpArr);
```
