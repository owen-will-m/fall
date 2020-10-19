     import Help from './Help.js';



     export default class Leaf {

          constructor(x, imgs) {
               let index = Help.getRandomInt(5) + 1;
               this.x = x;
               this.y = -50;
               this.rotate = Help.between(0, Math.PI * 2)
               this.xv = 0;
               this.yv = 1;
               this.img = imgs[index];
               let width = 40 + Help.getRandomInt(10);
               this.w = width
               this.h = width * imgs[index].height / imgs[index].width;

          }

          blow() {
               this.xv += Help.between(.05, .1) + 1;
               this.yv -= Help.between(.1, .2);
          }

          draw() {
               fill(163, 80, 15);
               translate(this.x + this.w / 2, this.y + this.h / 2);
               rotate(this.rotate);
               translate((this.x + this.w / 2) * -1, (this.y + this.h / 2) * -1);
               image(this.img, this.x, this.y, this.w, this.h);
               translate(this.x + this.w / 2, this.y + this.h / 2);
               rotate(this.rotate * -1);
               translate((this.x + this.w / 2) * -1, (this.y + this.h / 2) * -1);

               if (this.yv != 0) {
                    this.rotate += .01 * (Math.abs(this.yv * this.xv - 1) / 1.5);
               }

               if (this.yv == 0) {} else if (this.yv > 1) {
                    this.yv -= .1;
               } else if (this.yv < 1) {
                    this.yv += .1;
               }

               if (Math.abs(this.xv) < .1) this.xv = 0;

               if (this.xv > 0) {
                    this.xv -= .05;
               } else if (this.xv < 0) {
                    this.xv += .05;
               }

               this.x += this.xv;
               this.y += this.yv;

          }

          toRect() {
               return [
                    [this.x,
                         this.y
                    ],
                    [this.x + this.w,
                         this.y + this.h
                    ]
               ];
          }

          checkCollide(cursor) {
               //hit the ground
               if (this.y + this.h > 500) {
                    this.y = 500 - this.h;
                    this.yv = 0;
               }
               if (this.y + this.h == 500) {
                    if (Math.abs(this.xv) < .5) this.xv = 0;

                    if (this.xv > 0) {
                         this.xv -= .5;
                    }
                    if (this.xv < 0) {
                         this.xv += .5;
                    }
               }
               //hit the Cursor
               if (Help.checkRectOverlap(this.toRect(), cursor.toRect())) {
                    this.xv += cursor.xv * 2;
                    this.yv += cursor.yv * 2;
               }
          }



     }