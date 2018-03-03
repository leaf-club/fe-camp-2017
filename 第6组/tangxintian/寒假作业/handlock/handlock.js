(function (w) {
    function handLock(option) {
        this.el = option.el ||w.document.body;
        this.n = option.n ||3;
        this.n = (this.n > 5 && this.n < 2) ? 3 :this.n;
        this.circles =[]; //用来存储n*n个circle的位置
        this.touchCircles = []; //用来存储已经触摸到的所有circle
        this.restCircles = []; //用来存储还未触到的circle
        this.touchFlag = false; //用于判断是否touch到circle
        this.dom = {
            info: option.info
        };
        this.reDraw = false;
    }
    handLock.prototype = {
        init: function () {
            this.createCanvas();
            this.createCircles();
            this.initPass();
            this.createListener();
        },

        createCanvas: function () {
            var width,elRect;
            elRect = this.el.getBoundingClientRect();
            width = elRect.width < 300 ? 300:elRect.width;
            var canvas = document.createElement('canvas');
            canvas.width = canvas.height = width;
            this.el.appendChild(canvas);

            var canvas2 = canvas.cloneNode(true);
            canvas2.style.position = 'absolute';
            canvas2.style.top = '0';
            canvas2.style.left = '0';
            this.el.appendChild(canvas2);

            this.ctx = canvas.getContext('2d');
            this.canvas = canvas;
            this.width = width;

            this.ctx2 = canvas2.getContext('2d');
            this.ctx2.strokeStyle = '#ffa726';
            this.canvas2 = canvas2;

        },

        createCircles: function () { //画圆
            var n = this.n;
            this.r = Math.floor(this.width/(2 + 4 * n));
            var r =this.r;
            for (var i =0; i < n ; i++){
                for (var j = 0; j < n; j++){
                    var p ={
                        x: j * 4 * r + 3 * r,
                        y: i * 4 * r + 3 * r,
                        id: i * 3 + j
                    };
                    this.circles.push(p);
                    this.restCircles.push(p);
                }
            }
            this.drawCircles();
        },

        initPass: function () {//密码初始化
            this.lsPass = w.localStorage.getItem('HandLockPass')?{
                model : 1,
                pass:w.localStorage.getItem('HandLockPass').split('-')
            }:{ model : 2 };
            this.updateMessage();
        },

        createListener: function () {
            var self = this,
                temp,
                r =this.r,
                over = false;
            this.canvas2.addEventListener('touchstart',function (e) {
            var p =self.getTouchPos(e);
            self.restCircles =self.restCircles.concat(self.touchCircles.splice(0));
            self.judgePos(p);
            },false)
            var t = this.throttle(function (e) {
                var p = this.getTouchPos(e);
            })
        },

        updata: function (p) {//更新touchmove

        },
        checkPass: function () {//判断当前model和检查密码

        },
        drawCircle :function (x,y,color) {
            this.ctx.strokeStyle =color || '#ffa726';
            this.ctx.lineWidth = 2;
            this.ctx.beginPath();
            this.ctx.arc(x, y, this.r, 0,Math.PI * 2,true);
            this.ctx.closePath();
            this.ctx.stroke();
        },

        drawCircles: function () {
            this.ctx.clearRect(0, 0, this.width, this.width);
            for (var i = 0; i < this.circles.length; i++){
                this.drawCircle(this.circles[i].x,this.circles[i].y);
            }
        },

        drawEndCircles: function (color) {//end时重绘已经touch的圆
            for (var i = 0; i <this.touchCircles.length; i++){
                this.drawCircle(this.touchCircles[i].x, this.touchCircles[i].y,color);
            }
        },

        drawLine: function () {//画折线
            var len = this.touchCircles.length;
            if (len >= 2){
                this.ctx.beginPath();
                this.ctx.lineWidth = 3;
                this.ctx.moveTo(this.touchCircles[len - 2].x,this.touchCircles[len - 2].y);
                this.ctx.lineTo(this.touchCircles[len - 1].x, this.touchCircles[len - 1].y);
                this.ctx.stroke();
                this.ctx.closePath();
            }
        },

        drawLine2TouchPos: function (p) {
            var len = this.touchCircles.length;
            if (len >= 1){
                this.ctx2.clearRect(0, 0, this.width,this.width);
                this.ctx2.beginPath();
                this.ctx2.lineWidth = 3;
                this.ctx2.moveTo(this.touchCircles[len - 1].x, this.touchCircles[len - 1].y);
                this.ctx2.lineTo(p.x, p.y);
                this.ctx2.stroke();
                this.ctx2.closePath();
            }
        },

        drawPoints: function () {
            var i = this.touchCircles.length - 1;
            if (i >= 0){
                this.ctx.fillStyle = "#ffa726";
                this.ctx.beginPath();
                this.ctx.arc(this.touchCircles[i].x, this.touchCircles[i].y, this.r / 2, 0,Math.PI*2,true);
                this.ctx.closePath();
                this.ctx.fill();
            }
        },

        getTouchPos: function (e) {
            var rect = e.target.getBoundingClientRect();
            var p = {
                x:e.touches[0].clientX -rect.left;
                y: e.touches
            }
        }
    }
    var el = document.getElementById('handlock'),
        info = el.getElementsByClassName('info')[0],
        select = document.getElementById('select'),
        message = select.getElementsByClassName('message')[0],
        radio = select.getElementsByClassName('radio')[0],
        setPass = radio.children[0].children[0],
        checkPass = radio.children[1].children[0];
    new handLock({
        el: el,
        info: info,
        message: message,
        setPass: setPass,
        checkPass: checkPass,
        n: 3
    }).init();
})(window);


