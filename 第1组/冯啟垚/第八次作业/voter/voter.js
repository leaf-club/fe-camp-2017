var headimg = document.getElementsByClassName("head-img");
for (var i=0; i< headimg.length; i++){
    headimg[i].onclick = vote;
    headimg[i].onmouseover = showticket;
    headimg[i].onmouseout = hideticket;
}

function vote() {
    // this.nextElementSibling.nextElementSibling.offsetHeight = 
    // parseInt(this.nextElementSibling.nextElementSibling.offsetHeight) + 1;
    var H = this.nextElementSibling.nextElementSibling.offsetHeight;
    var TicketHeight = H / 16;
    // alert("H0: "+H);
    H += 1;
    // alert("H1: " + H);
    this.nextElementSibling.innerHTML = H;
    // this.nextElementSibling.style.display = "block";
    // this.nextElementSibling.nextElementSibling.offsetHeight = H + "rem";
    this.nextElementSibling.nextElementSibling.style.height = TicketHeight + 0.0625 + "rem";
}

function showticket() {
    // alert(this.nextElementSibling.nextElementSibling.offsetHeight);
    var H = this.nextElementSibling.nextElementSibling.offsetHeight;
    this.nextElementSibling.innerHTML = H;
    this.nextElementSibling.style.display = "block";
    // this.nextElementSibling.style.height="25rem";
}

function hideticket() {
    var H = this.nextElementSibling.nextElementSibling.offsetHeight;
    this.nextElementSibling.innerHTML = H;
    this.nextElementSibling.style.display = "none";
}
