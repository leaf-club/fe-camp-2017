var message =
    [
        {
            歌曲: "东京铁塔的幸福",
            歌手: "江美琪",
            专辑: "再一次也好",
            时长: "04:22",
        },
        {
            歌曲: "走着走着就散了",
            歌手: "庄心妍",
            专辑: "走着走着就散了",
            时长: "03:44",
        },
        {
            歌曲: "煎熬",
            歌手: "李佳薇",
            专辑: "感谢爱人",
            时长: "04:22",
        },
        {
            歌曲: "你还要我怎样",
            歌手: "薛之谦",
            专辑: "中国新歌声",
            时长: "03:22",
        },
        {
            歌曲: "帝都",
            歌手: "萌萌哒天团",
            专辑: "帝都",
            时长: "04:01",
        }
    ];
var jsonText = JSON.stringify(message);
var messageCopy = JSON.parse(jsonText);

function Begin() {
    this.tds = document.querySelectorAll(".old td");
    this.buttons = document.querySelectorAll(".buttons button");
    this.audio = document.getElementById("music");
}
Begin.prototype = {
    init: function () {
        localStorage.setItem("message", jsonText);
    },
    /**
     * @name writeMessage
     * @param {name,singer,time}
     *        歌曲名,歌手,时长
     * 写信息
     * @return 
     */
    writeMessage: function (name, singer, time) {
        this.tds[0].innerText = name;
        this.tds[1].innerText = singer;
        this.tds[2].innerText = time;
    },
    
    nextMusic: function () {
        var newname = "";
        var name = localStorage.getItem("musicName");
        for (var i = 0;i< messageCopy.length; i++) {
            if (name == messageCopy[i].歌曲) {
                this.changeMusicName(messageCopy[(i + 1) % 5].歌曲)
            }
        }
    },
    beforeMusic: function () {
        var newname = "";
        var name = localStorage.getItem("musicName");
        for (let i = 0;i< messageCopy.length; i++) {
          //console.log(messageCopy[i]);
            if (name == messageCopy[i].歌曲) {
                if (i - 1 >= 0){
                    this.changeMusicName(messageCopy[(i - 1)].歌曲)
                }
                else {
                    this.changeMusicName(messageCopy[(i + 5 - 1)].歌曲)
                }
            }
        }
    },
    changeMusicName: function (name) {
        localStorage.setItem("musicName", name)
    },
    /**
     * @name showMessage
     * @param
     * 展示信息 根据musicname的不同执行不同的操作
     * @return
     */
    showMessage: function () {
        var musicName = localStorage.getItem("musicName");
        switch (musicName) {
            case "东京铁塔的幸福":
                this.writeMessage(messageCopy[0].歌曲, messageCopy[0].歌手, messageCopy[0].时长)
                //console.log(this.audio);
                this.audio.src = "1.mp3";
               // console.log(this.audio);
                break;
            case "走着走着就散了":
                this.writeMessage(messageCopy[1].歌曲, messageCopy[1].歌手, messageCopy[1].时长)
                this.audio.src = "2.mp3";
                break;
            case "煎熬":
                this.writeMessage(messageCopy[2].歌曲, messageCopy[2].歌手, messageCopy[2].时长)
                this.audio.src = "3.mp3";
                break;
            case "你还要我怎样":
                this.writeMessage(messageCopy[3].歌曲, messageCopy[3].歌手, messageCopy[3].时长)
                this.audio.src = "4.mp3";
                break;
            case "帝都":
                this.writeMessage(messageCopy[4].歌曲, messageCopy[4].歌手, messageCopy[4].时长)
                this.audio.src = "5.mp3";
                break;
        }
    },
    click_things:function(){
        var that=this;
        this.buttons[0].onclick=function(){
           // console.log(that.audio);
           begin.showMessage();
            that.audio.play()
            //begin.showMessage();
        }
        this.buttons[1].onclick=function(){
           // begin.showMessage();
            that.audio.pause()
          
        }
        this.buttons[2].onclick=function(){
            that.beforeMusic();
            begin.showMessage();
        }
        this.buttons[3].onclick=function(){
            that.nextMusic();
            begin.showMessage();
        }
    }
}

var begin = new Begin();
//console.log(begin.audio);
begin.init();
begin.showMessage();
begin.click_things();
