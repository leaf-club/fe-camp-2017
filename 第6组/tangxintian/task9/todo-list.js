var id = 1;
var arrayHelper = {
    removeById: function (array, idx) {
        var ret = [];
        array.forEach(function (item) {
            if (item.id !== idx) {
                ret.push(item);
            }
        })
        return ret;
    },
    changeStateById: function (array, idx) {
        var ret = [];
        array.forEach(function (item) {
            if (item.id === idx) {
                item.state = !item.state;
            }
            ret.push(item);
        })
        return ret;
    }
};

function Todo() {
    this.things = [];
    this.thingTodo = [];
    this.thingDone = [];
    this.el = document.querySelector('#list');
    this.init = function () {
        var
            input = document.querySelector('#thing'),
            btnBox = document.querySelector('.btn_box');
        var that = this;
        input.addEventListener('keypress', function (e) {
            if (e.keyCode === 13) {
                that.add(input.value);
                input.value ='';
                that.render("all-js");
            }
        });
        btnBox.addEventListener('click', function (e) {
            var id = e.target.id;
            that.fresh();
            that.render(id);
        })
    };
    this.add = function (name) {
        this.things.push({
            id: id,
            time: Date.now(),
            name: name,
            state: false
        })
        id++;
    };
    this.delete = function (id) {
        this.things = arrayHelper.removeById(this.things, id);
    }
    this.changeState = function (id) {
        this.things = arrayHelper.changeStateById(this.things, id);
    }
    this.fresh = function () {
        this.thingTodo = this.things.filter(function (item) {
            return item.state == false;
        });
        this.thingDone = this.things.filter(function (item) {
            return item.state == true;
        });
        this.things = this.thingTodo.concat(this.thingDone);
    }
    this.render = function (id) {
        var data = [];
        this.el.innerHTML = '';
        switch (id) {
            case 'all-js':
                data = this.things;
                break;
            case 'todo-js':
                data = this.thingTodo;
                break;
            case 'done-js':
                data = this.thingDone;
                break;
        }
        data.forEach(function (item) {

            var
                li = document.createElement('li'),
                btn1 = document.createElement('button'),
                btn2 = document.createElement('button'),
                span = document.createElement('span');
            if (item.state) {
                li.className = 'done-css';
            }
            else {
                li.className = 'todo-css';
            }
            btn1.innerHTML = '切换';
            btn2.innerHTML = '删除';
            span.innerHTML = item.name;

            var that = this;
            btn1.addEventListener('click', function () {
                that.changeState(item.id);
                that.render(id);
            });
            btn2.addEventListener('click', function () {
                that.delete(item.id);
                that.render(id);
            });

            li.appendChild(btn1);
            li.appendChild(span);
            li.appendChild(btn2);
            this.el.appendChild(li);
        }.bind(this));
    }
}

var todo = new Todo();
todo.init();