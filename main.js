 var canvas=document.getElementById("myCanvas")
ctx= canvas.getContext("2d")
rover_width=100
rover_height=90
rover_X=10
rover_Y=10
spacemars=["1space.jpeg","2space.jpeg","pace.jpeg","mars.jpg"]
random_number=Math.floor(Math.random()*4)
background_image= spacemars[random_number]
console.log("background_image= "+background_image)
rover_image="rover.png"
 function add(){
    background_image1=new Image()
    background_image1.onload=upload_background
    background_image1.src=background_image
    rover_image1=new Image()
    rover_image1.onload=upload_rover
    rover_image1.src=rover_image
 }
 function upload_background(){
     ctx.drawImage(background_image1,0,0,canvas.width,canvas.height)
 }
function upload_rover(){
    ctx.drawImage(rover_image1,rover_X,rover_Y,rover_width,rover_height)
}
window.addEventListener("keydown",myKeydown)
function myKeydown(e){
    keypressed=e.keyCode
console.log(keypressed)
if (keypressed=="38") {
    up()
    console.log("up")
}
if (keypressed=="40") {
    down()
    console.log("down")
}
if (keypressed=="39") {
    right()
    console.log("right")
}
if (keypressed=="37") {
    left()
    console.log("left")
}
}

function up(){
if (rover_Y >=0 ) {
 rover_Y -= 10 
 console.log("when up arrow key pressed,x= - "+ rover_X + " | y="+rover_Y)
 upload_background()
 upload_rover() 
}
}
function down(){
 if (rover_Y <=500 ) {
 rover_Y += 10 
 console.log("when down arrow key pressed,x= - "+ rover_X + " | y="+rover_Y)
 upload_background()
 upload_rover() 
 }
 }
function left(){
 if (rover_X >=0 ) {
 rover_X -= 10 
         console.log("when left arrow key pressed,x= - "+ rover_X + " | y="+rover_Y)
         upload_background()
         upload_rover() 
        }
        }

function right(){
    if (rover_X <=700 ) {
     rover_X += 10 
     console.log("when right arrow key pressed,x= - "+ rover_X + " | y="+rover_Y)
     upload_background()
     upload_rover() 
    }
    }
