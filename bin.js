class bin{
    constructor(x, y,width, height, options) {
        var options = {
            isStatic: false, 
            restitution:0,
            friction:1.0,
            density:1.2
        }
        Matter.Bodies.rect(x,y,width,height,options);
    }
}