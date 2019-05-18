(function($) {
    const headders = $('#accordion-jquery > h3');
    console.log(headders);

    headders.click(function() {
        headders.removeClass('active'),
            $(this).addClass('active');
    });

})(jQuery);