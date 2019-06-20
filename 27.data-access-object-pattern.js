/*
数据访问对象模式：
抽象和封装对数据源的访问与存储，DAO通过对数据源链接的管理方便对数据的访问与存储。
 */

// 本地存储类
var BaseLocalStorage = function (preId, timeSign) {
    this.preId = preId;
    this.timeSign = timeSign;
};
// 本地存储类原型方法
BaseLocalStorage.prototype = {
    status: {
        SUCCESS: 0,
        FAILURE: 1,
        OVERFLOW: 2,
        TIMEOUT: 3
    },
    storage: localStorage || window.localStorage,
    getKey: function (key) {
        return this.preId + key;
    },
    set: function (key, value, callback, time) {

    },
    get: function (key, callback) {

    },
    remove: function (key, callback) {

    }
};
