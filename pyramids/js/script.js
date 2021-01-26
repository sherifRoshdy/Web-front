$(document).ready(function () {
    $('#button1').on('click',function () {
        $('#anas').show(2000,function () {
            $('#anas2').show(2000,function () {
               $('#div').show(2000)
            });
        });
    });
});