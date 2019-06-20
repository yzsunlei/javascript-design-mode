/*
访问者模式：
针对于对象结构中的元素，定义在不改变该对象的前提下访问结构中元素的新方法。
 */

// 访问器
var Visitor = (function () {
    return {
        splice: function () {
            var args = Array.prototype.splice.call(arguments, l);
            return Array.prototype.splice.apply(arguments[0], args);
        },
        push: function () {
            var len = arguments[0].length || 0;
            var args = this.splice(arguments, l);
            arguments[0].length = len + arguments.length - 1;
            return Array.prototype.push.apply(arguments[0], args);
        },
        pop: function () {
            return Array.prototype.pop.apply(arguments[0]);
        }
    }
})();
