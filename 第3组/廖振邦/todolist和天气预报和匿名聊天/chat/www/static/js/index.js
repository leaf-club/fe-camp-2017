(function () {
    let form = document.querySelector(".form");
    let button = document.querySelector("#button");


    form.addEventListener('submit', function (evt) {

        evt.preventDefault();



        $.ajax({
            url: '/index/post',
            data: $(form).serialize(),
            type: 'POST',
            success: function (res) {
                console.log(res)
            }
        })
    });
    function sync(n, cb) {
        $.ajax({
            url: '/index/sync?len=' + (n | 0),

            type: 'GET',
            success: function (res) {
                /*  var result=JSON.parse(res) */
                cb(res)
            }
        })
    }

    sync(0, function cb(res) {
        let messages = res.data;
        console.log(res)
        let ul = document.querySelector(".chat")
        sync(messages.len, cb);

        messages.new_message.forEach(function (mes) {
            var li = document.createElement('li');
            li.innerHTML = '<time>' + new Date(mes.timenow).toLocaleString() + '</time><author>' + mes.username + '</author><em>' + mes.text + '</em>';
            ul.insertAdjacentElement('afterbegin', li);
        })
    })
    $("#clear").click(function () {
        $.ajax({
            url: '/index/clear',
            data: {},
            type: 'POST',
            success: function () {
                console.log(1)
            }
        })
    })
})()