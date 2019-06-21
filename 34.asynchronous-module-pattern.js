/*
异步模块模式：
请求发出后，继续其他业务逻辑，知道模块加载完成执行后续的逻辑，实现模块开发中对模块加载完成后的引用。
 */

// 创建或调用模块
F.module = function (url, modDeps, modCallback) {
    var args = [].slice.call(arguments);
    var callback = arg.pop();
    var deps = (args.length && args[args.length - 1] instanceof Array ? args.pop() : [];
    var url = args.length ? args.pop() : null;
    var params = [];
    var depsCount = 0;
    var i = 0;
    var len ;

    if (len = deps.length) {
        while(i < len) {
            (function (i) {
                depsCount++;
                loadModule(deps[i], function (mod) {
                    params[i] = mod;
                    depsCount--;
                    if (depsCount === 0) {
                        setModule(url, params, callback);
                    }
                })
            })(i);
            i++;
        }
    } else {
        setModule(url, [], callback);
    }
}