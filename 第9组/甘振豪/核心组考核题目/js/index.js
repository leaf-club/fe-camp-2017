jQuery(document).ready(function($) {
    $(document).ready(function() {
        // t
        var passcode = (+!![] + []) + (!+[] + !![] + []) + (!+[] + !![] + !![] + []) + (!+[] + !![] + !![] + !![] + []) + (!+[] + !![] + !![] + !![] + !![] + []) +
            (!+[] + !![] + !![] + !![] + !![] + !![] + []);
        //var passcode = "123456";
        //console.log(passcode);//test
        var enterCode = "";
        enterCode.toString();
        $("#numbers button").click(function() {
            var clickedNumber = $(this).text().toString();
            enterCode = enterCode + clickedNumber;
            //console.log(enterCode); //test
            var lengthCode = parseInt(enterCode.length);
            lengthCode--;
            $("#fields .numberfield:eq(" + lengthCode + ")").addClass("active");
            if (lengthCode == 5) {
                // Check the passcode
                if (enterCode == passcode) {
                    // Right passcode!
                    // $("#fields .numberfield").addClass("right");
                    // $("#numbers").addClass("hide");
                    // $("#anleitung p").html("Amazing ! It's the correct Code !").css('color', 'green');
                    // $("#numbers button").attr('disabled', 'disabled');
                    $(".table").hide();
                    $(".iphone-footer").hide();
                    $(".welcome").show();
                }
                else {
                    // Wrong passcode!
                    $("#fields").addClass("miss");
                    enterCode = "";
                    setTimeout(function() {
                        $("#fields .numberfield").removeClass("active");
                    }, 200);
                    setTimeout(function() {
                        $("#fields").removeClass("miss");
                    }, 500);
                    $("#anleitung p").html("<strong>Wows ! It's wrong !</strong>").css('color', 'red');
                    setTimeout(function() {
                        $("#anleitung p").html("<strong>Touch ID or Enter passcode</strong>").css('color', '#fff');
                    }, 800);
                }
            } 
            else {}
        });
        $("#restartbtn").click(function() {
            enterCode = "";
            $(".welcome").hide();
            $(".table").show();
            $(".iphone-footer").show();
            $("#fields .numberfield").removeClass("active");
            $("#fields .numberfield").removeClass("right");
            $("#numbers").removeClass("hide");
            $("#numbers button").removeAttr('disabled', 'disabled');
            $("#anleitung p").html("<strong>Touch ID or Enter passcode</strong>").css('color', '#fff');
        });
        $("#delete").click(function() {
            var lengthCode = parseInt(enterCode.length);
            //console.log(lengthCode); //test
            if (lengthCode > 0 && lengthCode < 6) {
                enterCode = enterCode.substring(0, enterCode.length - 1);
                lengthCode = parseInt(enterCode.length);
                $("#fields .numberfield:eq(" + lengthCode + ")").removeClass("active");
            } 
            else {}
        });
    });
});
window.onload = function() {
    function addzero(num) {
        if (num >= 10) {
            return "" + num;
        } 
        else {
            return "0" + num;
        }
    }
    function times() {
        var date = new Date(),
            aTime = document.getElementById('aTime'),
            str = addzero(date.getHours()) + ":" + addzero(date.getMinutes());
        aTime.innerHTML = str;
    }
    setInterval(times, 1000);
    times();
    $(".welcome").hide();
}