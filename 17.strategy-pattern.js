/*
策略模式：
将定义的一组算法封装起来，使其相互之间可以替换。封装的算法具有一定独立性，不会随客户端变化而变化。
 */

// 电商中价格策略对象
var PriceStrategy = function () {
    var strategy = {
        return30: function (price) {
            return +price + parseInt(price / 100) * 30;
        },
        return50: function (price) {
            return +price + parseInt(price / 100) * 50;
        },
        percent90: function (price) {
            return price * 100 * 90 / 10000;
        },
        percent50: function (price) {
            return price * 100 * 50 / 10000;
        }
    };

    return function (algorithm, price) {
        return strategy[algorithm] && strategy[algorithm](price);
    }
};
