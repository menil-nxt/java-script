// show only type of string values.


const movie = {
    name : 'menil',
    relese : 23,
    director : 'ganesh'
};

showPoroparty(movie);
function showPoroparty(obj){
    for (let key in obj)
        if (typeof obj[key] === 'string')
            console.log(key,obj[key]);

}