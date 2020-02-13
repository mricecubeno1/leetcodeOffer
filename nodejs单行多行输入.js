//单行输入
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
 
 
rl.on('line',function(line){
    var tokens = line.split(' '); //获取第一行的内容，存为数组
    console.log(result);
});
 

//多行输入，固定行数的输入（两种方法）
//方法1：
 
var readline = require('readline');
    const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
 
});
 
const lines = [];
 
rl.on("line", function(line) {
    lines.push(line); //将输入放到新建的空数组中
 
    if (lines.length === 2){ //判断，如果输入的行数等于固定值时开始处理
    //通过数组索引分别得到数组中每一行的数据，并做相应操作
    var arr1= lines[0];
    console.log(result);
 
}
 
});
 
 
 
//方法2：
 
var k=2; //这里代表题目中设定好的输入的行数
var rows=[]; //用于存储每行的输入
 
rl.on('line',function(line){
    rows.push(line); //将每次输入的行数据存入
 
    if(k==rows.length){ //当输入的行数等于设定的k值时，开始逻辑处理
        console.log(result); //输出结果
        rows.length=0; //状态重置
    }
});
 

//多行输入，第一行是接下来输入数据的行数
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
 
 
var k=-1; //先给行数置-1,表示还没开始读取
var rows=[]; //用于存储每行的输入
 
 
rl.on('line',function(line){
    if(k<0){
        k=parseInt(line.trim()); //读取第一行，得到接下来输入的行数
    }else{
    
        rows.push(line.trim()); //将每次输入的行数据存入
 
        if(k==rows.length){ //当输入的行数等于设定的k值时，开始逻辑处理
 
        }
    
        console.log(result); //输出结果
 
        rows.length=0; //状态重置
        k=-1;
    }
 
});
