/*
迭代器模式：
在不暴露对象内部结构的同时，可以顺序的访问聚合对象内部的元素。
 */

// 迭代器
var Iterator = function (items, container) {
    var container = container && document.getElementById(container) || document;
    var items = container.getElementsByTagName(items);
    var len = items.length;
    var idx = 0;
    var splice = [].splice();

    return {
        first: function () {},
        second: function () {},
        pre: function () {},
        next: function () {},
        get: function () {},
        dealEach: function () {},
        dealItem: function () {},
        exclusive: function () {}
    }
};
