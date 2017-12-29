window.onload = function() {
    localStorage.password = 123456; 
    var 
      num_btn = document.getElementsByClassName('key'),
      cirCle = document.getElementsByClassName('circle'),
      passCode = document.getElementById('passcode'),
      deLete = document.getElementsByClassName('p2'),
      illuStrate = document.getElementsByClassName('word'),
      keyBoard = document.getElementsByClassName('keyboard'),
      Footer = document.getElementsByClassName('foot'),
      Home = document.getElementsByClassName('part3'),
      Box = document.getElementsByClassName('box1'),
      seq = 0;
      vaLue = '';
    document.onselectstart = function() {
        return false;
    }
    document.contextmenu = function() {
        return false;
    } 
    keyBoard[0].addEventListener('click', function(e) {
        if(e.target.className == 'key' || e.target.className == 'number' || e.target.className== 'letter') {
            console.log(e.target);
            vaLue += e.target.getAttribute('value');
          if(vaLue.length > 0 && vaLue.length < 7) {
            cirCle[seq].classList.add('active');
            seq++;
            if(vaLue.length < 6) {
                deLete[0].innerHTML = 'Delete';
            }
            if(vaLue.length == 6) {
                if(parseInt(vaLue) == localStorage.getItem('password')) {
                    illuStrate[0].innerHTML = 'Correct Passcode';
                    for(var i = 0; i < num_btn.length; i++ ) {
                        num_btn[i].style.display = 'none';
                    }
                    document.getElementsByClassName('p1')[0].style.display = 'none';
                    document.getElementsByClassName('p2')[0].style.display = 'none';
                    setTimeout(disPlay,500);
                }else {
                    illuStrate[0].innerHTML = 'Press Home Button and Enter Again!';
                    for(var i = 0; i < cirCle.length; i++ ) {
                        cirCle[i].classList.remove('active');
                    }
                }
            }
          }
        }
    })
    Home[0].addEventListener('click', reset)
    deLete[0].addEventListener('click', function() {
        if(this.innerHTML == 'Delete') {
            if(vaLue.length == 1) {
                cirCle[0].classList.remove('active');
                reset();
            }else {
                cirCle[--seq].classList.remove('active');
                vaLue = vaLue.substring(0,vaLue.length-1);
            }
        }
    })
    function reset() {
        seq = 0;
        vaLue = '';
        illuStrate[0].style.display = 'block';
        illuStrate[0].innerHTML = 'Touch ID or Enter passcode';
        deLete[0].innerHTML = 'Cancle';
        Box[0].classList.remove('show');
        document.getElementsByClassName('p1')[0].style.display = 'block';
        document.getElementsByClassName('p2')[0].style.display = 'block';
        for(var i = 0; i < num_btn.length; i++ ) {
            num_btn[i].style.display = 'block';
        }
        for(var i = 0; i < cirCle.length; i++ ) {
            cirCle[i].style.display = 'block';
            cirCle[i].classList.remove('active');
        }
    }
    function disPlay() {
        Box[0].classList.add('show');
        illuStrate[0].style.display = 'none';
        for(var i = 0; i < cirCle.length; i++) {
            cirCle[i].style.display = 'none';
        }
    }
}