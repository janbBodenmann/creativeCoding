function setup(){
    let cnv = createCanvas(1000, 1000);
    cnv.position(500,250);
    background(0, 0, 0);
    c1 = color(92, 207, 218);
    c2 = color(32, 28, 121);
    xPos = 480;
    yPos = 480;

}





function draw(){
    el1 = fill(c1);
    el1 = ellipse(random(width), random(height), 20, 20);
    
    el2 = fill(c2);
    el2 = ellipse(xPos, yPos, mouseX, mouseY);
    


}