var menu_state = 0;
$(document).ready(function () {
    // $(".opened").css("height",$(".closed").css("height"));

    $(".main .side_menu .opened .button").click(function () {
        menu_state = 1 - menu_state;
        $(".main .side_menu .button.tog").removeClass("menu");
        $(".main .side_menu .button.tog").removeClass("cross d_block");
        //$(".main .side_menu .closed").addClass("active");
        if (menu_state == 1) {
            $(".main .side_menu .button.tog").addClass("cross d_block");
            $(".main .side_menu .closed").addClass("active");
        }
        if (menu_state == 0) {
            $(".main .side_menu .button.tog").addClass("menu");
            $(".main .side_menu .closed").removeClass("active");
        }
        // if (menu_state == 0) {
        //     $(".main .side_menu .opened .button.tog.cross").removeClass("cross");
        //     $(".main .side_menu .opened .button.tog.cross").removeClass("menu");
        // }
    });

    // menu click document
    jQuery(function ($) {
        $(document).mouseup(function (e) {
            var div = $(".closed");
            if (!div.is(e.target)
                && div.has(e.target).length === 0) {
                div.removeClass('active');
                $("a.button.tog").removeClass("cross d_block");
                $("a.button.tog").addClass("menu");
            }
        });
    });

    // slide
    $(".owl-carousel").owlCarousel({
        margin: 10,
        items: 3,
        loop: true
    });


    $(function () {
        // генератор случайной буквы
        function str_rand() {
            var result = '';
            var words = 'QWERTYUIOPASDFGHJKLZXCVBNM';
            var max_position = words.length - 1;
            for (i = 0; i < 4; ++i) {
                position = Math.floor(Math.random() * max_position);
                result = result + words.substring(position, position + 1);
            }
            return result;
        }
        // функция скрол
        $(document).scroll(function () {
            var scrolled = window.pageYOffset || document.documentElement.scrollTop;
            document.getElementById('gen').innerHTML = scrolled + 'px';
            if ( scrolled >= 900) {
                // записую случайные буквы
                var st = setInterval(function () {
                    $("#short_link").text(str_rand());
                }, 90);
                // останавливаю запись букв
                setTimeout(function () {
                    clearInterval(st);
                }, 2000);
                // записую текст
                setTimeout(function () {
                    $("#short_link").html('tima');
                }, 3001);
            }

        });

    });

});
