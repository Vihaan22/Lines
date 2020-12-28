var canvas=document.getElementById("mycanvas")
var ctx=canvas.getContext("2d")
var color=document.getElementById("coin").value
var lastX,lastY,curX,curY
var mouseevent=""

canvas.addEventListener("mouseleave",ml)
function ml(e){
console.log("mouse left the canvas")
mouseevent="mouseleave"
}

canvas.addEventListener("mouseup",mp)
function mp(e){
   console.log("mouse has upped the canvas")
   mouseevent="mouseup"
}

canvas.addEventListener("mousedown",md)

function md(e){
    color=document.getElementById("coin").value
    lastX=e.clientX-canvas.offsetLeft
    lastY=e.clientY-canvas.offsetTop
mouseevent="mousedown"
console.log("intruder mouse has clicked the canvas")
}
canvas.addEventListener("mousemove",mm)
function mm(e){
    curX=e.clientX-canvas.offsetLeft
    curY=e.clientY-canvas.offsetTop
    if(mouseevent=="mousedown"){
        ctx.beginPath()
        ctx.strokeStyle=color
        ctx.lineWidth=3
        ctx.moveTo(lastX,lastY)
        ctx.lineTo(curX,curY)
        ctx.stroke()
    }
    lastX=curX
    lastY=curY
}