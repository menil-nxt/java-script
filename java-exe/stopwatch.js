function Stopwatch(){
    let startTime, endTime, running, duration = 0;

    this.start = function() {
        if (running)            
            throw new Error('Stoptwatch is allready start');

        running = true;             // if it's running than calculate time      

        startTime = new Date();                 // Date is for get current date
    };

    this.stop = function(){
        if (!running)
            throw new Error('Stopwatch is not started');

        running = false;                // if is not runnig than it's stop

        endTime = new Date();

        const seconds = (endTime.getTime() - startTime.getTime()) / 1000;           // formula for calculate time (getTime is for get system time)
        duration += seconds;        // duration = second + 1;
    };

    this.reset = function(){
        startTime = null;           // after reset initial startTime is null(0) 
        endTime = null;                // or also endTime is also null(0)
        running = false;            // stopwatch is not in running position that's why running is false
        duration = 0;               //  or duration is 0 because stopwatch is not started
    };

    Object.defineProperty(this, 'duration', {           // here object.keys(this,'key',{function})
        get: function() {return duration;}
    });


}