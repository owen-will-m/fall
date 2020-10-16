     export default class Help {

          static toCartesian({
               r,
               theta
          }, [cx, cy]) {
               return [cx + r * Math.cos(theta), cy + r * Math.sin(theta)];
          }


          static along(limb, factor) {
               return this.toCartesian({
                    r: limb.r * factor,
                    theta: limb.theta
               }, [limb.pointx, limb.pointy]);
          }



     }