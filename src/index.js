// js goes here :)
import * as UTIL from './usefulFunctions.js'
import './main.css'

// // track mouse clicks
// let mouseX, mouseY = 0


// function logKey(e) {
//     mouseX = e.clientX - 100
//     mouseY = e.clientY - 100
//     if (mouseX < 0) mouseX = 0
//     if (mouseY < 0) mouseY = 0
// }
// window.addEventListener('pointermove', logKey)

// let start, previousTimeStamp
// const backgroundElement = document.getElementById("mainImage")
// function step(timestamp) {
//     if (start === undefined) {
//         start = timestamp
//     }

//     if (timestamp != previousTimeStamp) {
//         backgroundElement.style.transform = `translate(${mouseX}px,${mouseY}px)`
//         console.log(mouseX, mouseY)
//     }

//     previousTimeStamp = timestamp
//     window.requestAnimationFrame(step)
// }

// window.requestAnimationFrame(step)