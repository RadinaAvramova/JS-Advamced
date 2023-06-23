function mouseGradient() {
    let gradient = document.getElementById('gradient');
    gradient.addEventListener('mouseover', gradientMove);
    gradient.addEventListener('mouseout', gradientOut);
    function gradientMove(event) {
        let power = event.offsetX / (event.target.clientWidth - 1);
        power = Math.trunc(power * 100);
        document.getElementById('result').textContent = power + "%";
    }
    function gradientOut(event) {
        document.getElementById('result').textContent = "";
    }
};

function mouseGradient() {
    let gradient = document.getElementById('gradient');
    gradient.addEventListener('mousemove', hoverHandler);
    gradient.addEventListener('mouseout', clearHandler);
    let resultDiv = document.getElementById('result');

    function hoverHandler(e) {
        let offsetX = e.offsetX;
        let element = e.target;
        let elementX = element.clientWidth;

        let xPercent = Math.trunc((offsetX / elementX) * 100);
        resultDiv.textContent = `${xPercent}%`;
    }

    function clearHandler() {
        resultDiv.textContent = '';
    }
}

function attachGradientEvents() {
    let element = document.getElementById('gradient-box');
    let result = document.getElementById('result');
  
    element.addEventListener('mousemove',getPercentage);
    element.addEventListener('mouseleave',clear);
  
    function getPercentage(event) {
        let percentage = (event.offsetX / (event.target.clientWidth -1)) * 100;
        result.textContent = `${Math.floor(percentage)}%`
    }
  
    function clear() {
        result.textContent = '';
    }
  }

