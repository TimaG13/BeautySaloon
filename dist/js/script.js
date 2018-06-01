var menu_state = 0;
$( document ).ready(function() {
    // $(".opened").css("height",$(".closed").css("height"));

    $(".main .side_menu .opened .button").click(function(){
        menu_state = 1-menu_state;
        $(".main .side_menu .button.tog").removeClass("menu");
        $(".main .side_menu .button.tog").removeClass("cross");
        //$(".main .side_menu .closed").addClass("active");
        if(menu_state==1){
            $(".main .side_menu .button.tog").addClass("cross");
            $(".main .side_menu .closed").addClass("active");
        }
        if(menu_state==0){
            $(".main .side_menu .button.tog").addClass("menu");
            $(".main .side_menu .closed").removeClass("active");
        }
    });

    //$(".main .side_menu .closed > .button").click(function(){
    //	$(".main .side_menu .closed").removeClass("active");
    //});

    $( ".button.tog.menu" ).click(function() {
        $( this ).toggleClass( "d_block" );
    });


    // slide
    $('.slid_master').slick({
        lazyLoad: 'ondemand',
        slidesToShow: 3,
        slidesToScroll: 1,
        variableWidth: true
    });
});
