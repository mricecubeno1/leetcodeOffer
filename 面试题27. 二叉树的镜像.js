//请完成一个函数，输入一个二叉树，该函数输出它的镜像。
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
//二叉树相关问题一般都是递归
var mirrorTree = function(root) {
    if(root == null){
        return null;
    }
    var TemporaryNode = root.left;
    root.left = root.right;
    root.right = TemporaryNode;
    mirrorTree(root.left);
    mirrorTree(root.right);

    return root;
};