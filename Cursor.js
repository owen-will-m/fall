     export default class Cursor {


          constructor(w, h) {
               this.x = 0;
               this.y = 0;
               this.xv = 0;
               this.yv = 0;
               this.prevX = 0;
               this.prevY = 0;
               this.w = w;
               this.h = h;
          }


          update() {
               this.x = mouseX;
               this.y = mouseY;
               this.xv = (mouseX - this.prevX) / 20;
               this.yv = (mouseY - this.prevY) / 20;

               fill(116, 59, 32);
               rect(mouseX, mouseY, this.w, this.h);
               this.prevX = mouseX;
               this.prevY = mouseY;
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

     }