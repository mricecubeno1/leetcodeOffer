//字符串的左旋转操作是把字符串前面的若干个字符转移到字符串的尾部。请定义一个函数实现字符串左旋转操作的功能。比如，输入字符串"abcdefg"和数字2，该函数将返回左旋转两位得到的结果"cdefgab"。
function reverseLeftWords(s,n){
    var lefts = s.slice(0,n);
    var rights = s.slice(n);
    return rights+lefts;
}

const readline = require('readline');
const r1 = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
const lines = [];
// r1.question('输入文字是：',(answer)=>{
//     s = answer;
//     // console.log(answer);
//     r1.close();
// });
r1.on('line',(line)=>{
    lines.push(line);
    if(lines.length==2){
        console.log(reverseLeftWords(lines[0],lines[1]));
        r1.close();
    }
    
});
