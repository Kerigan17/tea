$(function () {
    let icons = {
        header: "iconOpen",
        activeHeader: "iconClosed"
    };

    let popUp = $('.thanks');
    popUp.hide();

    $('.single-item').slick();
    $("#accordion").accordion({
        heightStyle: "content",
        collapsible: true,
        icons: icons
    });

    new WOW({
        animateClass: 'animate__animated'
    }).init();

    $('.open-popup-link').magnificPopup({
        type: 'image'
    });

    $(".navbar-toggler").click(function(e) {
        e.preventDefault();
        $('.navbar-collapse').toggleClass("active");
    });


    $('.submit').click(function (){
        $(".validate").validate({
            rules: {
                firstName: "required",
                lastName: "required",
                phone: {
                    required: true,
                    number: true
                },
                country: "required",
                index: {
                    required: true,
                    number: true,
                    minlength: 6
                },
                address: 'required'
            },
            messages: {
                firstName: "Заполните поле",
                lastName: "Заполните поле",
                phone: {
                    required: 'Заполните поле',
                    number: 'Только цифры'
                },
                country: 'Заполните поле',
                index: {
                    required: 'Заполните поле',
                    number: 'Только цифры',
                    minlength: 'Минимум 6 символов'
                },
                address: 'Заполните поле'
            },
            submitHandler: function (form) {
                // показываем "Спасибо за заказ"
                popUp.show();
                // скрываем форму и заголовок
                $('.hide-form').hide();

                // никуда ничего не отправляем
                return false
            }
        });
    })
});

