(function start() {
    var first = new app("first-canvas");
    var main = new app("main-canvas");

    var last = new app("last-canvas");
    first.init();
    main.init();
    last.init();
    first.drawCircle();
    var circle = new Circle();
    var line = new Line();
    var dom = new Dom();
    var date = new Date();
    var util = new Util();
    var mouseStatus = "";
    var password = [];
    var firstpassword = [];
    var pointarr = [];
    var flag = 0;
    var again = false;
    dom.changeText(MSG_INPUT);
    mousePc(main.canvas);
    function mousePc(canvasobj) {
        canvasobj.addEventListener("mousemove", function (e) {
            //console.log(3);
            if (mouseStatus === "DOWN") {
                //  console.log(1);
                drawpassword(e);
            }
            else if (mouseStatus === "UP") {
                if (pointarr.length) {
                    verifypassword();
                }
            }
            canvasobj.addEventListener("mousedown", function (e) {
                mouseStatus = "DOWN";
                //console.log(1);
                drawpassword(e);
            }, false);
            canvasobj.addEventListener("mouseup", function (e) {
                mouseStatus = "UP";
            }, false);
        }, false)
    }
    function drawpassword(e) {
        //IE和其他浏览器的兼容问题
        var ev = e || window.event;
        if (e.offsetX || e.touches) {
            var rect = e.currentTarget.getBoundingClientRect();
            var mx = ev.offsetX == undefined ? ev.touches[0].clientX - rect.left : ev.offsetX;
            var my = ev.offsetY == undefined ? ev.touches[0].clientY - rect.top : ev.offsetY;
            var point = util.isTouched(mx, my);
            console.log(point);
            if (point !== null) {
                if (!date.isContainObj(point, pointarr)) {    //console.log(3);
                    pointarr.push(point);
                }
            }
            // console.log(pointarr);
            main.drawPath(pointarr);
            if (pointarr.length) {
                line.drawLine(main.context, pointarr[pointarr.length - 1].x, pointarr[pointarr.length - 1].y, mx, my, "white");
            }
        }
    }
    function verifypassword() {
        pointarr = date.removeRepeat(pointarr);
        
        //password= date.removeRepeat(password);
        password = password.concat(util.pointarrToNumarr(pointarr));
        password= date.removeRepeat(password);
        main.drawPath(pointarr);
        flag = dom.getRadioOrder();
        if (flag == 0) {
            if (!again) {
                firstpassword = password;
                dom.changeText(MSG_AGAIN);
                again = true;
            }
            else if (again) {
                if (firstpassword.join("") === password.join("")) {
                    date.savePwd(firstpassword);
                    dom.changeText(MSG_SUCCESS);
                }
                else {
                    //console.log(firstpassword.join(""));
                    //console.log(password.join(""));
                    main.errorPath(pointarr);
                    dom.changeText(MSG_DIFF);
                    firstpassword = [];
                    password = [];
                }
                again = false;
            }
        }
        else if (flag == 1) {
            console.log(date.readPwd());
            console.log(password.join(""));
            if (password.join("") === date.readPwd()) {
                dom.changeText(MSG_RIGHT);
            }
            else {
                dom.changeText(MSG_ERROR);
                main.errorPath(pointarr);
            }
        }
        pointarr = [];
        password = [];
        mouseStatus = "";
    }
})()