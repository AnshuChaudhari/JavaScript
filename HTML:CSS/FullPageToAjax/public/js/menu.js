(function(dust){dust.register("menu",body_0);function body_0(chk,ctx){return chk.w("<div> <p> Breakfast </p>  <ul>").s(ctx.get(["Breakfast"], false),ctx,{"block":body_1},{}).w("</ul>  </div>");}body_0.__dustBody=!0;function body_1(chk,ctx){return chk.w("<li> ").f(ctx.get(["item"], false),ctx,"h").w(" & ").f(ctx.get(["price"], false),ctx,"h").w(" </li>");}body_1.__dustBody=!0;return body_0}(dust));