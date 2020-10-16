     import {
          Tree
     } from './tree.js';

     import Help from './Help.js';

     let width = 800;
     let height = 600;
     let tree;
     let sway = true;
     let n = 0;

     window.setup = function() {
          createCanvas(width, height);
          frameRate(20);
          tree = new Tree(300, 380, 100, 4);
     }

     window.draw = function() {
          if (n == 10) {
               sway = !sway;
               n = 0;
          }
          n++;


          background(79, 146, 106);
          noStroke();
          fill(52, 94, 43)
          ellipse(-200, 600, width * 4, -500);
          stroke(0);
          tree.draw();
          //if (sway) tree.move(1 / n);
          //  else tree.move(-1 / n);
          if (n == 1) tree.move(sway ? 1.5 : -1.5);
          if (n == 10) tree.move(sway ? 1.3 : -1.3)
          if (n == 20) tree.move(sway ? 1.1 : -1.1);



     }
     /*
          next steps:
          make the simple tree "sway" slightly
          easier said than done!
          also could think about how to incorporate a node based data structure
          into the old tree's code. honestly probably the best move.
          in order to get the tree to sway, it might be necessary to define a theta?
          otherwise the points wont move radially from one another
          maybe they don't have to?
          */