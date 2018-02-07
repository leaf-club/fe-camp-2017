var list=document.getElementById('list'),                 //歌单列表ul
    audio=document.getElementById('myAudio'),             //音频标签
    prev=document.getElementById('prev'),                 //上一首按钮
    play_pause=document.getElementById('play_pause'),     //播放/暂停按钮
    next=document.getElementById('next'),                 //下一首按钮
    songPic=document.getElementById('songPic'),           //专辑封面显示div
    songPicStyle=window.getComputedStyle(songPic,null).getPropertyValue("animation"),
    currentTime=document.getElementById('currentTime');   //播放即时时间显示div
    totalTime=document.getElementById('totalTime');       //总时间显示div
    bar=document.getElementById('bar');                   //进度条灰色框
    barWidth=window.getComputedStyle(bar,null).getPropertyValue("width"),
    playedBar=document.getElementById('playedBar');       //进度条
    changeButton=document.getElementById('changeButton'); //拖动按钮
var n=0,                                                  //n记录当前播放歌曲的索引值
    j=0,                                                  //j记录进度比值,跟随定时器变化
    barLength=0,                                          //进度条灰色框宽度数值
    pbLength=0,                                           //进度条宽度数值
    pbarLength;                                           //进度条宽度数值，用于拖拽按钮mousemove
var x0=0,x1=0,deltaX=0;
var flag=false;                                           //标识，用于拖拽时界定事件顺序

//html创建歌单列表文本
function initialList(){
  for(var i=0;i<songList.length;i++){
    var item=document.createElement('li');
    var itemSinger=document.createElement('span');
    item.index=i;//为保存临时变量，给item加属性
    //创建歌单
    item.innerHTML=songList[i].name;
    itemSinger.innerHTML=songList[i].singer;
    item.appendChild(itemSinger);
    list.appendChild(item);
    //单击歌曲，播放
    item.addEventListener('click',chooseSong);//dbclick没用，所以用了单击！
    //设置定时器
    var t=setInterval(progressTime,1000);
  }
}
//点击歌曲播放
function chooseSong(e){
  n=e.target.index;  //n记录当前播放歌曲的索引值
  coverChange();
  play_pause.className='playing';
  songPic.style.animation='discRotation 4s linear infinite';
  var items=this.parentNode.children;
  for(var i=0;i<items.length;i++){
    items[i].style.backgroundColor='white';
  }
  this.style.backgroundColor='#ccc';
}
//改变封面图片
function coverChange(){
  audio.setAttribute('src',songList[n].url);         
  songPic.className='songPic';
  songPic.style.backgroundImage='url('+songList[n].picUrl+')';
  audio.play();
}
//已播放时间,设置定时器
function progressTime(){
  //改变显示时间
  playedTime=parseInt(audio.currentTime);
  pMin=parseInt(playedTime/60);
  pSec=playedTime%60;
  if(pSec<10) {
    currentTime.innerHTML='0'+pMin+':0'+pSec;
  }else{
    currentTime.innerHTML='0'+pMin+':'+pSec;
  }
  //播放过程中，进度条伸展
  progress();
  //播放结束后，自动播放下一首
  if(audio.ended) nextSong();
}
//播放过程，进度条伸展
function progress(){
  if(!audio.paused){
    j=audio.currentTime/audio.duration;
    barLength=parseInt(barWidth);
    pbLength=parseInt(j*barLength);
    var pbWidth=pbLength+'px';
    playedBar.style.width=pbWidth;
    //拖动按钮位置同步变化
    cbPos=pbLength-5;
    var cbLeft=cbPos+'px';
    changeButton.style.left=cbLeft;
  }
}
//总时间
audio.addEventListener('canplay',function(){    //play没有用！
  total=parseInt(audio.duration);
  tMin=parseInt(total/60);
  tSec=total%60;
  if(tSec<10){
    totalTime.innerHTML='0'+tMin+':0'+tSec;
  }else{
    totalTime.innerHTML='0'+tMin+':'+tSec;
  }
})
//上一首
prev.addEventListener('click',prevSong)
//播放-暂停
play_pause.addEventListener('click',statusChange)
//下一首
next.addEventListener('click',nextSong);
//上一首歌
function prevSong(){
  if(n==0) n=songList.length;
  n=n-1;
  coverChange();
}
//播放-暂停
function statusChange(){
  if(audio.paused){
    audio.play();
    this.className='playing';
    songPic.style.animation='discRotation 4s linear infinite';
  }else{
    audio.pause();
    this.className='paused';
    songPic.style.animation='';
  }
}
//下一首歌
function nextSong(){
  if(n==songList.length-1) n=-1;
  n=n+1;
  coverChange();
}
//拖动进度条,用户体验仍有不足，鼠标脱离了拖拽按钮后会有问题。
changeButton.addEventListener('mousedown',function(e0){
  var e0=window.event || e0;
  x0=e0.clientX;
  flag=true;
  clearInterval(t);//清除定时器，让进度条完全由鼠标控制。
})
changeButton.addEventListener('mousemove',function(e1){
  if(flag){//保证mousemove在mousedown后发生。
    var e1=window.event || e1;
    x1=e1.clientX;
    deltaX=x1-x0;//得到水平方向坐标差
    console.log(deltaX+'deltaX');
    pbarLength=pbLength+deltaX;//这里不能pbLength+=deltaX,再多定义一个变量，避免变量被刷新。
    var pbWidth=pbarLength+'px';
    console.log(pbWidth+'pbWidth');
    playedBar.style.width=pbWidth;
    //拖拽按钮位置变更
    cbPos=pbarLength-5;
    var cbLeft=cbPos+'px';
    changeButton.style.left=cbLeft;
  }
  return false;
})
changeButton.addEventListener('mouseup',function(){
  flag=false;
  audio.currentTime=pbarLength/barLength*audio.duration;
  pbLength=pbarLength;
  x0=0;x1=0;deltaX=0;
  t=setInterval(progressTime,1000);
})
//调用函数
initialList();