/*var thing={
    id:"",
    state:"",
    name:"",
}*/
/*红色代表已完成
蓝色代表未完成*/
var id = 1;
function whole() {
    this.things = [];
    this.thingstodo = [];
    this.thingsdo = [];
    /*
    增添一个数据
    */
    this.add = function (name) {
        this.things.push({
            id: id,
            state: false,
            name: name,
        })
        id++;
    }
    /*
    删除一个数据
    */
    var ArrayHelp = {
        removeByID: function (array, idx) {
            var s = [];
            $.each(array, function (index, item) {
                if (item.id !== idx) {
                    s.push(item);
                }
            })
            return s;
        },
        changestateById: function (array, idx) {
            var s = []
            $.each(array, function (index, item) {
                if (item.id === idx) {
                    item.state = !item.state;
                }
                s.push(item);
            })

            return s;
        }
    }
    this.delete = function (idx) {
        ArrayHelp.removeByID(this.things, idx);
        this.things = ArrayHelp.removeByID(this.things, idx);
    }
    /*改变状态*/
    this.changestate = function (idx) {
        ArrayHelp.changestateById(this.things, idx);
    }
    /*把未完成事件放入thingstodo,已完成事件方人员thingsdo*/
    this.place = function () {
        this.thingstodo = this.things.filter(a);
        this.thingsdo = this.things.filter(b);
        function a(item) {
            return item.state === false;
        }
        function b(item) {
            return item.state === true;
        }
        this.things = this.thingstodo.concat(this.thingsdo);

    }
    /*渲染到界面上*/
    /*value是你点击啦哪个按钮的id然后对应的数组循环遍历*/
    this.renden = function (value) {
        var date = [];
        switch (value) {
            case 'all':
                date = this.things;
                break;
            case 'todo':
                date = this.thingstodo;
                break;
            case 'do':
                date = this.thingsdo;
                break;
        }
        var $ul = $("#list");
        $ul.html("");
        var that = this;
        $.each(date, function (index, item) {
            var $li = $("<li></li>");
            $li.css("display", "flex");
            $li.css("justify-content", "space-between");
            var $btn1 = $("<button></button>");
            var $span = $("<span></span>");
            var $btn2 = $("<button></button>");
            $ul.append($li);
            $li.append($btn1);
            $li.append($span);
            $li.append($btn2);
            $btn1.text("改变");
            $btn2.text("删除");
            $span.text(item.name);
            $btn2.click(function () {
                whole.delete(item.id);
                whole.place();
                whole.renden("all");
            })

            $btn1.click(function () {
                whole.changestate(item.id);
                if (item.state === false) {
                    $span.addClass("false-css");
                }
                else {
                    $span.addClass("true-css");
                }
                that.place();
                var n = that.thingstodo.length;
                var $span2 = $("#uncomp");
                $span2.text(n + "项未完成");
            })
            if (item.state === false) {
                $span.addClass("false-css");
            }
            else {
                $span.addClass("true-css");
            }
        }
        )
        var n = that.thingstodo.length;
        var $span2 = $("#uncomp");
        $span2.text(n + "项未完成");

    }
    /*添加点击事件执行函数也就是初始化*/
    this.initial = function () {
        var $text = $("#cin");

        $text.keydown(function (e) {

            if (e.keyCode === 13) {
                whole.add($text.val());
                whole.place();
                whole.renden("all");
                $("#cin").val("");
            }
        })
        var $box = $("#btn-box");
        $box.click(function (e) {
            whole.place();
            whole.renden(e.target.id);
        })


    }
}
/*主程序*/
var whole = new whole();
whole.initial();