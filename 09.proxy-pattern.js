/*
代理模式：
由于一个对象不能直接引用另一个对象，所以需要通过代理对象在这两个对象之间起到中介的作用。
*/

// 统计代理示例
var Count = (function() {
    // 缓存图片
    var img = new Image();
    //返回统计函数
    return function (param) {
        // 统计请求字符串
        var str = 'http://www.***.com/a.gif?';
        // 拼接请求字符串
        for (var i in param) {
            str += i + '=' + param[i];
        }
        // 发送统计请求
        img.src = str;
    }
})();
