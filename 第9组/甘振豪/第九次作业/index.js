$(document).ready(
    function() {
        $('#button').click(
            function() {
                var toAdd = $('input[name=ListItem]').val();
                if (toAdd != '' && toAdd != toAdd.match(/^[  ]+$/)) {
                    $('ol').append('<li>' + toAdd + '</li>');
                    $("input").val("");
                }
                else if (toAdd == toAdd.match(/^[  ]+$/)){
                    $("input").val("");
                }
            });
        $("input[name=ListItem]").keypress(function(event) {
            if (event.which == 13) {
                $("#button").click();
                return false;
            }
        });
        $(document).on('dblclick', 'ol li', function() {
            $(this).toggleClass('strike').fadeOut('slow');
            $(this).remove();
        });
        $('input').focus(function() {
            $(this).val('');
        });
        $('ol').sortable();
        
        $(".clear-completed").on('click', function () {
            $('ol li').remove();
        });
    }
);