$(document).on('click', '.brother', function() {
    var bio = "#bio-" + $(this).attr('id');
    $(bio).css('width','80%');
    var x = $(bio).children().children('i');
    $(x).css('opacity', '1');
    // $(inner).css('opacity', '1');
    $('#brother-bio-background').css('visibility', 'visible');
    $('#brother-bio-background').css('opacity', '1');
});

$(document).on('click', '#x', function() {
    $('.brother-bio').css('width','0%');
    $('#brother-bio-background').css('visibility', 'hidden');
    $('#brother-bio-background, #x').css('opacity', '0');
});