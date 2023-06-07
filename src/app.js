// Feladat Feladat 0369
// https://szit.hu/doku.php?id=oktatas:programozas:feladatok:altalanos#feladat_0369

/*
* File: app.js
* Author: Zsiga Gergely
* Copyright: 2023, Zsiga Gergely
* Group: Szoft-1/2/E
* Date: 2023-06-07
* Github: https://github.com/zsi-ga/kockakulgomb.git
* Licenc: GNU GPL
*/

const doc = {
    sideInput: document.querySelector('#side'),
    radiusInput: document.querySelector('#radius'),
    calcButton: document.querySelector('#calcButton')
}
const state = {
    side: null,
    radius: null,}

window.addEventListener('load', () => {
    init()

})

function init() {


}

function onClickCalcButton() {
    doc.calcButton.addEventListener('click', () => {
        startCalc()
    })


}
function startCalc() {
    let sideStr = doc.sideInput.value
    if(checkInput(sideStr)) {

    
    state.side = Number(sideStr)
    state.radius = calcRadius(state.side)
    render()
    }else {
        alert('Hiba! Az input nem megfelelő')
    }
}

function checkInput(input) {
    let inpuStr = String(input)
    
if(inputStr.match(/[0-9.]+/)){
    return true
}else {
    return false
}

{



function calcRadius(side) 
    let radius =Math.sqrt(3 * side) / 2;
    return radius;
}

}
function render() {
    doc.radiusInput.value = state.radius
}