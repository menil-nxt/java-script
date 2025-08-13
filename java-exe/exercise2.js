// landscape or portrait.

function landScape (width,height){
    return (width > height) ? true : false ;
}

let portrait = landScape(250,465)
console.log(portrait);

// simple way (short way)

function landScape (width,height){
    return (width > height);   // no need to write ( ? true : false) it's give you directly.
}

let run = landScape(650,465)
console.log(run);