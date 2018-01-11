rect(0, 350, 400, 100);
ellipse(200, 300, 150, 150);
ellipse(200, 200, 100, 100);
ellipse(200, 120, 75, 75);
line(160,185,97,98);
noStroke();
background(0, 255, 242); // RGB
fill(255, 242, 0);
fill(255, 0, 0);
stroke(191, 0, 255);
strokeWeight(37);
arc(100,50,30,30,1,180); // x, y, width, height, startAngle, stopAngle
triangle(1,1,1,1,1,1); // x1, y1, x2, y2, x3, y3
var xPos = 5;
var yPos = 5;
var xPos2 = 395;
var yPos2 = 5;

draw = function() {
    background(29, 40, 115);
    fill(255, 242, 0);
    ellipse(xPos, yPos, 10, 10);
    ellipse(xPos2, yPos2, 10, 10);
    xPos++;
    yPos++;
    xPos2--;
    yPos2++;
};
