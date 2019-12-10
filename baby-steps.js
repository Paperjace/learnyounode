// loop through array starting at [2] and ending at array.length
var sum = 0;
process.argv.forEach((element,index) => {
    if(index >= 2){
        sum = sum + Number(element);
    };
});
console.log(sum);