//使用函数构造歌曲对象
function Song(name,singer,url,picUrl)
{
  this.name=name;
  this.singer=singer;
  this.url=url;//mp3文件地址
  this.picUrl=picUrl;//封面地址
}
//创建歌曲列表数组
var songList=new Array();
songList[0]=new Song('逝去的爱','郑海龙','songs/shiqudeai.mp3','songs/shiqudeai.jpg');
songList[1]=new Song('南方姑娘','赵雷','songs/nanfangguniang.mp3','songs/nanfangguniang.jpg');
songList[2]=new Song('暗里着迷','刘德华','songs/anlizhaomi.mp3','songs/anlizhaomi.jpg');
songList[3]=new Song('Hello','Adele','songs/Hello.mp3','songs/Adele.jpg');
songList[4]=new Song('love9','Only J','songs/love9.mp3','songs/OnlyJ.jpg');
songList[5]=new Song('故乡的原风景','宗次郎','songs/guxiang.mp3','songs/guxiang.jpg');
songList[6]=new Song('逝去的爱','郑海龙','songs/shiqudeai.mp3','songs/shiqudeai.jpg');
songList[7]=new Song('南方姑娘','赵雷','songs/nanfangguniang.mp3','songs/nanfangguniang.jpg');
songList[8]=new Song('暗里着迷','刘德华','songs/anlizhaomi.mp3','songs/anlizhaomi.jpg');
songList[9]=new Song('Hello','Adele','songs/Hello.mp3','songs/Adele.jpg');
songList[10]=new Song('love9','Only J','songs/love9.mp3','songs/OnlyJ.jpg');
songList[11]=new Song('故乡的原风景','宗次郎','songs/guxiang.mp3','songs/guxiang.jpg');
songList[12]=new Song('逝去的爱','郑海龙','songs/shiqudeai.mp3','songs/shiqudeai.jpg');
songList[13]=new Song('南方姑娘','赵雷','songs/nanfangguniang.mp3','songs/nanfangguniang.jpg');
songList[14]=new Song('暗里着迷','刘德华','songs/anlizhaomi.mp3','songs/anlizhaomi.jpg');
songList[15]=new Song('Hello','Adele','songs/Hello.mp3','songs/Adele.jpg');
songList[16]=new Song('love9','Only J','songs/love9.mp3','songs/OnlyJ.jpg');
songList[17]=new Song('故乡的原风景','宗次郎','songs/guxiang.mp3','songs/guxiang.jpg');