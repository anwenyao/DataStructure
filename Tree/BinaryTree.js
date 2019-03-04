//二叉链表 lchild rchild
//三叉链表 lchild rchild parent
function Node(data){
	this.data = data;
	this.lchild = null;
	this.rchild = null;
	this.parent = null;
}

function BinaryTree(){
	this.head = null;
}

BinaryTree.prototype.createTree = function(nodes){//树的所有元素
	let head = new Node(nodes[0]);
	this.head = head;
	createTree(head,1,2,nodes);
	function createTree(currentNode,lindex,rindex,datas){//当前树节点 左子树元素的下标 同前 树的所有元素
		if(currentNode == null) return;

		//判断 左子树是否不存在
		if(datas[lindex] == 0 || datas[lindex] == undefined) 
			currentNode.lchild = null;
		else {
			currentNode.lchild = new Node(datas[lindex]);
			currentNode.lchild.parent = currentNode;
		}
		//判断右子树是否 不存在
		if(datas[rindex] == 0 || datas[rindex] == undefined) 
			currentNode.rchild == null;
		else {
			currentNode.rchild = new Node(datas[rindex]);
			currentNode.rchild.parent = currentNode;
		}
		createTree(currentNode.lchild,2*lindex + 1,2*lindex + 2,datas);
		createTree(currentNode.rchild,2*rindex + 1,2*rindex + 2,datas);
		
	}
};

//先序遍历 根节点 左子树 右子树
BinaryTree.prototype.preOrderTranverse = function(){

	let head = this.head;
	let currentNode = head;
	let datas = [];

	tranverse(currentNode);
	function tranverse(current){
		if(current == null) return;
		datas.push(current.data);
		// console.log(current.data);
		tranverse(current.lchild);
		tranverse(current.rchild);
	}

	return datas;
};

BinaryTree.prototype.inOrderTranverse = function(){

	let head = this.head;
	let currentNode = head;
	let datas = [];

	tranverse(currentNode);
	function tranverse(current){
		if(current == null) return;
		tranverse(current.lchild);
		datas.push(current.data);
		// console.log(current.data);
		
		tranverse(current.rchild);
	}

	return datas;
};

const tree = [1,2,3,4,0,0,0,5,0]; 
const appleTree = new BinaryTree();
appleTree.createTree(tree);
console.log(appleTree.inOrderTranverse());
// console.log(appleTree.head);