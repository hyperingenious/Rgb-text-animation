'use stict'
let colorValue = 0;
setInterval(() => {
    let textClass = document.querySelector('.header');
    if(colorValue<=360){
        colorValue++
        textClass.style.color = `hsl(${colorValue},100%,57%)`
        console.log(colorValue);
        if (colorValue>=360) {
            colorValue = 0
        }
    }
}, 10);