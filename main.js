const startdate = document.querySelector('#date__start');
const result = document.querySelector('#accent');
const day100 = document.querySelector('#date100');
const day200 = document.querySelector('#date200');
const day365 = document.querySelector('#date365');
const day500 = document.querySelector('#date500');

startdate.addEventListener('change', onChangeDate);

function onChangeDate() {
    const day1 = startdate.value;

    const now = new Date();
    const base = new Date(day1)

    const passedDate = calcDate(now.getTime() - base.getTime());

    const after100 = setHmd(addDate(day1, 100));
    const after200 = setHmd(addDate(day1, 200));
    const after365 = setHmd(addDate(day1, 365));
    const after500 = setHmd(addDate(day1, 500));

    result.innerHTML =
        `<h4> ${passedDate}Days!!</h4>`
    day100.innerHTML =
        `<p>${after100}</p>`
    day200.innerHTML =
        `<p>${after200}</p>`
    day365.innerHTML =
        `<p>${after365}</p>`
    day500.innerHTML =
        `<p>${after500}</p>`
}

function calcDate(_date) {
    return Math.round(_date / (1000 * 60 * 60 * 24));
}

function addDate(_date, _add) {
    _date = new Date(_date);
    _date.setDate(_date.getDate() + _add);
    return _date;
}

function setHmd(d) {
    return d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate();
}





