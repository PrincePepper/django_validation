function toggle_visibility(id, boolen) {
    let e = document.getElementById(id);
    if (boolen === true)
        e.style.display = 'none';
    else
        e.style.display = 'block';
}

function next_step(id_old, id_next) {

    let form = document.getElementsByClassName('needs-validation');
    Array.prototype.filter.call(form, function () {
        jQuery.validator.addMethod("letteronly", function (value, element) {
            let regex = new RegExp("[.,\/#!$%\^&\*;:{}=\-_`~()0-9]+$");
            let key = value;
            return regex.test(key);

        }, "please use only alphabetic characters");

        let temp_valid = $(".validate").validate({
            rules: {
                surname: {
                    required: true,
                    minlength: 2,
                    digits: false,
                    letteronly: true,
                },
                surname: {
                    required: true,
                    minlength: 2,
                    digits: false,
                },
                email: {
                    required: true,
                    email: true
                }
            },
            messages: {
                name: {
                    required: "Please specify your name",
                    letteronly: "22222222222222",
                },
                surname: {
                    required: "We need your email address to contact you",
                    digits: "111111111",

                },
                email: {
                    required: "We need your email address to contact you",
                    email: "Your email address must be in the format of name@domain.com"
                }
            }
        })
        if (temp_valid.errorList.length === 0)
            console.log(1111)
        console.log(temp_valid)
    });

    // toggle_visibility(id_old, true)
    // toggle_visibility(id_next, false)
}

function return_step(id_new, id_old) {
    toggle_visibility(id_new, true)
    toggle_visibility(id_old, false)
}