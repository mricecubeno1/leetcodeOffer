/**
给你一个 m x n 的网格 grid。网格里的每个单元都代表一条街道。grid[i][j] 的街道可以是：

1 表示连接左单元格和右单元格的街道。
2 表示连接上单元格和下单元格的街道。
3 表示连接左单元格和下单元格的街道。
4 表示连接右单元格和下单元格的街道。
5 表示连接左单元格和上单元格的街道。
6 表示连接右单元格和上单元格的街道。
 **/
/**
 * @param {number[][]} grid
 * @return {boolean}
 */
// var hasValidPath = function(grid) {
//     var 
// };
var quzheng = function (num) {
    var result = Math.round(num * 100) / 100;
    // console.log(Math.round(num * 100) / 100);
    return result;
}
console.log(quzheng(123.213153423));