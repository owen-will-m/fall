     export default class Cursor {


          constructor(w, h, img) {
               this.x = 0;
               this.y = 0;
               this.xv = 0;
               this.yv = 0;
               this.prevX = 0;
               this.prevY = 0;
               this.w = w;
               this.h = h;
               this.img = img;
               this.h = this.w * img.width / img.height;
          }

          big(size) {
               this.w = size;
               this.h = this.w * this.img.width / this.img.height;
          }


          update() {
               this.x = mouseX;
               this.y = mouseY;
               this.xv = (mouseX - this.prevX) / 20;
               this.yv = (mouseY - this.prevY) / 20;
               // noStroke();
               // fill(116, 59, 32);
               // rect(mouseX, mouseY, this.w, this.h);

               image(this.img, mouseX, mouseY - this.h / 2, this.w, this.h);
               this.prevX = mouseX;
               this.prevY = mouseY;
          }

          toRect() {
               return [
                    [this.x,
                         this.y
                    ],
                    [this.x + this.w / 2,
                         this.y + this.h / 2
                    ]
               ];
          }

     }