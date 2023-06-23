function timeToWalk(steps, stepsInMeters, studentSpeed) {
    const distanceMeters = steps * stepsInMeters;
    const speedMeterSec = studentSpeed / 3.6;
    const time = distanceMeters / speedMeterSec;
    const rest = Math.floor(distanceMeters / 500);

    const timeMin = Math.floor(time / 60);
    const timeSec = Math.floor(time - timeMin * 60);
    const timeHr = Math.floor(time / 3600);

    const hh = timeHr < 10 ? "0" : "";
    const mm = timeMin + rest < 10 ? "0" : "";
    const ss = timeSec < 10 ? "0" : "";

    const output = `${hh + timeHr}:${Number(mm) + timeMin + rest}:${ss + timeSec}`;
    console.log(output);
}

function timeToWalk(stepsCount, footprintMetres, studentSpeed){
    let distance = stepsCount * footprintMetres;
    let restTimeSec = (Math.floor(distance / 500)) * 60;
    let speedMetersPerSec = (studentSpeed * 1000) / (60 * 60);
    let time = distance / speedMetersPerSec + restTimeSec ;
 
    let seconds = Math.round((time%60));
    time -= time%60;
    time = time / 60;
    let min = Math.floor((time % 60));
    time -= time%60;
    time = time / 60;
    let hr = Math.floor((time % 60));
    if(hr<10){        
        hr = '0' + hr;
    } 
    if(seconds<10){        
        seconds = '0' + seconds;
    } 
    if(min<10){        
        min = '0' + min;
    } 
 
    console.log(`${hr}:${min}:${seconds}`);    
}

function ttw(steps, foot, v){
    let s = (steps*foot)/1000;
    let t = s/v
    let hrs = Math.floor(t); //[hours]
    if (hrs<=9){
        hrs="0"+hrs
    }
    let minutes = Math.floor(t*60); //[min]
    let rest = 0;
    if (s/0.5>0) {
        rest=Math.floor(s/0.5);
        minutes += rest;
    }
    if (minutes<=9){
        minutes="0"+minutes
    }
    let seconds = (((t*60)%1)*60).toFixed(0) //[sec]

    console.log(`${hrs}:${minutes}:${seconds}`)
}

timeToWalk(4000, 0.60, 5);
timeToWalk(2564, 0.70, 5.5)