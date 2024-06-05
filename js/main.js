const resultado = document.querySelector('#resultado');
const button = document.querySelectorAll('#button');

let x1 = 0;
let x2 = 0;

button.forEach (item => {
    item.addEventListener('click', (e) => {
        let clicked = e.target.textContent.trim();

        if (clicked === "c") {
            resultado.textContent = "0";
            return;
        }
        if (clicked === "="){
            calculate();
            return;
        }
        else if (clicked === "sin"){
            opSin();
        }
        else if (clicked === "cos"){
            opCos();
        }
        else if (clicked === "tan"){
            opTan();
        }
        else if (clicked === "xy" || clicked === "y"){
            opPot();
        }
        else if(resultado.textContent === "0"){
            resultado.textContent = clicked;
        }
        else {
            resultado.textContent += clicked;
        }
    })
})

function calculate () {
    const result = document.querySelector('#resultado');
    try{
        if (result.textContent.includes("sin")){
            result.textContent = `Math.sin(${parseFloat((result.textContent.substring(3,result.textContent.length))* (Math.PI/180))})`
        }
        else if (result.textContent.includes("cos")){
            result.textContent = `Math.cos(${parseFloat((result.textContent.substring(3,result.textContent.length))* (Math.PI/180))})`
        }
        else if (result.textContent.includes("tan")){
            result.textContent = `Math.tan(${parseFloat((result.textContent.substring(3,result.textContent.length))* (Math.PI/180))})`
        }
        else if (result.textContent.includes("√")){
            result.textContent = `Math.sqrt(${parseFloat(result.textContent.substring(1,result.textContent.length))})`
        }
        let final = eval(result.textContent);
        final = final.toFixed(2);
        result.textContent = final;
        return;    
    }
    catch(error) {
        result.textContent = 'Error'
    }
}

function opSin(){
    const screen = document.querySelector('#resultado')
    try {
        if (!screen.textContent.startsWith("sin"))
        screen.textContent = "sin";
    }
    catch (error){
        screen.value = 'Error'
    }
}

function opCos(){
    const screen = document.querySelector('#resultado')
    try {
        if (!screen.textContent.startsWith("cos"))
        screen.textContent = "cos";
    }
    catch (error){
        screen.value = 'Error'
    }
}

function opTan(){
    const screen = document.querySelector('#resultado')
    try {
        if (!screen.textContent.startsWith("tan"))
        screen.textContent = "tan";
    }
    catch (error){
        screen.value = 'Error'
    }
}

function opPot(){
    const screen = document.querySelector('#resultado')
    try {
        
    }
}






