function showhidetoggler() {
    $("#navbar_Collapse").toggle();
    $("#navbarCollapse").toggle();
}

function showhidetoggler_for_product() {
    $("#sub_menu_toggler").toggle();
}

function headertable() {
    $.ajax({
        method: 'GET',
        url: 'https://tcistudents.com/live_quotes/get_quotes',
        success: function (response) {
            live_quotes = response
            // console.log(live_quotes)
            $('.price-change').removeClass("negative positive negative_1 positive_1")
            $('.bi-caret-down-fill').remove()
            $('.bi-caret-up-fill').remove()
            if (parseFloat(response[0][1]) < 0) {
                $('.price-change-1').addClass('negative');
            } else {
                $('.price-change-1').addClass('positive');
            }
            if (parseFloat(response[1][1]) < 0) {
                $('.price-change-2').addClass('negative');
            } else {
                $('.price-change-2').addClass('positive');
            }
            if (parseFloat(response[2][1]) < 0) {
                $('.price-change-3').addClass('negative');
            } else {
                $('.price-change-3').addClass('positive');
            }
            if (parseFloat(response[3][1]) < 0) {
                $('.price-change-4').addClass('negative');
            } else {
                $('.price-change-4').addClass('positive');
            }
            if (parseFloat(response[4][1]) < 0) {
                $('.price-change-5').addClass('negative');
            } else {
                $('.price-change-5').addClass('positive');
            }
            if (parseFloat(response[5][1]) < 0) {
                $('.price-change-6').addClass('negative');
            } else {
                $('.price-change-6').addClass('positive');
            }
            if (parseFloat(response[0][3]) < 0) {
                $('.price-change-7').addClass('negative_1');
                $('.price-change-7').prepend('<i class="bi bi-caret-down-fill"></i>');
            } else {
                $('.price-change-7').addClass('positive_1');
                $('.price-change-7').prepend('<i class="bi bi-caret-up-fill"></i>');
            }
            if (parseFloat(response[1][3]) < 0) {
                $('.price-change-8').addClass('negative_1');
                $('.price-change-8').prepend('<i class="bi bi-caret-down-fill"></i>');
            } else {
                $('.price-change-8').addClass('positive_1');
                $('.price-change-8').prepend('<i class="bi bi-caret-up-fill"></i>');
            }
            if (parseFloat(response[2][3]) < 0) {
                $('.price-change-9').addClass('negative_1');
                $('.price-change-9').prepend('<i class="bi bi-caret-down-fill"></i>');
            } else {
                $('.price-change-9').addClass('positive_1');
                $('.price-change-9').prepend('<i class="bi bi-caret-up-fill"></i>');
            }
            if (parseFloat(response[3][3]) < 0) {
                $('.price-change-10').addClass('negative_1');
                $('.price-change-10').prepend('<i class="bi bi-caret-down-fill"></i>');
            } else {
                $('.price-change-10').addClass('positive_1');
                $('.price-change-10').prepend('<i class="bi bi-caret-up-fill"></i>');
            }
            if (parseFloat(response[4][3]) < 0) {
                $('.price-change-11').addClass('negative_1');
                $('.price-change-11').prepend('<i class="bi bi-caret-down-fill"></i>');
            } else {
                $('.price-change-11').addClass('positive_1');
                $('.price-change-11').prepend('<i class="bi bi-caret-up-fill"></i>');
            }
            if (parseFloat(response[5][3]) < 0) {
                $('.price-change-12').addClass('negative_1');
                $('.price-change-12').prepend('<i class="bi bi-caret-down-fill"></i>');
            } else {
                $('.price-change-12').addClass('positive_1');
                $('.price-change-12').prepend('<i class="bi bi-caret-up-fill"></i>');
            }

            // For Laptop

            $('#header-headerINFO-1').text(response[0][0]);
            $('#header-headerINFO-2').text(response[1][0]);
            $('#header-headerINFO-3').text(response[2][0]);
            $('#header-headerINFO-4').text(response[3][0]);
            $('#header-headerINFO-5').text(response[4][0]);
            $('#header-headerINFO-6').text(response[5][0]);
            $('#header_info_bar_1').text(response[0][1]);
            $('#header_info_bar_2').text(response[1][1]);
            $('#header_info_bar_3').text(response[2][1]);
            $('#header_info_bar_4').text(response[3][1]);
            $('#header_info_bar_5').text(response[4][1]);
            $('#header_info_bar_6').text(response[5][1]);
            $('#header_info_bar_1a').text("(" + response[0][3] + "%)");
            $('#header_info_bar_2a').text("(" + response[1][3] + "%)");
            $('#header_info_bar_3a').text("(" + response[2][3] + "%)");
            $('#header_info_bar_4a').text("(" + response[3][3] + "%)");
            $('#header_info_bar_5a').text("(" + response[4][3] + "%)");
            $('#header_info_bar_6a').text("(" + response[5][3] + "%)");

            // For Mobile

            $('#Mobile_header-headerINFO-1').text(response[0][0]);
            $('#Mobile_header-headerINFO-2').text(response[1][0]);
            $('#Mobile_header-headerINFO-3').text(response[2][0]);
            $('#Mobile_header-headerINFO-4').text(response[3][0]);
            $('#Mobile_header-headerINFO-5').text(response[4][0]);
            $('#Mobile_header-headerINFO-6').text(response[5][0]);
            $('#Mobile_header_info_bar_1').text(response[0][1]);
            $('#Mobile_header_info_bar_2').text(response[1][1]);
            $('#Mobile_header_info_bar_3').text(response[2][1]);
            $('#Mobile_header_info_bar_4').text(response[3][1]);
            $('#Mobile_header_info_bar_5').text(response[4][1]);
            $('#Mobile_header_info_bar_6').text(response[5][1]);
            $('#Mobile_header_info_bar_1a').text("(" + response[0][3] + "%)");
            $('#Mobile_header_info_bar_2a').text("(" + response[1][3] + "%)");
            $('#Mobile_header_info_bar_3a').text("(" + response[2][3] + "%)");
            $('#Mobile_header_info_bar_4a').text("(" + response[3][3] + "%)");
            $('#Mobile_header_info_bar_5a').text("(" + response[4][3] + "%)");
            $('#Mobile_header_info_bar_6a').text("(" + response[5][3] + "%)");
        }
    })
    callcount_for_headertable = callcount_for_headertable + 1;
}


$(document).ready(function () {

    $(`#hover_1`).hover(function () {
        $(`#NPS_INFO`).show()
    }, function () {
        $(`#NPS_INFO`).hide()
    })
    counter_for_firefox_CAGR = 1;
    counter_for_firefox_ReverseCAGR = 1;
    callcount_for_headertable = 0;
    $.fn.dataTable.ext.errMode = 'none';
    if ($(window).width() < 835) {
        $("#NPS_DIV").css({ left: 600 })
        
        $("#mobileleftpanel").show();
        $("#mobileleftpanel").css("display", "flex");
        $(".laptopleftpanel").hide();
       
        $(".descriptionimage").hide();
        $(".card-text").hide();
       
        $(".Scanner_opt_mobile").show();
        $(".Scanner_opt_laptop").hide();
        $("#HDIntroLaptopView").hide();
        $("#HDIntroMobileView").show();
        $("#DSIntroLaptopView").hide();
        $("#DSIntroMobileView").show();
        
        $("#LaptopFooter").hide();
        $("#MobileFooter").show();
    }
    else {
       
        $("#mobileleftpanel").hide();
        $(".laptopleftpanel").show();
        $(".Scanner_opt_mobile").hide();
        $(".Scanner_opt_laptop").show();
        
        $("#HDIntroLaptopView").show();
        $("#HDIntroMobileView").hide();
        $("#DSIntroLaptopView").show();
        $("#DSIntroMobileView").hide();
        $("#LaptopFooter").show();
        $("#MobileFooter").hide();
    }

    $(window).resize(function () {
        if ($(window).width() < 835) {
            // $("#Data_Des").hide();
            counter = -1
            if (counter >= 40) {
                counter = -1
                console.log(counter)
            }
            $("#mobileleftpanel").show();
            $(".laptopleftpanel").hide();
           
            $(".descriptionimage").hide();
            $(".card-text").hide();
            
            $(".Scanner_opt_mobile").show();
            $(".Scanner_opt_laptop").hide();
            $("#HDIntroLaptopView").hide();
            $("#HDIntroMobileView").show();
            $("#DSIntroLaptopView").hide();
            $("#DSIntroMobileView").show();
            
            $("#LaptopFooter").hide();
            $("#MobileFooter").show();
        }
        else {
            counter = -1
            if (counter >= 40) {
                counter = -1
                console.log(counter)
            }
            
            $("#mobileleftpanel").hide();
            $(".laptopleftpanel").show();
            $(".Scanner_opt_mobile").hide();
            $(".Scanner_opt_laptop").show();
           
            $("#HDIntroLaptopView").show();
            $("#HDIntroMobileView").hide();
            $("#DSIntroLaptopView").show();
            $("#DSIntroMobileView").hide();
            $("#LaptopFooter").show();
            $("#MobileFooter").hide();
        }

        if ($(window).width() > 835) {
            $(".top-advertisement").show();
            $(".descriptionimage").show();
            $(".card-text").show();
        }
    });

    $("#DeliveryScannerDiscription").show();

    $("#Scanner_Left_Panel").show();

    $("#Scanner_options").show(1, function () {
        $('#Scanner_Left_Panel').css("display", "flex");
        $('#Scanner_options').css("display", "flex");
        $('.Highest_Delivery_Menu').hide();
        $('.Highest_Delivery_Menu').show(1, function () {
            $('#highestdeliverynifty500').hide();
            $('#highestdeliveryfando').show();
            $("#HDniftytimestamp").hide();
            $("#HDfandotimestamp").show();
            if (callcount_for_HD_FandO > 0) { return }
            Highest_Delivery_FO_Chart()
        });
        $('.Delivery_Spike_Menu').hide();
        $('#Delivery_Scanner_Dropdown_2').css('color', '#888888');
        $("#symbol_delivery_spike").css('color', '#888888');
        $('#Delivery_Scanner_Dropdown_1').css('color', '#324ed4');
        $("#symbol_highest_delivery").css('color', '#324ed4');
    });

    $(".Highest_Delivery_Menu").show(1, function () {
        $('#highestdeliverynifty500').hide();
        $('#highestdeliveryfando').show();
        $("#HDniftytimestamp").hide();
        $("#HDfandotimestamp").show();
        if (callcount_for_HD_FandO > 0) { return }
        Highest_Delivery_FO_Chart()
    });

    $(".Delivery_Spike_Menu").hide();
    $('.dropdown_hover').hide();
    $('.dropdown_hover_1').hide();

    $('.delivery_spike_radiobutton').text('')
    $('.strategy_radiobutton').text('')
    $('.student_portal_radiobutton').text('')

    $('#StrategyDiscription').hide();
    $('#StudentPortalDiscription').hide();


    jQuery(".dropdown_hover div").click(function (event) {
        event.preventDefault();
        var text = jQuery(this).text(); // 'this' refers to the h3 element that you clicked.. not the div with the class .results;
        $('#select_time_interval').text(text)
    });

    jQuery(".dropdown_hover_1 div").click(function (event) {
        event.preventDefault();
        var text_1 = jQuery(this).text(); // 'this' refers to the h3 element that you clicked.. not the div with the class .results;
        $('#select_symbol').text(text_1)
    });

    $('.Time_Interval').click(function () {
        $('.dropdown_hover').toggle();
    })

    $('.Symbol').click(function () {
        $('.dropdown_hover_1').toggle();
    })

    $('.accordion-collapse').hide()
    
    $('.dropdown-toggle').on('click', function () {
        $('.dropdown-menu').toggle();
    })
    $('#flush-heading1').on('click', function () {
        $('#flush-collapse1').toggle();
    })
    $('#flush-heading2').on('click', function () {
        $('#flush-collapse2').toggle();
    })
    $('#flush-heading3').on('click', function () {
        $('#flush-collapse3').toggle();
    })


    // if (callcount_for_headertable >= 1) { return }
    headertable()
    setInterval(headertable, 60000);

});
