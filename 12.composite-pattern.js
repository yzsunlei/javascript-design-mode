/*
组合模式：
又称部分-整体模式，将对象组合成树形结构以表示“部分整体”的层次结构。
*/

// 表单中的应用
var form = new FormItem('FormItem', document.body);
form.add(
    new FieldSetItem('account', '账号').add(
        new Group().add(
            new LabelItem('user_name', '用户名：')
        ).add(
            new InputItem('user_name')
        ).add(
            new SpanItem('4到6位数字或字母')
        )
    ).add(
        new Group().add(
            new LabelItem('user_password', '密码')
        ).add(
            new InputItem('user_password')
        ).add(
            new SpanItem('6到12位数字或者密码')
        )
    )
)
