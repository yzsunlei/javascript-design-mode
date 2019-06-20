/*
适配器模式：
将一个类(对象)的接口(方法或属性)转化成另外一个接口，以满足用户需求，使类(对象)之间接口的不兼容问题通过适配器得以解决。
*/

A.g = function(id) {
    // 兼容调用jquery
    // 通过jQuery获取jQuery对象，然后返回第一个成员
    return $(id).get(0);
};