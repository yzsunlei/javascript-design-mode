/*
链模式：
通过在对象方法中将当前对象返回，实现对同一个对象多个方法的链式调用。
 */

var A = function (selector) {
    return new A.fn.init(selector);
};
A.fn = A.prototype = {
    constructor: A,
    init: function (selector) {
        console.log(this.constructor);
    }
};
A.fn.init.prototype = A.fn;
