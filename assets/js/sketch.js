import p5 from 'p5'
const s = ( p ) => {
    let x = 500; 
    let y = 100;
  
    p.setup = function() {
        let myCanvas = p.createCanvas(600, 400);
        p.line(15, 25, 600, 25);
    };
  
    p.draw = function() {
    };
  };
  
let myp5 = new p5(s, 'myContainer');