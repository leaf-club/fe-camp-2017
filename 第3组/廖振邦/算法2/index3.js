/**
 * 
 * @param {*不是很懂为什么leetcode传的是数组,这个不是链表吗} l1 
 * @param {*} l2 
 */
var addTwoNumbers = function(l1, l2) {
    var s1=l1.val+"";
    while(l1.next!=null){
          s1+=l1.next.val
}
    var s2=l2.val+"";
       while(l2.next!=null){
          s2+=l2.next.val
}
    var num1=parseInt(s1.split("").reverse().join(""));
    var num2=parseInt(s2.split("").reverse().join(""));
    return num1+num2
};