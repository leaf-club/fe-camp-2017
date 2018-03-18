var dex = 0;
var $bpic = $(".pic");
var length = $bpic.length;
var timer = 0;
function banner() {
    /*小圆点特效*/
    this.rendencir = function () {
        var $bcir = $(".cir");
        $bcir.click(function (e) {
            this.style.backgroundColor = "red";
            var $x = $(e.target);
            dex = $bcir.index($x);
            // console.log(x);
            // console.log(x);
            ban.rendenpic(dex);
            for (let i = 0; i < length; i++) {
                if (i !== dex) {
                    $bcir[i].style.backgroundColor = "rgb(196,196,196)";
                }
            }
        }
        )

        $bcir[dex].style.backgroundColor = "red";
        for (let i = 0; i < length; i++) {
            if (i !== dex) {
                $bcir[i].style.backgroundColor = "rgb(196,196,196)";
            }
        }

    }
    /*切换图片特效*/
    this.rendenpic = function (index) {
        var $bpic = $(".pic");
        for (var i = 0; i < $bpic.length; i++) {
            $bpic[i].style.display = "none";
        }
        $bpic[index].style.display = "block";
        // $bpic[].style.display="block";
    }
    /*按钮切换图片*/
    this.btnpic = function () {
        $btn1 = $(".left-button");
        $btn2 = $(".right-button");
        $btn1.click(function () {
            dex = dex - 1;
            if (dex < 0) {
                dex = length + dex;
            }
            ban.rendencir();
            ban.rendenpic(dex);
        })
        $btn2.click(function () {
            dex = (dex + 1) % length;
            ban.rendencir();
            ban.rendenpic(dex);
        })
    }
    /*初始化*/
    this.initial = function () {
        var $bpic = $(".pic");
        $bpic[0].style.display = "block";
        ban.rendencir();
        ban.btnpic();
        var adiv=document.querySelector(".banner");
        adiv.onmouseover=function(){
            clearInterval(timer);
        }
        adiv.onmouseout=ban.auto;
    }
    /*自动播放*/
    this.auto = function () {
clearInterval(timer);
        timer = setInterval(function () {
            dex++;
            dex %= length;
            ban.rendencir();
            ban.rendenpic(dex);
        }, 2000);


    }
}
var ban = new banner();
ban.initial();




