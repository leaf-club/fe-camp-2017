/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  var l3 = new ListNode(0);
  var result = l3;
  var tag = 0;
  while (l1 || l2) {
    if (l1 && l2) {
      var temp = new ListNode(0);
      if (l1.val + l2.val + tag < 10) {
        temp.val = l1.val + l2.val + tag;
        tag = 0;
      }
      else {
        temp.val = (l1.val + l2.val + tag) % 10;
        tag = 1;
      }
      l3.next = temp;
      l1 = l1.next;
      l2 = l2.next;
      l3 = l3.next;
    }
    else if (l1) {
      if (tag === 0) {
        l3.next = l1;
      }
      else {
        var temp = new ListNode(0);
        if (l1.val + tag < 10) {
          temp.val = l1.val + tag;
          tag = 0;
        }
        else {
          temp.val = (l1.val + tag) % 10;
          tag = 1;
        }
      }
      l3.next = temp;
      l1 = l1.next;
      l3 = l3.next;
      console.log('1');
    }
    else if (l2) {
      if (tag === 0) {
        l3.next = l2;
      }
      else {
        var temp = new ListNode(0);
        if (l2.val + tag < 10) {
          temp.val = l2.val + tag;
          tag = 0;
        }
        else {
          temp.val = (l2.val + tag) % 10;
          tag = 1;
        }
      }
      l3.next = temp;
      l2 = l2.next;
      l3 = l3.next;
    }
  }
  if (tag === 1) {
    var temp = new ListNode(1);
    l3.next = temp;
  }
  return result.next;
};