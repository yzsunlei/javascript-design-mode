/*
工厂方法模式：
通过对产品类的抽象使其创建业务主要负责用于创建多类产品的实例。
*/

// 安全模式创建的工厂类
var Factory = function(type, content) {
    if (this instanceof Factory) {
        // 保证是通过new进行创建的
        var s = new this[type](content);
        return s;
    } else {
        return new Factory(type, content);
    }
};

// 工厂原型中设置创建所有类型数据对象的基类
Factory.prototype = {
    Java: function(content) {

    },
    Php: function(content) {

    },
    JavaScript: function(content) {

    }
};
