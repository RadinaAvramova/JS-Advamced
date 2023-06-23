function roadRadar(speed, area) {
    let limit = 0;

    switch (area) {
        case "motorway":
            limit = 130;
            break;
        case "interstate":
            limit = 90;
            break;
        case "city":
            limit = 50;
            break;
        case "residential":
            limit = 20;
            break;
    }

    if(speed <= limit) {
        const output = `Driving ${speed} km/h in a ${limit} zone`;
        console.log(output);
        return;
    }

    let status = '';
    let speeding = speed - limit;

    if(speeding <= 20) {
        status = "speeding";
    } else if(speeding > 20 && speeding <= 40) {
        status = "excessive speeding";
    } else {
        status = "reckless driving";
    }

    let output = `The speed is ${speeding} km/h faster than the allowed speed of ${limit} - ${status}`;
    console.log(output);
}

function roadRadar(speed, area) {

    const limitsDictionnary = {
        motorway: 130, 
        interstate: 90, 
        city: 50,
        residential: 20
    }

    const limit = limitsDictionnary[area];

    if(speed <= limit) {
        const output = `Driving ${speed} km/h in a ${limit} zone`;
        console.log(output);
        return;
    }

    let status = '';
    let speeding = speed - limit;

    if(speeding <= 20) {
        status = "speeding";
    } else if(speeding > 20 && speeding <= 40) {
        status = "excessive speeding";
    } else {
        status = "reckless driving";
    }

    let output = `The speed is ${speeding} km/h faster than the allowed speed of ${limit} - ${status}`;
    console.log(output);
}

function solve(speed,area){

    let info = '';

    let speedLimit = 0;

    let difference = 0;

    let status = '';

 

    if(area === 'city'){

        speedLimit = 50;

    }else if(area === 'residential'){

        speedLimit = 20;

    }else if(area === 'interstate'){

        speedLimit = 90;

    }else if(area === 'motorway'){

        speedLimit = 130;

    }

 

    if(speed <= speedLimit && speed > 0){

            info = `Driving ${speed} km/h in a ${speedLimit} zone`

    }else{

            difference = speed - speedLimit;

            if(difference<=20){

                status = 'speeding';

            }else if(difference>20 && difference<=40){

                status = 'excessive speeding';

            }else{

                status = 'reckless driving';

            }

            info = `The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`

    }





 

    console.log(info);

}

function solve(speed, area) {

    let result = ""
  
    let limit = {
  
      "motorway": 130,
  
      "interstate" : 90,
  
      "city" : 50,
  
      "residential" : 20
  
    }
  
    let diff = speed - limit[area]
  
    if(speed <= limit[area]) {
  
      console.log(`Driving ${speed} km/h in a ${limit[area]} zone`)
  
    } else {

        if(diff <= 20) result = "speeding"
        if(diff > 20 && diff <= 40) result = "excessive speeding"
        if(diff > 40) result = "reckless driving"
  
      console.log(`The speed is ${diff} km/h faster than the allowed speed of ${limit[area]} - ${result}`)
  
    }
  
  }

roadRadar(40, 'city' );
roadRadar(21, 'residential');
roadRadar(120, 'interstate');
roadRadar(200, 'motorway' )