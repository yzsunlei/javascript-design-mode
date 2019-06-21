/*
MVP模型：
模型Model-视图View-管理器Presenter，View层不直接引用Model层内的数据，而是通过Presenter层实现对Model层内的数据访问。
 */

// MVP单体对象
(function (window) {
    var MVP = function () {

    };
    MVP.model = function () {
        var M = {};
        M.data = {};
        M.conf = {};
        return {
            getData: function (m) {
                return M.data[m];
            },
            getConf: function (c) {
                return M.conf[c];
            },
            setData: function (m, v) {
                M.data[m] = v;
                return this;
            },
            setConf = function (c, v) {
                M.conf[c] = v;
                return this;
            }
        }
    }();
    MVP.view = function () {
        return function (str) {
            // 将str转换成html
            return html;
        }
    }();
    MVP.presenter = function () {
        var V = MVP.view;
        var M = MVP.model;
        var C = {};
        return {
            init: function () {
                for (var i in C) {
                    C[i] && C[i](M, V, i);
                }
            }
        }
    }();
    MVP.init = function () {

    };
    Window.MVP = MVP;
})(window);