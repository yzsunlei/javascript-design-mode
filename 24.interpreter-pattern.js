/*
解释器模式：
对于一种语言，给出其文法表示形式，并定义一种解释器，通过使用解释器来解释语言中定义的句子。
 */

//XPath解释器
var Interpreter = (function () {
    function getSublingName() {
        // 获取兄弟元素名称
    }
    return function (node, wrap) {
        var path = [];
        wrap = wrap || document;
        if (node === wrap) {
            if (wrap.nodeType == 1) {
                path.push(wrap.nodeName.toUpperCase());
            }
            return path;
        }
        if (node.parentNode !== wrap) {
            path = arguments.callee(node.parentNode, wrap);
        } else {
            if (wrap.nodeType == 1) {
                path.push(wrap.nodeName.toUpperCase());
            }
        }
        var siblingsNames = getSublingName(node);
        if (node.nodeType == 1) {
            path.push(node.nodeName.toUpperCase() + siblingsNames)
        }
        return path;
    }
})();
