function preload(){
}
function setup() {
canvas=createCanvas(525 , 400);
canvas.position( 100, 270);
video= createCapture(VIDEO);
video.hide();
tint_color="";
}
function draw(){
image(video, 0,0, 525, 400);
tint(tint_color);
fill(0 , 250 , 0);
rect(1,370,525,30);
rect(1,1,30,525);
rect(495,1,30,525);
rect(1,1,525,30);
fill(250, 0, 0);
circle(38,38,76);
circle(38,362,76);
circle(487,38,76);
circle(487,362,76);
}
function take_snapshot(){
save('filtered_image.jpg');
}
function apply() {
tint_color=document.getElementById("filter_colour").value;
}