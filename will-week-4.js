     import Leaf from './Leaf.js';
     import Help from './Help.js';
     import Cursor from './Cursor.js';
     import Trees from './Tree.js';

     /*
     to do:


     leaf physics:
     as they're falling, allow for random changes of direction with accel/decel
     or at least give them a starting xv
     what does rotation look like? maybe they rotate as their velocity increases
     or they rotate to absorb velocity
     might not be so easy


     EXTRA:
     wind button
     make a button that blows all the leaves away by rapidly increasing
     their x velocity and decreasing their y velocity.

     matchbook button
     change the cursor to a matchbook and allow clicking a leaf to
     make it burst into flames. the leaves touching it will also burst into flames

     hole in the ground
     let user push leaves into a hole

     stacking leaves
     make the leaves gain volume as they form a pile

     interleaf interaction



     */
     let breezeLimit;
     let breezeTime = false;
     let breezeCounter = 0;
     let rate = 81;
     let width = 800;
     let height = 600;
     let leaves = [];
     let n = 0;
     let cw = 70;
     let ch = 80;
     let cursor;
     let imgs = [];
     let trees;
     let bg, button, b2, b3, b4, b5;
     let circles = [];
     let colors = [
          [145, 14, 0],
          [120, 52, 0],
          [181, 73, 0],
          [102, 35, 0]
     ];

     let drawBackground = function() {

          image(bg, 0, 0, width, width * bg.height / bg.width);
          noStroke();
          fill(94, 54, 5, 50);
          ellipse(-200, 600, width * 4, -500);
          fill(94, 54, 5, 100);
          ellipse(-200, 615, width * 4, -500);
          fill(94, 54, 5, 150);
          ellipse(-200, 625, width * 4, -500);
          fill(94, 54, 5);
          ellipse(-200, 650, width * 4, -500);

          circles.forEach((c) => {
               fill(c[3]);
               ellipse(c[0], c[1], c[2], c[2]);
          });

          trees.draw();

     }

     let increment = function() {
          if (rate > 1) {
               rate -= 20;
          }
     }
     let decrement = function() {
          rate += 20;
     }
     let breeze = function() {
          breezeTime = true;
          breezeLimit = Help.getRandomInt(20) + 10
     }
     let bigRake = function() {
          cursor.big(300);
     }
     let smallRake = function() {
          cursor.big(70);
     }

     window.setup = function() {
          createCanvas(width, height);
          frameRate(20);





          button = createButton('more leaves');
          button.position(19, height - 25);
          button.mousePressed(increment);

          b2 = createButton('less leaves');
          b2.position(120, height - 25);
          b2.mousePressed(decrement);

          b3 = createButton('autumn breeze');
          b3.position(213, height - 25);
          b3.mousePressed(breeze);

          b4 = createButton('big rake');
          b4.position(330, height - 25);
          b4.mousePressed(bigRake);

          b5 = createButton('small rake');
          b5.position(407, height - 25);
          b5.mousePressed(smallRake);


          cursor = new Cursor(cw, ch, loadImage('./rake.png'));
          noCursor();
          bg = loadImage('background.png');

          for (let i = 1; i < 7; i++) {
               imgs.push(loadImage(`./leaves/${i}.png`));
          }
          trees = new Trees();
          for (let i = 0; i < 4; i++) {
               let y = Help.btwn(450, 500);
               trees.addTree(Help.btwn(0, width), y, Help.btwn(150, 400), y / 150);
          }
          for (let i = 0; i < 800; i++) {
               let w = Help.btwn(15, 25);
               circles.push([Help.btwn(0, width), Help.btwn(420, 600), w, colors[Help.getRandomInt(colors.length)].concat([40])])
          }

     }

     window.draw = function() {
          if (n % rate == 0) {
               //every 100 frames make a new Leaf
               leaves.push(new Leaf(Help.getRandomInt(width), imgs));
          }
          if (breezeTime) {
               breezeCounter++;
          }
          if (breezeCounter == breezeLimit) {
               breezeTime = false;
               breezeCounter = 0;
          }
          drawBackground();

          for (let i = 0; i < leaves.length; i++) {
               leaves[i].checkCollide(cursor)
               if (breezeTime) leaves[i].blow();
               leaves[i].draw();
          }
          cursor.update();
          // noLoop();

          n++;
     }

     window.mousePressed = function() {
          //save('background.png');
     }