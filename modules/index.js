// Your code goes here!
import {calculateAspectRatio} from "./aspect-ratio.js";


import {modulo,percentage,percentageOf,difference} from "./percentage.js";


const modulo1= document.getElementById("modulo_1")
const modulo2= document.getElementById("modulo_2")
const moduloResult= document.getElementById("modulo_result")

modulo2.addEventListener("input",()=>{
    moduloResult.value= modulo(modulo1.value,modulo2.value)
})


const percentage1= document.getElementById("percentage_1")
const percentage2= document.getElementById("percentage_2")
const percentageResult= document.getElementById("percentage_result")

percentage2.addEventListener("input",()=>{
    percentageResult.value= percentage(percentage1.value,percentage2.value)
})

const percentageOf1= document.getElementById("percentageOf_1")
const percentageOf2= document.getElementById("percentageOf_2")
const percentageOfResult= document.getElementById("percentageOf_result")

percentageOf2.addEventListener("input",()=>{
    percentageOfResult.value= percentageOf(percentageOf1.value,percentageOf2.value)
})

const difference1= document.getElementById("difference_1")
const difference2= document.getElementById("difference_2")
const differenceResult= document.getElementById("difference_result")

difference2.addEventListener("input",()=>{
    differenceResult.value= difference(difference1.value,difference2.value)
})


//Aspect Ratio

const aspect1= document.getElementById("ratio_1")
const aspect2= document.getElementById("ratio_2")
const aspectNewWidth= document.getElementById("ratio_result-width")
const aspectNewHeight= document.getElementById("ratio_result-height")

aspectNewHeight.addEventListener("input",()=>{
    aspectNewWidth.value = calculateAspectRatio(aspect1.value,aspect2.value, aspectNewHeight.value,"h")
})

aspectNewWidth.addEventListener("input",()=>{
    aspectNewHeight.value = calculateAspectRatio(aspect1.value,aspect2.value, aspectNewWidth.value,"w")
})