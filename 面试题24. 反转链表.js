//定义一个函数，输入一个链表的头节点，反转该链表并输出反转后链表的头节点。
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    var tem = {};
    while(head.next != null){
        tem = head;
        head = head.next;
        head.next = tem;
    }
    return head;
};
//理解链表
var reverseList = function(head){
    if(head == null){
        return null;
    }
    var result = new ListNode(head.val);
    while(head.next !=null){
        var next = new ListNode(head.next.val);
        next.next = result;
        result = next;
        head = head.next;
    }
    return result;
}