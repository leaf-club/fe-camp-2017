var play1 = document.getElementById("play1"),
    play2 = document.getElementById("play2"),
    play3 = document.getElementById("play3"),
    play4 = document.getElementById("play4"),
    play5 = document.getElementById("play5"),
    play6 = document.getElementById("play6"),
    play = [play1,play2,play3,play4,play5,play6],
    player = document.getElementById("btnplay"),
    prev = document.getElementById("btnprev"),
    next = document.getElementById("btn3"),
    progress_time = document.getElementById("progress_time"),
    progress_play = document.getElementById("spanplaybar"),
    progress_dot = document.getElementById("spanprogress_op"),
    song_box =document.getElementById("song_box"),
    play_mod = document.getElementById("play_mod");
var flag = 0,
    index = 0;
window.onload = function init() {
    var song_box =document.getElementById("song_box");
    for (var i = 0; i < play.length; i++){
        var li = document.createElement("li"),
            item = document.createElement("div"),
            number = document.createElement("div"),
            songname = document.createElement("div"),
            artist = document.createElement("div"),
            time = document.createElement("div"),
            line = document.createElement("i");
        item.setAttribute("class","songlist__item");
        number.setAttribute("class","songlist__number");
        songname.setAttribute("class","songlist__songname");
        artist.setAttribute("class","songlist__artist");
        time.setAttribute("class","songlist__time");
        line.setAttribute("class","player_songlist__line");
        number.innerHTML = 1 + i;
        songname.innerHTML = songlist[i].songname;
        artist.innerHTML = songlist[i].author;
        time.innerHTML = songlist[i].time;
        item.appendChild(number);
        item.appendChild(songname);
        item.appendChild(artist);
        item.appendChild(time);
        item.appendChild(line);
        li.appendChild(item);
        song_box.appendChild(li);
    }
    play_mod.onclick = function () {
        switch (play_mod.getAttribute("class")){
            case "btn_big_style_order":
                play_mod.setAttribute("class","btn_big_style_random");
                break;
            case "btn_big_style_random":
                play_mod.setAttribute("class","btn_big_style_single");
                break;
            case "btn_big_style_single":
                play_mod.setAttribute("class","btn_big_style_list");
                break;
            case "btn_big_style_list":
                play_mod.setAttribute("class","btn_big_style_order");
                break;
        }
    }
    window.addEventListener("keypress",function (e) {
        if (e.keyCode === 32 || e.keyCode === 13){
            start();
        }else if (e.altKey && e.keyCode == 37){
            reduce();
        }else if (e.altKey && e.keyCode == 39){
            add();
        }
    })
};
player.addEventListener("click",start,false);

function start() {
    reload();
    if (flag){
        play[index].pause();
        player.style.backgroundPosition ="0 0";
        flag = 0;
        songlist__item[index].children[0].setAttribute("class","songlist__number");
    }else {
        play[index].play();
        player.style.backgroundPosition ="-30px 0";
        flag = 1;
        jindutiao();
    }
}
var timer1,timer2;
function jindutiao() {
     timer1 = setInterval(function () {
        var cur = play[index].currentTime,
            length =play[index].duration;
        progress_play.style.width=""+parseFloat(cur/length)*400+"px";
        progress_dot.style.right=parseFloat(cur/length)*(-400)+"px";
    },50);
     timer2 = setInterval(function () {
        var cur = parseInt(play[index].currentTime),
            minute = parseInt(cur / 60);
        if (cur % 60 < 10){
            progress_time.innerHTML = "0"+minute+":0"+cur%60+"";
        }else {
            progress_time.innerHTML = "0"+minute+":"+cur%60+"";
        }
        if (play[index].ended){
            switch (play_mod.getAttribute("class")){
                case "btn_big_style_list":
                    add();
                    break;
                case "btn_big_style_random":
                    clean();
                    index = Math.floor(Math.random()*play.length);
                    start();
                    break;
                case "btn_big_style_order":
                    if (index !== play.length-1){
                        add();
                    }
                    break;
                case "btn_big_style_single":
                    clean();
                    start();
            }
        }
    },1000);
}
prev.addEventListener("click",reduce,false);
next.addEventListener("click",add,false);
song_box.addEventListener("click",change);
function reduce() {
    clean();
    index--;
    if (index < 0){
        index = play.length-1;
    }
    start();
}
function add() {
    clean();
    index++;
    if (index > play.length-1){
        index = 0;
    }
    start();
}
function change(e) {
    var musicName = e.target;
}
function clean() {
    clearInterval(timer1);
    clearInterval(timer2);
    flag = 0;
    progress_play.style.width = "0";
    for (var item = 0;item <play.length;item++){
        if (!play[item].paused){
            play[item].pause();
            play[item].currentTime = 0;
        }
    }
}
var songlist =[
        {songname:"冷暴力",author:"星弟/任然",time:"03:40"},
        {songname:"我好想你",author:"苏打绿",time:"05:24"},
        {songname:"丑八怪",author:"薛之谦",time:"04:08"},
        {songname:"忧伤与快乐",author:"July",time:"03:50"},
        {songname:"最佳损友",author:"陈奕迅",time:"03:59"},
        {songname:"一个人的时光",author:"石进",time:"03:40"}
    ],
    songlist__item = document.getElementsByClassName("songlist__item");
var song_info = document.getElementById("sim_song_info"),
    song_time = document.getElementById("song_time"),
    song_info_info = document.getElementsByClassName("song_info__info")[0];
function reload() {
    for (var i=0;i <play.length;i++){
        if (i === index){
            songlist__item[i].children[0].setAttribute("class","songlist__number--playing");
        }else {
            songlist__item[i].children[0].setAttribute("class","songlist__number");
        }
    }
    song_info.innerHTML = songlist[index].songname+"-"+songlist[index].author;
    song_time.innerHTML = songlist[index].time;
    song_info_info.children[0].children[0].setAttribute("src","pic/"+songlist[index].songname+".jpg");
    song_info_info.children[1].innerHTML = "歌曲名："+songlist[index].songname;
    song_info_info.children[2].innerHTML = "歌手名："+songlist[index].author;
}
var volume= document.getElementById("spanvolume");
volume.addEventListener("click",function (e) {
    var x = e.offsetX;
    var volume_bar= document.getElementById("spanvolumebar"),
        volume_dot = document.getElementById("spanvolumeop");
    volume_bar.style.width = x+"px";
    volume_dot.style.right = -x+4 +"px";
    play[index].volume = parseFloat(x/80)*1;
});
var voice =document.getElementById("spanmute");
voice.addEventListener("click",function (e) {
    if (!play[index].muted){
        voice.style.backgroundPosition =" 0 -182px";
        play[index].muted = true;
    }else {
        voice.style.backgroundPosition = " 0 -144px";
        play[index].muted = false;
    }
})
var song_progress = document.getElementById("spanplayer_bgbar");
song_progress.addEventListener("click",function (e) {
    var bar = e.target,
        x =e.offsetX,
        length = play[index].duration;
    progress_play.style.width= x+"px";
    progress_dot.style.right= -x+5+"px";
    play[index].currentTime=parseInt(x*length/400)+"";
    play[index].play();
})