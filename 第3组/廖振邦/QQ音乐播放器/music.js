var as = document.querySelectorAll(".musics a");
//console.log(as);
for (let i = 0; i < as.length; i++) {
    as[i].addEventListener("click", function () {
        localStorage.setItem("musicName", this.innerText);
    })
}