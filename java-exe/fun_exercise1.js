// sum of arguments

function sum(...item){
    if (item.length === 1 && Array.isArray(item[0]))
        item = [...item[0]];
    return item.reduce((a , b) => a + b);
}

console.log(sum([1,2,3,4]));