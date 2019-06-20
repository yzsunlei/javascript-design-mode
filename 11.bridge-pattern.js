/*
桥接模式：
在系统沿着多个维度变化的同时，又不增加其复杂度并达到解耦。
*/

// 多维变量类
// 运动单元
function Speed(x, y) {
    this.x = x;
    this.y = y;
}
Speed.prototype.run = function () {
    console.log("运动起来");
}

// 着色单元
function Color(cl) {
    this.color = cl;
}
Color.prototype.draw = function () {
    console.log("绘制颜色");
}

//变形单元
function Shape(sp) {
    this.shape = sp;
}
Shape.prototype.change = function () {
    console.log("改变形状");
}

// 说话单元
function Speek(wd) {
    this.word = wd;
}
Speek.prototype.say = function () {
    console.log('讲话内容');
}

// 创建一个精灵类
function Spirte(x, y, c, s) {
    this.speed = new Speed(x, y);
    this.color = new Color(c);
    this.shape = new Shape(s)
}
Spirte.prototype.init = function () {
    this.speed.run();
    this.color.draw();
    this.shape.change();
};
