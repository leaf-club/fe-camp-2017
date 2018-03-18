jQuery(document).ready(function() {
    // inner variables
    var song;
    var tracker = $('.tracker');
    var volume = $('.volume');
    var flag = true;

    function initAudio(elem) {                  //音频初始化
        wait = false;
        var url = elem.attr('audiourl');
        var title = elem.text();
        var cover = elem.attr('cover');
        var artist = elem.attr('artist');
        $('.player .title').text(title);
        $('.player .artist').text(artist);
        $('.player .cover').css('background-image','url('+cover+')');;
        tracker.slider('value',0)
        // timeupdate event listener
        $('.playlist li').removeClass('active');
        elem.addClass('active');
        song = new Audio(url);
        setTimeout(playAudio,1500)
    }


    function stopAudio() {                      //停止音频按钮
        song.pause();

        $('.play').removeClass('hidden');
        $('.pause').removeClass('visible');
    }


    $('.play').click(function (e) {              // 播放按钮
         

        playAudio();
    });


    $('.pause').click(function (e) {              // 停止按钮
         

        stopAudio();
    });

    function mu (e) {              // 下一曲按钮
        
       stopAudio();

       var next = $('.playlist li.active').next();
       if (next.length == 0) {
           next = $('.playlist li:first-child');
       }
       initAudio(next);
       


   }
   $('.fwd').click(mu);

    function playAudio() {                      //播放音频按钮
        
                song.play();
                tracker.slider("option", "max", song.duration);
                song.addEventListener('timeupdate',function (){
                    var curtime = parseInt(song.currentTime, 10);
                    tracker.slider('value', curtime);
                    if(song.ended){
                        mu();
                    }
                });
        
        
                $('.play').addClass('hidden');
                $('.pause').addClass('visible');
            }

    // rewind click
    $('.rew').click(function (e) {              // 上一曲按钮
         

        stopAudio();

        var prev = $('.playlist li.active').prev();
        if (prev.length == 0) {
            prev = $('.playlist li:last-child');
        }
        initAudio(prev);
    });

    // show playlist
    $('.pl').click(function (e) {              // 显示歌单按钮
         
        if(flag){
        $('.playlist').fadeIn(300);
        flag = !flag;
    }else{
        $('.playlist').fadeOut(300);
        flag = !flag;
    }
    });

    // playlist elements - click
    $('.playlist li').click(function () {     //歌单点击播放按钮
        stopAudio();		
        initAudio($(this));

    });

    // initialization - first element in playlist
       //初始化第一首歌
    setTimeout(initAudio($('.playlist li:first-child')),1000);
    // set volume
    song.volume = 0.7;

    // initialize the volume slider
    volume.slider({                             //音量调节
        range: 'min',
        min: 1,
        max: 100,
        value: 80,
        start: function(event,ui) {},
        slide: function(event, ui) {
            song.volume = ui.value / 100;
        },

    });

    // empty tracker slider
    tracker.slider({                            //歌曲进度调节
        range: 'min',
        min: 0, max: 100,
        start: function(event,ui) {},
        slide: function(event, ui) {
        song.currentTime = ui.value;
        },
        stop: function(event,ui) {}
    });

});
