     import Help from './Help.js';

     const NORTH = 3 * Math.PI / 2;

     export default class Tree {


          constructor(x, y, length, depth) {
               this.root = new Node(x, y);
               this.length = length;
               this.depth = depth;
               this.hopper = [];
               this.moves = [];
               this.create();
          }

          create() {
               this.makeBranch(this.root, this.length, NORTH, this.depth);
               console.log(`${this.root} ${this.length}, ${NORTH}, ${this.depth}`)
          }

          makeBranch(node, length, theta, depth) {
               if (depth == 0) return;
               //take node and length and theta
               //make two nodes, one with +theta one -theta
               node.branch(length, theta + .2);
               node.branch(length, theta - .2);
               for (let i = 0; i < node.size(); i++) {
                    this.makeBranch(node.getNode(i), length, theta - .2, depth - 1);
               }
               //call makebranch on a for loop of node's nodes

          }

          draw() {
               this.drawTree(this.root);
               this.move(0);
               console.log(this.hopper.length);
          }

          drawTree(node) {
               for (let i = 0; i < node.size(); i++) {
                    line(node.x, node.y, node.getNode(i).x, node.getNode(i).y)
                    this.drawTree(node.getNode(i));
               }
          }

          move(dx) {
               if (dx != 0)
                    this.moves.push(dx);

               if (this.hopper.length == 0) {
                    for (let i = 0; i < this.root.size(); i++) {
                         this.adjust(this.root.getNode(i), this.moves.shift());
                    }
               } else {
                    let temp = this.hopper.shift();

                    let k = temp[2];
                    for (let i = 0; i < k; i++) {
                         this.adjust(temp[0], temp[1]);
                         temp = this.hopper.shift();
                    }
               }

          }

          adjust(node, amt) {
               node.x += amt;
               amt *= 1.5;

               for (let i = 0; i < node.size(); i++) {
                    //this.adjust(node.getNode(i), amt);
                    this.hopper.push([node.getNode(i), amt, node.size()]);
               }

          }

     }




     class Node {

          constructor(x, y) {
               this.x = x;
               this.y = y;
               this.nodes = [];
          }

          branch(length, theta) {
               let pt = this.getEndPoint(length, theta);
               this.addNode(new Node(pt[0], pt[1]));
          }

          addNode(node) {
               this.nodes.push(node);
          }

          getEndPoint(length, theta) {
               return Help.along({
                    pointx: this.x,
                    pointy: this.y,
                    r: length,
                    theta: theta
               }, 1);
          }

          size() {
               return this.nodes.length;
          }

          getNode(index) {
               return this.nodes[index];
          }
     }