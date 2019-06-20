/*
委托模式：
多个对象接收并处理同一请求，他们将请求委托给另一个对象统一处理请求。
 */

ul.onclick = function (e) {
    var e = e || window.event;
    var tar = e.target || e.srcElement;
    if (target.nodeName.toLocaleLowerCase() === 'li') {
        tar.style.backgroundColor = 'grey';
    }
};
