/*
观察者模式：
又称发布-订阅者模式或消息机制，定义一种依赖关系，解决了主体对象与观察者之间功能的耦合。
 */

var Observer = (function () {
    var __messages = {};
    return {
        // 注册消息
        register: function (type, fn) {
            if (typeof __messages[type] === 'undefined') {
                __messages[type] = [fn];
            } else {
                __messages[type].push(fn);
            }
        },
        // 发布消息
        fire: function (type, args) {
            if (!__messages[type])
                return;
            var events = {
                type: type,
                args: args || {}
            };
            var i = 0;
            var len = __messages[type].length;
            for (; i < len; i++) {
                __messages[type][i].call(this, events);
            }
        },
        // 移除消息
        remove: function (type, fn) {
            if (__messages[type] instanceof Array) {
                var i = __messages[type].length - 1;
                for (; i >= 0; i--) {
                    __messages[type][i] == fn && __messages[type].splice(i, 1);
                }
            }
        }
    }
})();
