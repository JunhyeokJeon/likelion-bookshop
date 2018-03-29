// $(".aaaa a").css("color","red");

$('.main-nav ul a').on('click', function(event) {
    $(this).parent().find('a').removeClass('activec');
    $(this).addClass('activec');
});

$(window).on('scroll', function() {
    $('.targetc').each(function() {
        if($(window).scrollTop() >= $(this).offset().top) {
            console.log($(this).offset().top);
            var id = $(this).attr('id');
            $('.main-nav ul a').removeClass('activec');
            $(".main-nav ul a[href='#"+ id +"']").addClass('activec');
        }
    });
});

$(window).on('load', function(){
    var toggle = false;

    $('.toggle-nav').click(function() {
        toggle = !toggle;
        if(toggle){
            $('.main-nav').animate({opacity: 1});
            $('.main-nav-bg').animate({opacity: 0.4});
        } else {
            $('.main-nav').animate({opacity: 0});
            $('.main-nav-bg').animate({opacity: 0});
        }
    });
});
