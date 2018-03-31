function get(s) {
    var sta = s.split(",");
    for (var i = 0; i < sta.length; i++) {
        for (var j = i + 1; j < sta.length; j++) {
            if (sta[i] == sta[j]) sta.splice(j, 1);
        }
    }
    return sta.join(",");
}
alert(get("游泳,健身,篮球,游泳,篮球,阅读"));