     import Leaf from './Leaf.js';
     import Help from './Help.js';
     import Cursor from './Cursor.js';




     let width = 800;
     let height = 600;
     let leaves = [];
     let n = 0;
     let cw = 8;
     let ch = 80;
     let cursor = new Cursor(cw, ch);
     let imgs = [];

     let drawBackground = function() {

          background(79, 146, 106);
          noStroke();
          fill(52, 94, 43)
          ellipse(-200, 600, width * 4, -500);

     }



     window.setup = function() {
          createCanvas(width, height);
          frameRate(20);
          noCursor();
          for (let i = 1; i < 7; i++) {
               imgs.push(loadImage(`./leaves/${i}.png`));
          }

     }

     window.draw = function() {
          if (n % 100 == 0) {
               //every 100 frames make a new Leaf
               leaves.push(new Leaf(Help.getRandomInt(width), imgs));
          }

          drawBackground();

          for (let i = 0; i < leaves.length; i++) {
               leaves[i].checkCollide(cursor)
               leaves[i].draw();
          }
          cursor.update();
          n++;
     }