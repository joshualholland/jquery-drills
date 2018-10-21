$(document).ready(function () {
    $('input[type=text]').keyup(function () {
        if ($(this).val() == "") {
            $('#btnSubmit').prop('disabled', true);
        } else {
            $('#btnSubmit').prop('disabled', false);
        };
    });
    $('body').append('<ul></ul>');

    $('#btnSubmit').click(function (e) {
        e.preventDefault();
        let text = $('input[type=text]').val();
        $('ul').append(`<li>${text}</li>`);
    });
// Make sure each li can be selected without selecting all li and choose random color
    $('ul').click(function (event) {
        $(event.target).css({'color': getRandomColor()});
    });
// get random color for li
    function getRandomColor() {
        let randomColor = 'rgb(' + Math.floor((Math.random() * 256)) + ',' + Math.floor((Math.random() * 256)) + ',' + Math.floor((Math.random() * 256)) + ')';
        return randomColor;
    };
});

