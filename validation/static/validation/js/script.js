let validator;

function toggle_visibility(id, boolen) {
    let e = document.getElementById(id);
    if (boolen === true)
        e.style.display = 'none';
    else
        e.style.display = 'block';
}


function next_step(id_old, id_next) {
    let a1 = $("#name").valid()
    let a2 = $("#surname").valid()
    let a3 = $("#email").valid()
    if (a1 && a2 && a3) {
        toggle_visibility(id_old, true)
        toggle_visibility(id_next, false)
    }

}

function return_step(id_new, id_old) {
    toggle_visibility(id_new, true)
    toggle_visibility(id_old, false)
}

function submit_step() {
    let a1 = $("#career").valid()
    let a2 = $("#description").valid()
    let a3 = $("#password").valid()
    let a4 = $("#passwordConfirm").valid()
    if (a1 && a2 && a3 && a4) {
        console.group("Form second")
        console.log('Вы успешно зарегистрированны!')
        console.log('Ваше имя: ' + $("#name").val())
        console.log('Ваша фамилия: ' + $("#surname").val())
        console.log('Email: ' + $("#email").val())
        console.log('Год рождения: ' + $("#career").val())
        console.log('Профессия: ' + $("#description").val())
        console.log('Пароль: ' + $("#passwordConfirm").val())
        console.groupEnd()
        reset()
    }
}

function reset() {
    // сбросить шаг и показать сообщение о регистрации
    toggle_visibility('step-2', true)
    toggle_visibility('step-1', false)
    toggle_visibility('alert', false)
    // убрать сообщение о регистрации
    setTimeout(() => {
        toggle_visibility('alert', true)
    }, 1500)
    // сбросить все поля
    $('.validate')[0].reset();
    // сбросить валидацию

    validator.resetForm()
}
