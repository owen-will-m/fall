     export default class F {

          static shuffleArray(a) {
               for (let i = a.length - 1; i > 0; i--) {
                    const j = Math.floor(Math.random() * (i + 1));
                    [a[i], a[j]] = [a[j], a[i]];
               }
               return a;
          }

          static btwn(a, b) {
               return getRandomInt(b - a) + a;
          }


          static getRandomInt(max) {
               return Math.floor(Math.random() * Math.floor(max));
          }

          static probability(n) {
               return !!n && Math.random() <= n;
          }

          static degreesToRadians(degrees) {
               var pi = Math.PI;
               return degrees * (pi / 180);
          }

          static drawLine(pt1, pt2) {
               line(pt1[0], pt1[1], pt2[0], pt2[1]);
          }

          static depth() {
               return getRandomInt(4) + 3;
          }

          static cartesian2Polar(c) {
               let distance = Math.sqrt(c.x * c.x + c.y * c.y)
               let radians = Math.atan2(c.y, c.x) //This takes y first
               polarCoor = {
                    d: distance,
                    r: radians,
                    center: c
               }
               return polarCoor
          }

          static toCartesian({
               r,
               theta
          }, [cx, cy]) {
               return [cx + r * Math.cos(theta), cy + r * Math.sin(theta)];
          }

          //takes 2 polar points
          static drawPolarLine(point1, point2) {
               let p1 = polar2Cartesian(point1);
               let p2 = polar2Cartesian(point2);
               line(p1.x, p1.y, p2.x, p2.y);
          }

          static randoms(depth) {
               let randoms = [];
               for (let i = 0; i < depth; i++) {
                    let rand2 = [];
                    for (let j = 0; j < 8; j++) {
                         rand2.push(getRandomInt(100) / 500.0 + .6);
                    }
                    randoms.push([...rand2]);
               }
               return randoms;
          }

          static between(a, b) {
               return getRandomInt((b - a) * 100) / 100.0 + a;
          }

          static setLimb(limb, newPoint, dtheta, dr, n) {
               const newLimb = {
                    ...limb
               };

               newLimb.pointx = newPoint[0];
               newLimb.pointy = newPoint[1];
               newLimb.theta += dtheta;
               newLimb.r *= dr;
               newLimb.n = n;
               return newLimb;
          }

          //adds a tree to the array of trees
          //but that tree is just an array of lines!
          static newTree(x, y, depth, height, size, color) {
               let tree = [];
               tree[0] = size;
               tree[1] = color;
               tree[2] = 0;
               branch(tree, {
                    pointx: mouseX,
                    pointy: mouseY,
                    r: height,
                    theta: 3 * Math.PI / 2 * between(.99, 1.02)

               }, depth);
               return tree; //add our new tree to the trees array
          }

          static along(limb, factor) {
               return toCartesian({
                    r: limb.r * factor,
                    theta: limb.theta
               }, [limb.pointx, limb.pointy]);
          }





     }