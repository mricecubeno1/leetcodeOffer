//输入一棵二叉树的根节点，求该树的深度。从根节点到叶节点依次经过的节点（含根、叶节点）形成树的一条路径，最长路径的长度为树的深度。
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
//第一种方法
//其实这是后序遍历递归的算法
//树的前中后序遍历是个递归的定义
var maxDepth = function (root) {
    return root == null ? 0 : Math.max(maxDepth(root.left),maxDepth(root.right))+1 ;
};



//第二种方法
//层序遍历迭代方法
var maxDepth = function (root) {
    var queue = [];
    var num = 0;
    if(root == null){
        return 0;
    }else{
        queue.push(root);
    }
    while(queue.length != 0){
        num++;
        var len = queue.length;
        for(let i = 0;i<len;i++){
            var currentNode = queue.shift();
            if(currentNode.left != null){
                queue.push(currentNode.left);
            }
            if(currentNode.right != null){
                queue.push(currentNode.right);
            }
        }
    }
    return num;
};