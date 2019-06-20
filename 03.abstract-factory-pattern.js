/*
抽象工厂模式：
通过对类的工厂抽象使其业务用于对产品类族的创建，而不负责创建某一类产品的实例。
*/

var VehicleFactory = function(subType, superType) {
    // 判断抽象工厂中是否有该抽象类
    if (typeof VehicleFactory[superType] === "function") {
        // 缓存类
        var F = function() {};
        // 继承父类属性和方法
        F.prototype = new VehicleFactory[superType]();
        // 将子类 constructor 指向子类
        subType.constructor = subType;
        // 子类原型继承“父类”
        subType.prototype = new F();
    } else {
        // 不存在该抽象类抛出错误
        throw new Error("未创建该抽象类");
    }
};
