function Countdown() {
    var nowTime = new Date(); //获得当前时间对象 
    var Data = ['2018/04/04', '2018/04/11', '2018/04/18', '2018/04/25'];
    var countDown =[];
    for (var i = 0; i < Data.length; i++) {
        var fuTime = new Date(Data[i] + ' ' + '10:00:00');
        var diff_time = fuTime.getTime() - nowTime.getTime(); //获得当前时间距离未来时间的时间差（毫秒
        var D = parseInt(diff_time / (24 * 60 * 60 * 1000)); //计算还剩多少天
        countDown[i] = {
            data: Data[i],
            daysBefore: D
        };
    }
    return countDown;
};
Countdown();