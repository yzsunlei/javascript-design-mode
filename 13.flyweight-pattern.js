/*
享元模式：
运用共享技术有效地支持大量的细粒度对象，避免对象间拥有相同内容造成多余的开销。
 */

var Flyweight = function () {
    // 已创建的元素
    var created = [];
    // 创建一个新闻包装容器
    function create() {
        var dom = document.createElement('div');
        // 将容器插入新闻列表容器中
        document.getElementById('container').appendChild(dom);
        // 缓存新创建的元素
        created.push(dom);
        // 返回新创建的元素
        return dom;
    }
    return {
        // 获取创建新闻元素的方法
        getDiv: function () {
            // 如果已经创建的元素小于当前页元素总个数，则创建
            if (created.length < 5) {
                return create();
            } else {
                // 获取第一个元素，并插入最后面
                var div = created.shift();
                created.push(div);
                return div;
            }
        }
    }
}
