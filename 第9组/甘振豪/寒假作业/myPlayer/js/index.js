window.onload = function () {

    //取消body的touchmove默认行为，阻止页面滚动
    document.body.addEventListener('touchmove', function (event) {
        event.preventDefault();
    }, false);

    var musicAudio = document.querySelector('#mic_audio'), // audio标签
        channel = document.querySelector('.channel'), // 频道标签节点
        songTitle = document.querySelector('.song-title'), // 歌名标签节点
        singer = document.querySelector('.singer'), // 歌手标签节点
        recordImg = document.querySelector('.record-pic img'), // 专辑图片
        recordPic = document.querySelector('.record-pic'), // 专辑图片外层div节点
        recordWrap = document.querySelector('.record-wrapper'), // 专辑区域
        previousBtn = document.querySelector('.previous'),
        playBtn = document.querySelector('.play'), // 播放
        nextBtn = document.querySelector('.next'), // 下一首
        musicList = document.querySelector('.music-list'), //音乐列表
        ctlList = document.querySelector('.ctl-list'), //显示音乐列表
        listMask = document.querySelector('.list-mask'), //隐藏音乐列表
        changeChannelBtn = document.querySelector('.change-channel'), // 更换频道
        modeBtn = document.querySelector('.mode'), // 切换播放模式
        progressBar = document.querySelector('.progress-bar'), // 进度条外层div
        progress = document.querySelector('.progress'), // 进度条长度
        progressBtn = document.querySelector('.progress-btn'), // 进度条拖动
        lyricBtn = document.querySelector('.content'), // 显示歌词
        lyrics = document.querySelector('.lyrics'), // 歌词的包裹节点
        bigBg = document.querySelector('.glass img'),
        lyricsLiArr = null,
        songAll = [], //所有音乐
        listCurrentNum, //当前播放音乐index
        listNextNum, //自动播放时下一首音乐index
        num = 1;

    for (let n = 0; n < 15; n++) {
        getList(n);
    }
    function getList(index) {
        ajax({
            method: 'GET',
            url: 'http://api.jirengu.com/fm/getSong.php',
            data: {
                "channel": 'public_yuzhong_huayu',
            },
            success: function (response) {
                var jsonObj = JSON.parse(response);
                var songObj = jsonObj['song'][0];
                songAll[index] = songObj;
                var ul = document.querySelector(".music-list ul");
                var li = document.createElement("li");
                li.setAttribute('data-index', index)
                var numList = index + 1;
                li.innerHTML = '&nbsp;&nbsp;&nbsp;&nbsp;' + numList + ' . ' + songObj.title + ' - ' + songObj.artist;　
                li.addEventListener('click', function () {
                    num = 0;//避免打开网页时直接从列表中选择播放，导致出错
                    listNextNum = index;
                    getMusic(); // 播放列表中音乐
                },false);
                ul.appendChild(li);
            }
        });
    }
    //console.log(songAll);
    // 播放模式
    modeBtn.onclick = function () {
        if (modeBtn.title == '随机播放') {
            modeBtn.title = '列表循环';
            this.style.backgroundPosition = '0 -207px';
        } else if (modeBtn.title == '列表循环') {
            modeBtn.title = '单曲循环';
            this.style.backgroundPosition = '0 -234px'; //207
        } else {
            this.style.backgroundPosition = '0 -74px';
            modeBtn.title = '随机播放';
        }
    };

    function init() {
        getMusic();
    }
    // 上一首
    previousBtn.onclick = function () {
        if (modeBtn.title == '随机播放') {
            listNextNum = Math.floor(Math.random() * 14);
        } else if (modeBtn.title == '单曲循环') {
            listNextNum = listCurrentNum;
        } else {
            if (listCurrentNum == 0) {
                listNextNum = 14;
            } else {
                listNextNum = listCurrentNum - 1;
            }
        }
        getMusic();
    };

    // 为播放添加事件
    playBtn.onclick = function (e) {
        musicAudio.onplaying = null; //  清除audio标签绑定的事件
        if (musicAudio.paused) {
            playBtn.style.backgroundPosition = '-30px 0';
            playBtn.title = '暂停';
            if (num == 1) {
                getMusic();
            }
            musicAudio.play();
        } else {
            playBtn.style.backgroundPosition = '0 0';
            playBtn.title = '播放';
            musicAudio.pause();
        }
    };

    // 下一曲
    nextBtn.onclick = function () {
        if (modeBtn.title == '随机播放') {
            listNextNum = Math.floor(Math.random() * 14);
        } else if (modeBtn.title == '单曲循环') {
            listNextNum = listCurrentNum;
        } else {
            if (listCurrentNum == 14) {
                listNextNum = 0;
            } else {
                listNextNum = listCurrentNum + 1;
            }
        }
        getMusic();
    };

    // 查看音乐列表
    ctlList.onclick = function () {
        let liCount = document.querySelector("ul li").length || 0;
        let height = 0;
        if (liCount * 40 > 320) {
            height = 320;
        } else {
            height = liCount * 40
        }
        musicList.style.height = '400px';
        musicList.style.border = '1 px solid #42474c';
        listMask.style.display = 'block';
    }

    // 隐藏音乐列表
    listMask.onclick = function () {
        musicList.style.height = '0px';
        musicList.style.border = 'none';
        listMask.style.display = 'none';
    }

    // 显示歌词
    lyricBtn.onclick = function () {
        if (recordWrap.style.display == 'block') {
            recordWrap.style.display = 'none';
            channel.style.fontSize = 0;
            if (!lyricsLiArr) {
                getlyric();
            }
        } else {
            recordWrap.style.display = 'block';
            channel.style.fontSize = '0.5rem';
        }
    };

    var isLoading = false;
    var progressTimer = setInterval(activeProgressBar, 300);
    // 进度条
    function activeProgressBar() {
        var percentNum = Math.floor((musicAudio.currentTime / musicAudio.duration) * 10000) / 100 + '%';
        var currTime = document.querySelector('.current-time');
        var allTime = document.querySelector('.sum-time');
        //时间
        if (!isNaN(musicAudio.duration)) {
            allTime.innerHTML = isGreatTen(parseInt(musicAudio.duration / 60)) + ':' + isGreatTen(parseInt(musicAudio.duration % 60));
        }else{}
        currTime.innerHTML = isGreatTen(parseInt(musicAudio.currentTime / 60)) + ':' + isGreatTen(parseInt(musicAudio.currentTime % 60));
        // 时间格式为00:00,统一格式
        function isGreatTen(element) {
            if (element<10) {
                return '0' + element;
            }
            else {
                return element;
            }
        }
        progress.style.width = percentNum;
        progressBtn.style.left = percentNum;

        if (percentNum == '100%' && !isLoading) {
            isLoading = true;
            if (modeBtn.title == '随机播放') {
                listNextNum = Math.floor(Math.random() * 14);
            } else if (modeBtn.title == '单曲循环') {
                listNextNum = listCurrentNum;
            } else {
                if (listCurrentNum == 14) {
                    listNextNum = 0;
                } else {
                    listNextNum = listCurrentNum + 1;
                }
            }
            getMusic();
        }
        if (musicAudio.paused && recordPic.className != 'record-pic mid') {
            recordPic.className = 'record-pic mid';
            playBtn.style.backgroundPosition = '0 0';
            return;
        } else if (recordPic.className != 'record-pic mid rotate' && !musicAudio.paused) {
            recordPic.className = 'record-pic mid rotate';
            playBtn.style.backgroundPosition = '-30px 0';
        }

        // 控制歌词动态滚动
        if (lyricsLiArr) {
            for (var i = 0, len = lyricsLiArr.length - 1; i < len; i++) {
                var curT = lyricsLiArr[i].getAttribute('data-time');
                var nexT = lyricsLiArr[i + 1].getAttribute('data-time');
                var curtTime = musicAudio.currentTime;
                if ((curtTime > curT) && (curtTime < nexT)) {
                    lyricsLiArr[i].className = 'active';
                    lyrics.style.top = (200 - lyricsLiArr[i].offsetTop) + 'px';
                } else {
                    lyricsLiArr[i].className = '';
                }
            }
        }
    }

    // 进度条操作音乐播放进度，绑定事件(移动端)
    progressBtn.addEventListener('touchstart', function () {
        clearInterval(progressTimer);
    });
    progressBtn.addEventListener('touchmove', function (e) {
        var percentNum = (e.targetTouches[0].pageX - progressBar.offsetLeft) / progressBar.offsetWidth;
        if (percentNum > 1) {
            percentNum = 1;
        } else if (percentNum < 0) {
            percentNum = 0;
        }
        this.style.left = percentNum * 100 + '%';
        progress.style.width = percentNum * 100 + '%';
    });
    progressBtn.addEventListener('touchend', function (e) {
        var percentNum = (e.changedTouches[0].pageX - progressBar.offsetLeft) / progressBar.offsetWidth;
        musicAudio.currentTime = musicAudio.duration * percentNum;
        progressTimer = setInterval(activeProgressBar, 300);
    });
    progressBar.addEventListener('click', function (e) {
        var numPercent = e.offsetX / progressBar.offsetWidth;
        if (e.target == progressBtn) {
            //点击滑块自身不做任何事情                
        } else {
            progressBtn.style.left = numPercent;
            progress.style.width = numPercent;
            musicAudio.currentTime = musicAudio.duration * numPercent;
        }
    });

    /*
    // 进度条操作音乐播放进度，绑定事件(PC端)
    move(progressBar, progressBtn, progress);
    function move(dom1, dom2, dom3) {
        //drag用来存储滑块允许拖拽和不允许拖拽的状态
        var drag = 0;
        //在滑动条上绑定click事件以实现点击任意位置,自动调整滑块和填充块的效果
        dom1.addEventListener('click', function (e) {
            var numPercent = e.offsetX / dom1.offsetWidth;
            if (e.target == dom2) {
                //点击滑块自身不做任何事情                
            } else {
            dom2.style.left = numPercent * 100 + '%';
            dom3.style.width = numPercent * 100 + '%';
            musicAudio.currentTime = musicAudio.duration * numPercent;
            }
        });  
        dom2.addEventListener('mousedown', function () {
            drag = 1;
            clearInterval(progressTimer);
        });
        // 滑块和填充块跟随移动
        dom2.addEventListener('mousemove', function (e) {
            if (drag == 1) {
                var numPercent = e.offsetX / dom1.offsetWidth;
                if (numPercent > 1) {
                    numPercent = 1;
                } else if (numPercent < 0) {
                    numPercent = 0;
                }
                if (e.target != dom2) {
                    dom2.style.left = numPercent * 100 + '%';
                    dom3.style.width = numPercent * 100 + '%';
                }
            }
        });
        //松开按钮都能修改drag的状态
        dom1.addEventListener('mouseup', function (e) {
            drag = 0;
            if (e.target != dom2) {
                var percentNum = e.offsetX / dom1.offsetWidth;
                musicAudio.currentTime = musicAudio.duration * percentNum;
                progressTimer = setInterval(activeProgressBar, 100);
            } else {}
        });
    };
    */

    // 获取音乐
    function getMusic() {
        if (num == 1) {
            listCurrentNum = 0;
            num = 0;
        } else {
            listCurrentNum = listNextNum;
        }
        var songCurrent = songAll[listCurrentNum];
        var ul = document.querySelector(".music-list ul");
        var lis = ul.getElementsByTagName('li');
        for (var i = 0; i < lis.length; i++) {
            var liN = lis[i];
            liN.setAttribute('data-index', i);
            if (liN.getAttribute('data-index') == listCurrentNum) {
                liN.style.color = 'red';
            } else {
                liN.style.color = 'black';
            }
        }
        songTitle.innerHTML = songCurrent.title;
        singer.innerHTML = songCurrent.artist;
        recordImg.src = songCurrent.picture;
        bigBg.src = songCurrent.picture;
        musicAudio.src = songCurrent.url;
        musicAudio.setAttribute('data-sid', songCurrent.sid);
        musicAudio.setAttribute('data-ssid', songCurrent.ssid);
        musicAudio.play();
        isLoading = false;
        getlyric();
    }

    // 获取歌词
    function getlyric() {
        var sid = musicAudio.getAttribute('data-sid');
        var ssid = musicAudio.getAttribute('data-ssid');
        ajax({
            url: 'http://api.jirengu.com/fm/getLyric.php',
            method: 'POST',
            data: {
                sid: sid,
                ssid: ssid
            },
            success: function (response) {
                var lyricsObj = JSON.parse(response);
                if (lyricsObj.lyric) {
                    lyrics.innerHTML = ''; // 清空歌词
                    var lineArr = lyricsObj.lyric.split('\n'); // 歌词以排为界数组
                    var timeReg = /\[\d{2}:\d{2}.\d{2}\]/g;
                    var result = [];
                    for (var i in lineArr) {
                        var time = lineArr[i].match(timeReg);
                        if (!time) continue;
                        var curStr = lineArr[i].replace(timeReg, '');
                        for (var j in time) {
                            var t = time[j].slice(1, -1).split(':'); // 时间的格式是[00:00.00] 分钟和毫秒是t[0],t[1]
                            var curSecond = parseInt(t[0], 10) * 60 + parseFloat(t[1]);
                            result.push([curSecond, curStr]);
                        }
                    }
                    result.sort(function (a, b) {
                        return a[0] - b[0];
                    });
                    // 显示歌词
                    renderLyrics(result);
                }
            }
        })
    }

    // 显示歌词
    function renderLyrics(lyricArr) {
        var str = '';
        for (var i = 0, len = lyricArr.length; i < len; i++) {
            str += '<li data-time="' + lyricArr[i][0] + '">' + lyricArr[i][1] + '</li>';
        }
        lyrics.innerHTML = str;
        lyricsLiArr = lyrics.getElementsByTagName('li');
    }
};