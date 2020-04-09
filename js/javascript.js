$(function() {
    $('.btn-loading').on('click', function() {
        $btn = $(this).button('loading');
        setTimeout(function() {
            $btn.button('reset');
        }, 1000);
    });
});