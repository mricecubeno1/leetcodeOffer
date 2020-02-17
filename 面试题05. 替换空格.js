//请实现一个函数，把字符串 s 中的每个空格替换成"%20"。
/**
 * @param {string} s
 * @return {string}
 */
//正则表达式
var replaceSpace = function(s) {
    return s.replace(/ /g,"%20");
};
console.log(replaceSpace('We/ /are happy.'));