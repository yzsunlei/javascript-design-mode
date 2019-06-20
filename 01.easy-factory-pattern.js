/*
简单工厂模式：
又叫静态工厂方法，由一个工厂对象决定创建某一种产品对象类的实例。
*/

function createPop(type, content) {
    // 创建一个对象，并对对象拓展属性和方法
    var o = {};
    o.content = content;
    o.show = function() {
        // 显示方法
    };
    if (type == "alert") {
        // 警示框差异部分
    }
    if (type == "prompt") {
        // 提示框差异部分
    }
    if (type == "confirm") {
        // 确认框差异部分
    }
    // 将对象返回
    return o;
}
