for (let temp = 2020; temp >= 1980; temp--) {
    $('#year').append('<option value="">' + temp + '</option>');
}

function toggle_visibility(id, boolen) {

    var e = document.getElementById(id);
    if (boolen === true)
        e.style.display = 'none';
    else
        e.style.display = 'block';
}

function next_step() {

}

function pushdata() {
    for (let temp = 2020; temp >= 1980; temp--) {
        $('#year').append('<option value="">' + temp + '</option>');
    }
}