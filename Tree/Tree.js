//结点
function Node(data){
	this.data = data;//结点存储的值
	this.parent = null;//双亲
	this.children = [];//子结点
}


//树
function Tree(root){
	this.root = root;//根节点
}

Tree.prototype = {
	/*
	插入结点
	要插入的结点的双亲 要插入的结点
	*/
	insertChild:function(parent,node){

	},
	deleteChild:function(){

	},
	/*
	递归遍历
	*/
	traversal:function(){//树的遍历

	}
};