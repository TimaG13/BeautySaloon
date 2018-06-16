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

    // menu click document
    jQuery(function($){
        $(document).mouseup(function (e){
            var div = $(".closed");
            if (!div.is(e.target)
                && div.has(e.target).length === 0) {
                div.removeClass('active');
                $( "a.button.tog" ).removeClass("d_block");
            }
        });
    });

    // slide
    $(".owl-carousel").owlCarousel({
        margin:10,
        items:3,
        loop:true
    });
});
