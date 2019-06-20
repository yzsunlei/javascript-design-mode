/*
参与者模式：
在特定的作用域中执行给定的函数，并将参数原封不动的传递。
 */

// 函数绑定
function bind(fn, context) {
    return function () {
        return fn.apply(context, arguments);
    }
}

// 函数柯里化
function curry(fn) {
    var Slice = [].slice;
    var args = Slice.call(arguments, l);
    return function () {
        var addArgs = Slice.call(arguments);
        var allArgs = args.concat(addArgs);
        return fn.apply(null, allArgs);
    }
}
