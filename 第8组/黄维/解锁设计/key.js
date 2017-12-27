var keyword = "";
//存储原始密码
localStorage.keyword = "123456";
//找到各个属性
var key = document.getElementById('key'),
    keys = document.getElementsByClassName('num'),
    call = document.getElementById('call'),
    del = document.getElementById('del'),
    circles = document.getElementsByClassName('circle'),
    bg = document.getElementById('bg'),
    cir = document.getElementById('circle_box'),
    btn = document.getElementById('button_box'),
    tip = document.getElementById('tip'),
    ntime = document.getElementById('ntime'),
    unlock = document.getElementById('unlock');
    //解锁功能
for (var i = 0; i < keys.length; i++) {
    keys[i].onclick = function () {
        keyword = keyword + this.id;
        tip_dis();
        circles[keyword.length - 1].style.backgroundColor = "rgba(18, 224, 197, 1)";
        circles[keyword.length - 1].style.borderColor = "rgb(18, 224, 197)";
        key.style.animation = "stand 0.1s linear 1 backwards";
        //返回锁屏区和删除错误输入的转换
        if (keyword.length > 0) {
            del.innerText = "DELETE";
        }
        //判断
        if (keyword.length == 6) {
            if (keyword == "123456") {//密码正确
                bg.style.background = "url(lock.png)";//切换到主屏幕
                setTimeout('disappear()', 250);//解锁框消失
            }
            else {//密码错误
                keyword = "";
                tip.style.display = "block";
                del.innerText = "BACK";
                for (var j = 0; j < 6; j++) {
                    circles[j].style.backgroundColor = "rgba(18, 224, 197, 0)";
                    circles[j].style.borderColor = "#a6b1a6";
                }
                setTimeout('tip_dis()', 500);
                key.style.animation = "move 0.5s linear 1 backwards";
            }
        }
    }
    //删除键和返回键的切换与功能
    del.onclick = function () {
        if (del.innerText == "DELETE") {
            keyword = keyword.slice(0, keyword.length - 1);
            circles[keyword.length].style.backgroundColor = "rgba(18, 224, 197, 0)";
            circles[keyword.length].style.borderColor = "#a6b1a6";
            if (keyword.length == 0) {
                del.innerText = "BACK";
            }
        }
        if (del.innerText == "BACK") {
            setTimeout('disappear()', 10);
            ntime.style.display = "block";
            unlock.style.display = "block";
            setInterval(time, 1000);
            time();
        }
    }
    //从锁屏状态到解锁状态的触发
    unlock.onclick = function () {
        setTimeout('wait_lock()', 100);
    }
    //解锁框消失，页面清晰
    function disappear() {
        bg.style.animation = "lock 0.25s linear forwards";
        btn.style.display = "none";
        cir.style.display = "none";
    }
    //锁屏时的时间显示
    function time() {
        var date = new Date(),
            min = date.getMinutes();
        h = date.getHours();
        if (min < 10) {
            min = "0" + min;
        }
        if (h < 10) {
            h = "0" + h;
        }
        ntime.innerText = h + ":" + min;
    }
    //从锁屏状态到解锁状态
    function wait_lock() {
        bg.style.animation = "unlock 0.25s linear forwards";
        btn.style.display = "block";
        cir.style.display = "block";
        unlock.style.display = "none";
        ntime.style.display = "none";
    }
    //提示消失
    function tip_dis() {
        tip.style.display = "none";
    }
}
