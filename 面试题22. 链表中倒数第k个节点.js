/*输入一个链表，输出该链表中倒数第k个节点。为了符合大多数人的习惯，本题从1开始计数，即链表的尾节点是倒数第1个节点。例如，一个链表有6个节点，从头节点开始，它们的值依次是1、2、3、4、5、6。这个链表的倒数第3个节点是值为4的节点。*/
/**
* Definition for singly-linked list.
* function ListNode(val) {
*     this.val = val;
*     this.next = null;
* }
*/
/**
* @param {ListNode} head
* @param {number} k
* @return {ListNode}
*/
//第一种解法，设置两个指针right和left，差为k，先让right走k个节点，再让left和right同步走，当right走到表尾，left就是倒数第k个节点
var getKthFromEnd = function(head, k) {
   var right = head;
   for(let i = 0;i<k;i++){
       if(right == null){
            return 0;
       }
        right = right.next;
   }
   var left = head;
   while(right){
        left= left.next;
        right= right.next;
   }
   return left;
};

//第二种解法，两次循环，先跑一遍得到输入的链表的length，然后找到length-k的节点
var getKthFromEnd = function(head, k) {
    var len = 0;
    var node1 = head;
    var node2 = head;
    while(node1){
        node1 = node1.next;
        len++;
    }
    for(let i = 0;i<len-k;i++){
        node2 = node2.next;
    }
    return node2;
 };