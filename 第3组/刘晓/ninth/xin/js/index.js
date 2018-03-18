var innerGroup = $(".innerwraper");
var leftArrow = $(".left-arrow");
var rightArrow = $(".right-arrow");
var spanGroup = $(".pagination span");
var imgWidth = $(".innerwraper img:first-child").eq(0).width();
var _index = 0;
var timer = null;
var flag = true;
rightArrow.on("click", function() {
    //右箭头
    flag = false;
    clearInterval(timer);
    _index++;
    if (_index ==innerGroup.length-1) {
        _index = 0;
        $(".inner").css("left", -(innerGroup.length - 1) * imgWidth);
    }
    selectPic(_index);
    
})
leftArrow.on("click", function() {
    //左箭头
    flag = false;
    clearInterval(timer);
    if (_index == 0) {
        _index = innerGroup.length-1;
        $(".inner").css("right", -(innerGroup.length - 1) * imgWidth);
    }
    _index--;
    selectPic(_index);
})
spanGroup.on("click", function() {
    //导航切换
    _index = spanGroup.index($(this));
    selectPic(_index);
})

$(".container").hover(function() {
    //鼠标移入
    clearInterval(timer);
    flag = false;
}, function() {
    flag = true;
    timer = setInterval(go, 3000);
});
$(".right-arrow,.left-arrow,.pagination").hover(function(){
    $("a,.pagination").animate({
        opacity:1,
    }, "500",)
},function(){
    $("a,.pagination").animate({
        opacity:0.3,
    }, 500,)
}
)

function autoGo(bol) {
    //自动行走
    if (bol) {
        timer = setInterval(go, 3000);
    }
}
autoGo(flag);

function go() {
    //计时器的函数
    _index++;
    selectPic(_index);
}
function selectPic(num) {
    $(".pagination span").eq(num).addClass("active").siblings().removeClass("active");
    $(".inner").animate({
        left: -num * imgWidth,
    }, 500, function() {
        //检查是否到最后一张
        if (_index == innerGroup.length-1) {
            _index %= 5;
            $(".inner").css("left", "0px");
            $(".pagination span").eq(0).addClass("active").siblings().removeClass("active");
        }
    })
}