/*
同步模块模式：
SMD，请求发出后，无论模块是否存在，立即执行后续的逻辑，实现模块开发中对模块的立即引用。
 */

// 定义模块方法
F.define = function (str, fn) {
    var parts = str.split('.');
    var old = parent = this;
    var i = 0;
    var len = 0;

    if (parts[0] === 'F') {
        parts = parts.slice(1);
    }

    if (parts[0] === 'define' || parts[0] === 'module') {
        return;
    }

    for (len = parts.length; i < len; i++) {
        if (typeof parent[parts[i]] === 'undefined') {
            parent[parts[i]] = {};
        }
        old = parent;
        parent = parent[parts[i]];
    }

    if (fn) {
        old[parts[--i]] = fn();
    }

    return this;
}

// 模块调用方法
F.module = function () {
    var args = [].slice.call(arguments);
    var fn = args.pop();
    var parts = args[0] && args[0] instanceof Array ? args[0] : args;
    var modules = [];
    var modIDs = '';
    var i = 0;
    var ilen = parts.length;
    var parent;
    var j;
    var jlen;

    while(i < ilen) {
        if (typeof parts[i] === 'string') {
            parent = this;
            modIDs = parts[i].replace(/^F\./, '').split('.');
            for (j = 0, jlen = modIDs.length; j < jlen; j++) {
                parent = parent[modIDs[j]] || false;
            }
            modules.push(parent);
        } else {
            modules.push(parts[i]);
        }
        i++;
    }
    fn.apply(null, modules);
}