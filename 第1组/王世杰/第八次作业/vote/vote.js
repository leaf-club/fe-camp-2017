var 
    box = document.getElementsByClassName('vote_box'),
    imge = document.getElementsByClassName('vote_img'),
    number = document.getElementsByClassName('vote_number'),
    column = document.getElementsByClassName('vote_column'),
    dis = document.getElementById('ondis'),
    columnH = new Array();
for(var i = 0; i < box.length; i++ ) {
    box[i].index = i;
    imge[i].index = i;
    number[i].innerHTML = 0;
    columnH[i] = column[i].clientHeight;
    imge[i].onclick = function() {
        columnH[this.index]++;
        column[this.index].style.height = columnH[this.index] + '%';
        number[this.index].style.display = 'block';
        number[this.index].style.bottom = 11 + columnH[this.index] + '%';
        number[this.index].innerHTML = columnH[this.index];
    }
    box[i].onmouseover = function() { 
        number[this.index].style.display = 'block';
        number[this.index].style.bottom = 11 + columnH[this.index] + '%';
        number[this.index].innerHTML = columnH[this.index];
    }
    box[i].onmouseleave = function() {
        number[this.index].style.display = 'none';
    }
}
dis.addEventListener('click',function() {
    for(var i = 0; i < number.length; i++ ) {
        number[i].style.display = 'block';
    } 
});