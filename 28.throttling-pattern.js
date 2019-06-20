/*
节流模式：
对重复的业务逻辑进行节流控制，执行最后一次操作并取消其他操作，以提高性能。
 */

var throttle = function () {
    var isClear = arguments[0];
    var fn;
    if (typeof isClear === 'boolean') {
        fn = arguments[1];
        fn.__throttleID && clearTimeout(fn.__throttleID);
    } else {
        fn = isClear;
        param = arguments[1];
        var p = extend({
            context: null,
            args: [],
            time: 30
        }, param);
        arguments.callee(true, fn);
        fn.__throttleID = setTimeout(function () {
            fn.apply(p.context, p.args);
        }, p.time);
    }
}
