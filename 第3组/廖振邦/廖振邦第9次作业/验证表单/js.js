function valid() {
    /*验证用户名*/
    this.name = function () {
        $aname = $("#name");

        console.log($aname.val());
        $aname.blur(function () {
            $aname.parent().find(".new").remove();
            if ($aname.val().length < 6) {
                $(this).parent().append("<span class='new'>请输入6个以上字符</span>")
            }
            else {
                $(this).parent().append("<span class='new'>输入正确</span>")
            }
        })
    }
    /*验证邮箱*/
    this.email = function () {
        $aemail = $("#email");
        var regEmail = /.+@.+\.[a-zA-Z]{2,4}$/;
        $aemail.blur(function () {
            $aemail.parent().find(".new").remove();
            if ($aemail.val() == "" || ($aemail != "" && !regEmail.test($aemail.val))) {
                var errorMsg = " 请输入正确的E-Mail住址！";
                $aemail.parent().append("<span class='new'>" + errorMsg + "</span>");
            }
            else {
                var errorMsg = "输入正确";
                $aemail.parent().append("<span class='new'>" + errorMsg + "</span>");
            }
        })

    }
    /*姓名必填事件*/
    this.namemust=function(){
        if($("#name").val().length===0){
            alert("姓名必须填写");
        }
    } 
    this.initial=function(){
        valid.name();
        valid.email();
        $("#btn").click(function(){
            valid.namemust();
        })
    }
}
    var valid = new valid();
  valid.initial();