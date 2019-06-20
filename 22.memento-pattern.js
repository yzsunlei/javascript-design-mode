/*
备忘录模式：
在不破坏对象的封装性的前提下，在对象之外捕获并保存该对象内部的状态以便日后对象使用或者对象恢复到以前的某个状态。
 */

// 新闻缓存器
var Page = function () {
    var cache = {};
    return function (page, fn) {
        if (cache[page]) {
            showPage(page, cache[page]);
            fn && fn();
        } else {
            $.post('./data/getNewsData.php', {
                page: page
            }, function (res) {
                if (res.errno == 0) {
                    showPage(page, res.data);
                    cache[page] = res.data;
                    fn && fn();
                }
            });
        }
    }
};
