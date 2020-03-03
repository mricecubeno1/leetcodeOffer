var numbers = [1,2,3];
numbers.forEach((item,index,array)=>{
    array[index] += 1;
});
console.log(numbers);