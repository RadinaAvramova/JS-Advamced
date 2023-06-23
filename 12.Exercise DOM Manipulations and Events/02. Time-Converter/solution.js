function attachEventsListeners() {
    //config
    const RATIOS = {
        days: 1,
        hours: 24, 
        minutes: 1440,
        seconds: 86400,
    };

    //helper functions
    function convert(value, unit) {
        const inDays = value / RATIOS(unit);

        return {
            days: inDays,
            hours: inDays * RATIOS.hours,
            minutes: inDays * RATIOS.minutes,
            seconds: inDays * RATIOS.seconds,
        };
    }

    //capture elements
    const daysInput = document.getElementById("days");
    const hoursInput = document.getElementById("hours");
    const minutesInput = document.getElementById("minutes");
    const secondsInput = document.getElementById("seconds");

    //event listener setup
    document.querySelector("main").addEventListener("click", onConvert);

    //on click setup
    function onConvert(e) {
        if(e.target.tagName === "INPUT" && e.tagName.type === "button") {
            //get input
            const input = e.target.parentElement.querySelector('input[type = "text"]');

            //get time
            const inputValue = Number(input.value);
            const time = convert(inputValue, input.id);
            daysInput.value = time.days;
            hoursInput.value = time.hours;
            minutesInput.value = time.minutes;
            secondsInput.value = time.seconds;
        }
    }
}


function attachEventsListeners() {
    let daysInput = document.getElementById('days');
    let hoursInput = document.getElementById('hours');
    let minutesInput = document.getElementById('minutes');
    let secondsInput = document.getElementById('seconds');
 
    let daysBtn = document.getElementById('daysBtn');
    let hoursBtn = document.getElementById('hoursBtn');
    let minutesBtn = document.getElementById('minutesBtn');
    let secondsBtn = document.getElementById('secondsBtn');
 
    daysBtn.addEventListener('click', function() {
        let days = daysInput.value;
        hoursInput.value = days * 24;
        minutesInput.value = days * 1440;
        secondsInput.value = days * 86400;
    });
 
    hoursBtn.addEventListener('click', function() {
        let hours = hoursInput.value;
        daysInput.value = hours / 24;
        minutesInput.value = hours * 60;
        secondsInput.value = hours * 60 * 60;
    });
 
    minutesBtn.addEventListener('click', function() {
        let minutes = minutesInput.value;
        hoursInput.value = minutes / 60;
        daysInput.value = minutes / 60 / 24;
        secondsInput.value = minutes * 60;
    });
 
    secondsBtn.addEventListener('click', function() {
        let seconds = secondsInput.value;
        hoursInput.value = seconds / 60 / 60;
        minutesInput.value = seconds / 60;
        daysInput.value = seconds / 60 / 60 / 24;
    });
}


function attachEventsListeners() {
    let days = document.getElementById('days');
    let hours = document.getElementById('hours');
    let minutes = document.getElementById('minutes');
    let seconds = document.getElementById('seconds');
 
    function click(ev) {
        let targetElement = ev.target;
        let inputValue = targetElement.previousSibling.previousSibling.value;
 
        if (targetElement.id === 'daysBtn') {
            hours.value = inputValue * 24;
            minutes.value = inputValue * 1440;
            seconds.value = inputValue * 86400;
        } else if (targetElement.id === 'hoursBtn') {
            days.value = parseFloat((inputValue / 24).toString());
            minutes.value = inputValue * 60;
            seconds.value = inputValue * 3600;
        } else if (targetElement.id === 'minutesBtn') {
            days.value = parseFloat((inputValue / 1440).toString());
            hours.value = parseFloat((inputValue / 60).toString());
            seconds.value = inputValue * 60;
        } else {
            days.value = parseFloat((inputValue / 86400).toString());
            hours.value = parseFloat((inputValue / 3600).toString());
            minutes.value = parseFloat((inputValue / 60).toString());
        }
    }
 
    [...document.querySelectorAll('input[type="button"]')].forEach(btn => {
        btn.addEventListener('click', click);
    });
}

function attachEventsListeners() {
 
    let buttons = document.querySelectorAll('input[type="button"]');
 
    for (let button of buttons) {
        button.addEventListener("click", convert);
    }
 
    function convert(event) {
 
        let type = event.target.parentElement.children[1].id;
        let value = +event.target.parentElement.children[1].value;
 
        let seconds = 0;
 
        switch (type) {
            case"days":
                seconds = value * 24 * 60 * 60;
                break;
            case"hours":
                seconds = value * 60 * 60;
                break;
            case"minutes":
                seconds = value * 60;
                break;
            case"seconds":
                seconds = value;
                break;
        }
 
        let minutes = seconds / 60;
        let hours = minutes / 60;
        let days = hours / 24;
 
        document.getElementById("days").value = days;
        document.getElementById("hours").value = hours;
        document.getElementById("minutes").value = minutes;
        document.getElementById("seconds").value = seconds;
    }
}

function attachEventsListeners() {
    document.getElementById('daysBtn').addEventListener('click',onClickDays);
    document.getElementById('hoursBtn').addEventListener('click',onClickHours);
    document.getElementById('minutesBtn').addEventListener('click',onClickMinutes);
    document.getElementById('secondsBtn').addEventListener('click',onClickSeconds);
  
    let days = document.getElementById('days');
    let hours = document.getElementById('hours');
    let minutes = document.getElementById('minutes');
    let seconds = document.getElementById('seconds');
  
    function onClickDays() {
      hours.value = Number(days.value) * 24;
      minutes.value = Number(hours.value) * 60;
      seconds.value = Number(minutes.value) * 60;
    }
  
    function onClickHours() {
      days.value = (Number(hours.value) / 24);
      minutes.value = Number(hours.value) * 60;
      seconds.value = Number(minutes.value) * 60;
    }
  
    function onClickMinutes() {
      hours.value = (Number(minutes.value) / 60);
      days.value =(Number(hours.value) / 24);
      seconds.value = Number(minutes.value) * 60;
    }
  
    function onClickSeconds() {
      minutes.value = (Number(seconds.value) / 60);
      hours.value = (Number(minutes.value) / 60);
      days.value =(Number(hours.value) / 24);
    }
  }

  
  function attachEventsListeners() {
    // config
    const RATIOS = {
      days: 1,
      hours: 24,
      minutes: 1440,
      seconds: 86400,
    };
  
    // helper func
    function convert(value, unit) {
      const inDays = value / RATIOS[unit];
  
      return {
        days: inDays,
        hours: inDays * RATIOS.hours,
        minutes: inDays * RATIOS.minutes,
        seconds: inDays * RATIOS.seconds,
      };
    }
  
    // get elements
    const daysInput = document.getElementById("days");
    const hoursInput = document.getElementById("hours");
    const minutesInput = document.getElementById("minutes");
    const secondsInput = document.getElementById("seconds");
  
    // event listener setup
    document.querySelector("main").addEventListener("click", onConvert);
  
    function onConvert(e) {
      if (e.target.tagName == "INPUT" && e.target.type == "button") {
        // get input
        const input = e.target.parentElement.querySelector('input[type= "text"]');
  
        // get time
        const time = convert(Number(input.value), input.id);
        daysInput.value = time.days;
        hoursInput.value = time.hours;
        minutesInput.value = time.minutes;
        secondsInput.value = time.seconds;
      }
    }
  }