/*
模板方法模式：
父类中定义一组操作算法骨架，而将一些实现步骤延迟到子类中，使得子类可以不改变父类的算法结构的同时可重新定义算法中某些实现步骤。
 */

// 模板类
var Alert = function (data) {
    if (!data)
        return;
    this.content = data.content;
    this.panel = document.createElement("div");
    this.contentNode = document.createElement("p");
    this.confirmBtn = document.createElement("span");
    this.closeBtn = document.createElement("b");
    this.panel.className = 'alert';
    this.closeBtn.className = 'a-close';
    this.confirmBtn.className = 'a-confirm';
    this.confirmBtn.innerHTML = data.confirm || "确认";
    this.contentNode.innerHTML = this.content;
    this.success = data.success || function () {};
    this.fail = data.fail || function () {};
};

// 提示框原型方法
Alert.prototype = {
    init: function () {
        this.panel.appendChild(this.closeBtn);
        this.panel.appendChild(this.contentNode);
        this.panel.appendChild(this.confirmBtn);

        document.body.appendChild(this.panel);

        this.bindEvents();

        this.show();
    },
    bindEvents: function () {
        var me = this;
        this.closeBtn.onclick = function () {
            me.fail();
            me.hide();
        }
        this.confirmBtn.onclick = function () {
            me.success();
            me.hide();
        }
    },
    hide: function () {
        this.panel.style.display = 'none';
    },
    show: function () {
        this.panel.style.display = 'block';
    }
};
