/*
命令模式：
将请求与实现解耦并封装成独立对象，从而使不同的请求对客户端的实现参数化。
 */

// 绘图命令
var CanvasCommand = (function () {
   var canvas = document.getElementById('canvas');
   var ctx = canvas.getContext('2d');
   var Action = {
       fillStyle: function (c) {
           ctx.fillStyle = c;
       },
       fillRect: function (x, y, w, h) {
           ctx.fillRect(x, y, w, h);
       },
       strokeStyle: function (c) {
           ctx.strokeStyle = c;
       },
       strokeRect: function (x, y, w, h) {
           ctx.strokeRect(x, y, w, h);
       },
       fillText: function (text, x, y) {
           ctx.fillText(text, x, y);
       },
       beginPath: function () {
           ctx.beginPath();
       },
       moveTo: function (x, y) {
           ctx.moveTo(x, y);
       },
       lineTo: function (x, y) {
           ctx.lineTo(x, y);
       },
       arc: function (x, y, r, begin, end, dir) {
           ctx.arc(x, y ,r, begin, end, dir);
       },
       fill: function () {
           ctx.fill();
       },
       stroke: function () {
           ctx.stroke();
       }
   };
   return {
       excute: function (msg) {
           if (!msg)
               return;
           if (msg.length) {
               for (var i = 0, len = msg.length; i < len; i++) {
                   arguments.callee(msg[i]);
               }
           } else {
               msg.param = Object.prototype.toString.call(msg.param) === "[object Array]" ? msg.param : [msg.param];
               Action[msg.command].apply(Action, msg.param);
           }
       }
   }
})();
