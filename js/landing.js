/**
 * Created by Jeremy on 7/25/16.
 */

$( document ).ready(function() {
    $('#Title').hover(
        function () {
            $('.dropdown').css('opacity', '1');
            $('.link').css('transform', 'scale(1.03')
        },
        function () {
            $('.dropdown').css('opacity', '0');
            $('.link').css('transform', 'scale(1')
        });
});