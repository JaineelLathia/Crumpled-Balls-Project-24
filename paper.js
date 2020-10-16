class paper{
    constructor(x, y, options, radius) {
        var options = {
            isStatic: false, 
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        Matter.Bodies.circle(x, y, options, radius);
    }
}