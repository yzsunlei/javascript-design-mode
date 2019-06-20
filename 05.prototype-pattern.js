/*
原型模式：
用原型实例指向创建对象的类，使用于创建新的对象的类共享原型对象的属性以及方法。
*/

// 图片轮播类
var LoopImages = function(imgArr, container) {
    this.imagesArray = imgArr;
    this.container = container;
};

LoopImages.prototype = {
    // 创建轮播图片
    createImage: function() {
        console.log("LoopImages createImage function");
    },
    // 切换下一张图片
    changeImage: function() {
        console.log("LoopImages changeImage function");
    }
};

// 上下滑动切换类
var SliderLoopImg = function(imgArr, container) {
    // 构造函数继承图片轮播类
    LoopImages.call(this, imgArr, container);
};
SliderLoopImg.prototype = new LoopImages();
// 重写继承的“切换下一张图片”方法
SliderLoopImg.prototype.changeImage = function() {
    console.log("SliderLoopImg changeImage function");
};
