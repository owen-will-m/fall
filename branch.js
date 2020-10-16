     function branch(tree, limb, n) {
          //base case
          if (n <= 0) {
               return;
          }

          let limbs = [];

          //draw this branch

          let newPoint = along(limb, 1);

          //add this line to the tree array
          tree.push([
               [limb.pointx, limb.pointy],
               [...newPoint],
               n
          ]);

          //if it's the first one, just make 4 branching off
          if (n == DEPTH) {
               let arr = [];
               let l = between(2, 5);
               for (let i = 0; i < l; i++) {
                    //TRYING TO MAKE IT SO THAT THE FOUR BRANCHES APPEAR IN RANDOM ORDER NOT SEQUENTIAL ORDER
                    arr.push(i);
               }
               shuffleArray(arr);
               for (let i = 0; i < l; i++) {
                    limbs.push(new setLimb(limb, newPoint, between(-.4, -.6) + arr[i] * between(.4, .6), between(.6, .8), n));
               }
          } else {
               //otherwise, branches can spontaneously become n=2 and appear at various points
               //most of the time, branching into 2, but sometimes just one

               //make either order equiprobable
               if (probability(.5)) {
                    limbs.push(new setLimb(limb, newPoint, between(.4, .6), between(.6, .8), n));
                    limbs.push(new setLimb(limb, newPoint, between(-.4, -.6), between(.6, .8), n));
               } else {
                    limbs.push(new setLimb(limb, newPoint, between(-.4, -.6), between(.6, .8), n));
                    limbs.push(new setLimb(limb, newPoint, between(.4, .6), between(.6, .8), n));
               }



               if (probability(.2 * n)) {
                    limbs.push(new setLimb(limb, along(limb, between(.3, 1)), (probability(.5) ? -1 : 1) * between(.3, .5), between(.5, .6), 2));
               }



          }


          //branch
          for (let i = 0; i < limbs.length; i++) {
               branch(tree, limbs[i], (limbs[i].n - 1));

          }

     }