/*
职责链模式：
解决请求的发送者与请求的接受者之间的耦合，通过职责链上的多个对象对分解请求流程，实现请求在多个对象之间的传递，直到最后一个对象完成请求的处理。
 */

// 第一站 请求模块
var sendData = function (data, dealType, dom) {
    var xhr = new XMLHttpRequest();
    var url = 'getData.php?mod=userInfo';
    xhr.onload = function (event) {
        if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {
            dealData(xhr.responseText, dealType, dom);
        } else {
            // 请求失败
        }
    }
    for (var i in data) {
        url += '&' + i + '=' + data[i];
    }
    xhr.open("get", url, true);
    xhr.send(null);
};

// 第二站 处理数据
var dealData = function (data, dealType, dom) {
    var dataType = Object.prototype.toString.call(data);
    switch (dealType) {
        case 'sug':
            if (dataType === "[object Array]") {
                return createSug(data, dom);
            }
            if (dealType === "[object Object]") {
                var newData = [];
                for (var i in data) {
                    newData.push(data[i]);
                    return createSug(newData, dom);
                }
            }
            return createSug([data], dom);
            break;
        case 'validate':
            return createValidataResult(data, dom);
            break;
    }
};

// 第三站 创建组件模块
var createSug = function (data, dom) {
    var i = 0;
    len = data.length;
    html = '';
    for (; i < len; i++) {
        html += '<li>' + data[i] + '</li>';
    }
    dom.parentNode.getElementsByTagName('ul')[0].innerHTML = html;
};
var createValidataResult = function (data, dom) {
    dom.parentNode.getElementsByTagName('span')[0].innerHTML = data;
};
