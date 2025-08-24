function Stopwatch(){
    let startTime, endTime, running, duration = 0;


    Object.defineProperty(this, 'duration', {           // here object.keys(this,'key',{function})
        get: function() {return duration;},
    });

    Object.defineProperty(this, 'startTime', {           // here object.keys(this,'key',{function})
        get: function() {return startTime;}
    });
    Object.defineProperty(this, 'endTime', {           // here object.keys(this,'key',{function})
        get: function() {return endTime;}
    });
    Object.defineProperty(this, 'running', {           // here object.keys(this,'key',{function})
        get: function() {return running;}
    });
}

    Stopwatch.prototype.start = function() {
        if (this.running)            
            throw new Error('Stoptwatch is allready start');

        this.running = true;             // if it's running than calculate time      

        this.startTime = new Date();                 // Date is for get current date
    };

    Stopwatch.prototype.stop = function(){
        if (!this.running)
            throw new Error('Stopwatch is not started');

        this.running = false;                // if is not runnig than it's stop

        this.endTime = new Date();

        const seconds = (endTime.getTime() - startTime.getTime()) / 1000;           // formula for calculate time (getTime is for get system time)
        duration += seconds;        // duration = second + 1;
    };

    Stopwatch.prototype.reset = function(){
        this.startTime = null;           // after reset initial startTime is null(0) 
        this.endTime = null;                // or also endTime is also null(0)
        this.running = false;            // stopwatch is not in running position that's why running is false
        duration = 0;               //  or duration is 0 because stopwatch is not started
    };

const sw = new Stopwatch();


// this is worth less because it's not accesible.