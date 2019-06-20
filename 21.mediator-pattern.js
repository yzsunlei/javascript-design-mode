/*
中介者模式：
通过中介者对象封装一系列对象之间的交互，使对象之间不再相互引用，降低他们之间的耦合。
 */

// 中介者对象
var Mediator = function () {
    var _msg = {};
    return {
        register: function (type, action) {
            if (_msg[type])
                _msg[type].push(action);
            else {
                _msg[type] = [];
                _msg[type].push(action);
            }
        },
        send: function (type) {
            if (_msg[type]) {
                for (var i = 0, len = _msg[type].length; i < len; i++) {
                    _msg[type][i] && _msg[type][i]();
                }
            }
        }
    }
}();
