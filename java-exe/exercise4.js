// Demerit points
// Speed Limit = 70
// 5 -> 1 point
// Math. floor (1.3)
// 12 points -> suspended

function checkSpeed(speed){
    const speedLimit = 70;
    const kmPerPoint = 5;

    if (speed < speedLimit + kmPerPoint){
        console.log('OK');
        return;
    }
    const point = Math.floor((speed - speedLimit) / kmPerPoint);
    if (point >= 12)
        console.log('liscnce suspended'); 
    else
        console.log('points',point);
}


checkSpeed(75);