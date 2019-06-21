/*
MVC模式：
模型model-视图view-控制器controller，用一种将业务逻辑、数据、视图分离的方式组织架构代码。
 */

// 创建MVC对象
$(function() {
   var MVC = MVC || {};
   MVC.model = function () {
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
   MVC.view = function () {
        var M = MVC.model;
        var V = {};
        return function (v) {
            V[v]();
        }
   }();
   MVC.ctrl = function () {
        var M = MVC.model;
        var V = MVC.view;
        var C = {};
   }();
});