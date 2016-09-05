/**
 * Created by Jeremy on 7/25/16.
 */

$( document ).ready(function() {
    $('#Title').hover(
        function () {
            console.log($(this));
            $('.dropdown').css('opacity', '1');
            $('.link').css('transform', 'scale(1.03)')
        },
        function () {
            $('.dropdown').css('opacity', '0');
            $('.link').css('transform', 'scale(1)')
        });
    $('.link').hover(
        function() {
            $('.dropdown').css('opacity', '0');
            $(this).next().css('opacity','1');
            $('.link').css('transform', 'scale(1)')
            $(this).css('transform', 'scale(1.03)');
        },
        function () {

    });
    $('.dropdown').hover(
        function() {
            $('.dropdown').css('opacity', '0');
            $(this).css('opacity','1');
            $('.link').css('transform', 'scale(1)')
            $(this).prev().css('transform', 'scale(1.03)');
        },
        function () {

        });
});




$(document).on('click', '.arrow',function() {
    scrollToElement('#feed', 1500, 0);
});

function scrollToElement(selector, time, verticalOffset) {
    time = typeof(time) != 'undefined' ? time : 1000;
    verticalOffset = typeof(verticalOffset) != 'undefined' ? verticalOffset: 0;
    element = jQuery(selector);
    offset = element.offset();
    offsetTop = offset.top + verticalOffset;
    jQuery('html, body').animate({
        scrollTop: offsetTop
    }, time);
};



$(document).on('click', '.learn', function() {

    var popup = "#popup-" + $(this).attr('id').slice(-1);
    console.log(popup);
    $(popup).css('transform','translate(-50%,55%');
    $(popup).css('opacity','1');
    // $(inner).css('opacity', '1');
    $('#overlay').css('visibility', 'visible');
    $('#overlay').css('opacity', '1');
});

$(document).on('click', '.popup', function() {
    $(this).css('transform','translate(-50%,-80%');
    $(this).css('opacity','0');
    // $(inner).css('opacity', '1');
    $('#overlay').css('visibility', 'hidden');
    $('#overlay').css('opacity', '0');
});

