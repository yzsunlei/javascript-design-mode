/*
Widget模式：
借用Web Widget思想将页面分解成部件，针对部件开发，最终组合成完整的页面。
 */

// 模板引擎
F.module('lib/template', function () {
    var _TplEngine = function (str, data) {
        if (data instanceof Array) {
            var html = '';
            var i = 0;
            var len = data.length;
            for (; i < len; i++) {
                html += _getTpl(str)(data[i]);
            }
            return html;
        } else {
            return _getTpl(str)(data);
        }
    };
    var _getTpl = function (str) {
        var ele = document.getElementById(str);
        if (ele) {
            var html = /^(textarea|input)/i.test(ele.nodeName) ? ele.value : ele.innerHtml;
            return _compileTpl(html);
        } else {
            return _compileTpl(str);
        }
    };
    var _dealTpl = function () {
        var _left = '{%';
        var _right = '%}';
        return String(str)
            .replace(/&lt;/g, '<')
            .replace(/&gt;/g, '>')
            .replace(/[\r\t\n]/g, '')
            .replace(new RegExp(_left + '=(.*?)' + _right, 'g'), "', typeof($1) === 'undefined' ? '' : $1, ")
            .replace(new RegExp(_left, 'g'), "');")
            .replace(new RegExp(_right, 'g'), "template_array.push('"));
    };
    var _compileTpl = function () {

    };

    return _TplEngine;
});