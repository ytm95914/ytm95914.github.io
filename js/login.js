$(function () {
    $(document).off('focus', '.com input').on('focus', '.com input', function () {
        var parentval = $(this).parent().prev();
        var valcontent = $(this).parent().prev().children('input');
        if ($(this).siblings('.iconuser')) {
            $(this).siblings('.iconuser').addClass('iconuseractive');
        }
        if ($(this).siblings('.iconpsd')) {
            $(this).siblings('.iconpsd').addClass('iconpsdactive');
        }
        if (valcontent.length > 0) {
            var text = valcontent.val().trim();
            if (text == "") {
                parentval.find('.tips').show();
            } else {
                parentval.find('.tips').hide();
            }
        }
        $(this).siblings('.tips').hide();
    })
    $(document).off('blur', '.com input').on('blur', '.com input', function () {
        if ($(this).siblings('.iconuser')) {
            if ($(this).val().trim() == "") {
                $(this).siblings('.iconuser').removeClass('iconuseractive');
            } else {
                $(this).siblings('.iconuser').addClass('iconuseractive');
            }
        }
        if ($(this).siblings('.iconpsd')) {
            if ($(this).val().trim() == "") {
                $(this).siblings('.iconpsd').removeClass('iconpsdactive');
            } else {
                $(this).siblings('.iconpsd').addClass('iconpsdactive');
            }
        }
    });
    $(document).off('click', '.loginin').on('click', '.loginin', function () {
        var user = $('.userinp').val().trim();
        var psd = $('.psdinp').val().trim();
        // var prov = $('.proving').val().trim();
        if (user == "") {
            $('.userinp').siblings('.tips').show();
            return false;
        } else if (psd == "") {
            $('.psdinp').siblings('.tips').show();
            return false;
        } 
        // else if (prov == "") {
        //     $('.proving').siblings('.tips').show();
        //     return false;
        // }
         else {
            window.location.href="./videoLibrary.html";
        }
    })
})