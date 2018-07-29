//链表
//链表存储有序的元素集合 但是*链表的元素在内存中并不是连续放置的*
//缺点：插入移动的成本比较高
//优点：添加和删除元素时不需要移动其他元素
//和数组比较：访问元素数组通过下标访问 链表需要从头开始迭代


//链表节点
function Node(element){
	this.element = element;//数据
	this.next = null;//指向下一个节点的指针
}

//链表
//属性包括 头结点 长度
//包括 增加(插到链表尾) 删除（根据下标） 插入（到指定位置） 查找（根据下标）展示(遍历显示所有节点)
function LinkedList(){
	this.head = null;//链表头
	this.tail = null;//尾巴节点
	this.length = 0;//链表的长度
}
//给链表添加元素
LinkedList.prototype.add = function(element){
	let node = new Node(element); 
	if(this.head == null){
		this.head = node;
		this.tail = node;
	}else{
		this.tail.next = node;//将当前节点加在尾节点的next指针上
		this.tail = node;//将当前节点置为尾节点
	}
	this.length++;
};

//打印链表所有元素
LinkedList.prototype.show = function(){
	let current = this.head;
	if(current == null){
		console.log("此链表为空！");
	}else{
		while(current!=null){
			console.log(current.element);
			current = current.next;
		}
	}
	
};
//将所有节点的数据部分以字符串的形式输出
LinkedList.prototype.toString = function(){
	let current = this.head;
	let str = "";
	if(current == null){
		return "此链表为空！";
	}else{
		while(current!=null){
			//三元运算符参考别人的写法 如果是最后一个数据 则不加','
			str += current.element + (current.next?",":"");
			current = current.next;
		}
	}
	return str;
};
//删除链表指定的节点 传入要删除的节点从1开始
LinkedList.prototype.remove = function(index){
	index = index?index:this.length;//如果没有参数 默认删除最后一个
	let current = this.head;
	let count = 1;//下标+1
	if(this.head == null || index > this.length || index < 1){
		console.log("此节点不存在！");
	}else{
		if(index == 1){
		this.head = this.head.next;
		}else{
			while(count++ < index - 1){
				//找到要删除的节点的上一个节点 把它的next指向下下个节点
				current = current.next;
			}
			current.next = current.next.next;
		}
		this.length--;//长度-1

	}
};


let list1 = new LinkedList();
list1.add("cat");
list1.add("dog");
list1.add("rabbit");
list1.add("horse");
list1.add("horse");
list1.add("apple");
console.log("list1 :"+list1.toString());
list1.remove(1);
list1.remove(1);
list1.remove();
console.log("list1 :"+list1.toString());

