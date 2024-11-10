var print_btn = document.getElementById('print_btn');
print_btn === null || print_btn === void 0 ? void 0 : print_btn.addEventListener('click', function () {
    window.print();
});
var ref_section = document.getElementById('ref');
var ref_btn = document.getElementById('ref_btn');
ref_btn === null || ref_btn === void 0 ? void 0 : ref_btn.addEventListener('click', function () {
    ref_section.classList.toggle('hide');
});
var exp_section = document.getElementById('exprience');
var exp_btn = document.getElementById('exp_btn');
exp_btn === null || exp_btn === void 0 ? void 0 : exp_btn.addEventListener('click', function () {
    exp_section.classList.toggle('hide');
});
var lan_section = document.getElementById('language');
var lan_btn = document.getElementById('lan_btn');
lan_btn === null || lan_btn === void 0 ? void 0 : lan_btn.addEventListener('click', function () {
    lan_section.classList.toggle('hide');
});
var Expertise_section = document.getElementById('Expertise');
var Expertise_btn = document.getElementById('Expertise_btn');
Expertise_btn === null || Expertise_btn === void 0 ? void 0 : Expertise_btn.addEventListener('click', function () {
    Expertise_section.classList.toggle('hide');
});
var edu_section = document.getElementById('education');
var edu_btn = document.getElementById('edu_btn');
edu_btn === null || edu_btn === void 0 ? void 0 : edu_btn.addEventListener('click', function () {
    edu_section.classList.toggle('hide');
});
var con_section = document.getElementById('contant');
var con_btn = document.getElementById('con_btn');
con_btn === null || con_btn === void 0 ? void 0 : con_btn.addEventListener('click', function () {
    con_section.classList.toggle('hide');
});
