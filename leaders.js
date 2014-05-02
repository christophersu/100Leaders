$( document ).ready(function() {
    $('div').click(function() {
        if (!($(this).attr('class'))) {
            if($(this).css('border-color').replace(/\s+/g, '') === 'rgb(255,0,0)') {
                $(this).css("border-color", "orange");
            }
            else if($(this).css('border-color').replace(/\s+/g, '') === 'rgb(255,165,0)') {
                $(this).css("border-color", "green");
            }
            else {
                $(this).css("border-color", "red");
            }
        }
    });
});