/*
装饰者模式：
在不改变原对象的基础上，通过对其进行包装拓展(添加属性或方法)使原对象可以满足用户更复杂需求。
*/

var decorator = function (input, fn) {
    // 获取事件源
    var input = document.getElementById(input);
    // 若事件源已经绑定事件
    if (typeof input.click === 'function') {
        // 缓存事件源原有回调函数
        var oldClickFn = input.click;
        // 为事件源定义新的事件
        input.click = function () {
            // 事件源原有回调函数
            oldClickFn();
            // 执行事件源新增回调函数
            fn();
        }
    } else {
        // 事件源未绑定事件，直接为事件源添加新增回调函数
        input.onclick = fn;
    }
}
