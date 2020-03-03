/**给定两个排序后的数组 A 和 B，其中 A 的末端有足够的缓冲空间容纳 B。 编写一个方法，将 B 合并入 A 并排序。

初始化 A 和 B 的元素数量分别为 m 和 n。*/
/**
 * @param {number[]} A
 * @param {number} m
 * @param {number[]} B
 * @param {number} n
 * @return {void} Do not return anything, modify A in-place instead.
 */
//拼接+冒泡
var merge = function (A, m, B, n) {
    for (let i = 0; i < n; i++) {
        //A.push(B[i]);
        A[m + i] = B[i];
    }
    for (let k = m + n; k > 0; k--) {
        for (let j = 0; j < k - 1; j++) {
            if (A[j] > A[j + 1]) {
                var tem = A[j];
                A[j] = A[j + 1];
                A[j + 1] = tem;
            }
        }
    }
};

//lily
var merge = function(A, m, B, n) {
        A.splice(m, n);
    
        for (let i = 0; i < B.length; i++) {
            if (A.length == 0 ){
                // break;
                if(B.length != 0){
                    A.push(B[i]);
                }else{
                    break;
                }
            } 
            else if(B[i] >= A[A.length - 1]) {
                A.push(B[i]);
            } else {
                for (let j = 0; j < A.length; j++) {
                    if (A[j] >= B[i]) {
                        A.splice(j, 0, B[i]);
                        break;
                    }
                }
            }
        }
    
    //     if (A.length < (m + n)) {
    //          A.concat(B.splice(A.length - m, m + n - A.length))
    //          A.concat(B)
    //     } else {
    //         return A;
    //     }
    
    };