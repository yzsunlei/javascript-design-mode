/*
等待者模式：
通过对多个异步进程进行监听，来触发未来发生的动作。
 */

// 等待对象
var Waiter = function () {
    var dfd = [];
    var doneArr = [];
    var failArr = [];
    var slice = Array.prototype.slice;
    var that = this;

    var Primise = function () {
        this.resolved = false;
        this.rejected = false;
    }

    Primise.prototype = {
        resolve: function () {

        },
        reject: function () {

        }
    }

    that.Deferred = function () {
        return new Primise();
    }

    function _exec(arr) {

    }

    that.when = function () {

    }

    that.done = function () {

    }

    that.fail = function () {

    }
}
