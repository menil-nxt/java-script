const radius = [3,2,1,4];

const area = function(radius){
    return Math.PI * radius * radius;
}

const circunference = function(radius){
    return 2 * Math.PI * radius; 
}

const Diameter = function(radius){
    return 2 * radius;
}

Array.prototype.calculate = function(logic){
    const output = [];
    for (let i = 0; i < radius.length; i++){
        output.push(logic(this[i]));
    }
    return output;
}

console.log(radius.calculate(area));
// console.log(calculate(radius,circunference));
// console.log(calculate(radius,Diameter));


