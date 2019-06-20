/*
状态模式：
当一个对象的内部状态发生改变时，会导致其行为的改变，这看起来像是改变了对象。
 */

// 状态对象
var ResultState = function () {
    var States = {
        state0: function () {
            console.log("第一种情况");
        },
        state1: function () {
            console.log("第二种情况");
        },
        state2: function () {
            console.log("第三种情况");
        },
        state3: function () {
            console.log("第四种情况");
        }
    };

    function show(result) {
        States['state' + result] && States['state' + result]();
    }

    return {
        show: show
    }
}();
