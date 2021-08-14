// $('#viewprofile').on('click', function () {
//     $('.form-horizontal').attr('action', 'viewprofile');
// });
//
// $('#users').on('click', function () {
//     $('.form-horizontal').attr('action', 'users');
// });
//
// $('#home').on('click', function () {
//     $('.form-horizontal').attr('action', 'viewprofile');
// });
//
// $('#signout').on('click', function () {
//     $('.form-horizontal').attr('action', 'signout');
// });
//
// $('#profile').on('click', function () {
//     $('.form-horizontal').attr('action', 'profile');
// });
//
// $('#gotoregister').on('click', function () {
//     $('.form-horizontal').attr('action', 'register');
// });

function apply_validation() {
    $(".form-horizontal").find("input,select,textarea").not("[type=submit]").jqBootstrapValidation({preventSubmit: true, submitError: function($form, event, errors) { alert("Error");}});
}

function set_message_visibility(){

    if ($("#success_message").text() != ''){
        $(".alert-success").css('visibility', 'visible');
    } else {
        $(".alert-success").css('visibility', 'hidden');
    }

    if ($("#danger_message").text() != ''){
        $(".alert-danger").css('visibility', 'visible');
    } else {
        $(".alert-danger").css('visibility', 'hidden');
    }
}