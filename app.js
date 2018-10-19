$(document).ready(function () {
    $('#btnSubmit').click(function (e) {
        e.preventDefault();
        let text = $('input[type=text]').val();
        $('div').append(`<h2>${text}</h2>`);
        $('h2').mouseover(function () {
            $('h2').css({ 'backgroundColor': 'blue', 'borderRadius': '15px' });
        });
    });
    $('body').append('<div></div>');
    $('input[type=text]').keyup(function () {
        if ($(this).val() == "") {
            $('#btnSubmit').prop('disabled', true);
        } else {
            $('#btnSubmit').prop('disabled', false);
        };
    });
});

