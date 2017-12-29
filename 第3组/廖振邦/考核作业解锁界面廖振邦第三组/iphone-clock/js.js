var bnum = document.querySelectorAll(".num");
var bcir = document.querySelectorAll(".cirsss");
var ap = document.querySelector(".foot .sp");
var amain = document.querySelector(".mainview");
var afive = document.querySelector(".five");
var s = "";
var nums = [-1, -1, -1, -1, -1];
var m = -1;
var adiv = document.createElement("div");
localStorage.setItem("password", "12345");
/*不允许有空元素-懒惰删除法*/
function allNotMinus1() {
    for (let i = 0; i < 5; i++) {
        if (nums[i] == -1)
            return false;
    }
    return true;
}

ap.innerText = "Cancel";
/*删除输入的数字操作*/
ap.onclick = function () {
    /*数字键颜色变回屏幕色*/ 
    for(let i=0;i<bnum.length;i++)
    {
        bnum[i].style.backgroundColor="rgb(196,196,196)";
    }
    if (nums[0] == -1)
        return;
    var index = 0;
    
    while (nums[index] != -1) {
        index++;
    }
    nums[index - 1] = -1;
    m--;
    bcir[index - 1].style.backgroundColor = "rgb(196,196,196)";
    if (index - 1 == 0) {
        ap.innerText = "Cancel";
    }
}
/*按密码操作*/
for (let i = 0, j; i < bnum.length; i++) {
    bnum[i].onclick = function () {
        m++;
        m = m % 5;
        nums[m] = this.firstElementChild.innerText;
        s = nums[0] + nums[1] + nums[2] + nums[3] + nums[4];
        /*密码正确跳转*/
        if (s == localStorage.password) {
            window.location.href = "third.html";
        }
        /*由Canael变成Delete*/ 
        ap.innerText = "Delete";
        /*圆颜色变化*/
        this.style.background = "rgb(70,63,63)";
        for (j = 0; j < bnum.length; j++) {
            if (j != i) {
                bnum[j].style.backgroundColor = "rgb(196,196,196)";
            }
        }
        for (let n = 0; n <= m; n++) {
            bcir[n].style.backgroundColor = "rgb(70,63,63)";
            /*判断是否输入5个数*/
            if (allNotMinus1()) {
                amain.insertBefore(adiv, afive);
                adiv.className = "new";
                /*判断密码对不对*/
                if (s != localStorage.password) {
                    for (let i = 0; i < bcir.length; i++) {
                        /*动画*/
                        bcir[i].classList.add("ani");
                        setTimeout(function () { bcir[i].classList.remove("ani"); }, 200);

                    }
                    /*重置*/
                    for (var y = 0; y < bcir.length; y++) {
                        bcir[y].style.backgroundColor = "rgb(196,196,196)";
                        nums[y] = -1;
                        adiv.innerText = "密码输入不正确";

                    }
                    break;
                }
            }

        }
        /*圆颜色变化*/
        for (var x = m + 1; x < bcir.length; x++) {
            bcir[x].style.backgroundColor = "rgb(196,196,196)"
        }
    }

}

