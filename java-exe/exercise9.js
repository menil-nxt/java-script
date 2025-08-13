// Grade 

// marks 1 to 59 = F
// marks 60 to 69 = D
// marks 70 to 79 = C
// marks 80 to 89 = B
// marks 90 to 100 = A


function calculategread(marks){
    const avg = calculateavg(marks);
    if (avg < 60) return 'F';
    if (avg < 70) return 'D';
    if (avg < 80) return 'C';
    if (avg < 90) return 'B';
    return 'A';
}


function calculateavg(array){
    let sum = 0;
    for (let value of array)
        sum += value;
    return sum / array.length;
}

const marks = [80,78,67];
console.log(calculategread(marks));