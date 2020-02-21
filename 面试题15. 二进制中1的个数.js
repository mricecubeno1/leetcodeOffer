//请实现一个函数，输入一个整数，输出该数二进制表示中 1 的个数。例如，把 9 表示成二进制是 1001，有 2 位是 1。因此，如果输入 9，则该函数输出 2。
//这道题中整数也就是包含负数，考虑左移，或者无符号右移按位与操作，计数

//补码的符号位是参与运算的！！！！！！！！！！！！！！！！！

/**
 * @param {number} n
 * @return {number}
 */
/**自身与自身减一后的数比较可以除掉最末尾的1 */
var hammingWeight = function(n) {
    var m =0;
    while(n!=0){
        n= n&(n-1);
        var nn = n.toString(2);
        m++;
    }
    return m; 
};



/**左移算法 */
// var hammingWeight = function(n) {
//     var m =0;
//     var nn = parseInt(n);
//     var flag = 1;
//     while(flag!=0){
//         if((nn&flag)!=0){
//             m++;
//         }
//         flag=flag<<1;
//     }
//     return m; 
// };

/**无符号右移算法 */
// var hammingWeight = function(n) {
//     let cnt = 0
//     while(n) {
//         cnt += n & 1
//         n >>>= 1
//     }
//     return cnt
// };

console.log(hammingWeight(-9));