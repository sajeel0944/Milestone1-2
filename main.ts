
let print_btn=document.getElementById('print_btn')

print_btn?.addEventListener('click',()=>{
    window.print()
})


let ref_section=document.getElementById('ref')
let ref_btn=document.getElementById('ref_btn')

ref_btn?.addEventListener('click',()=>{
    ref_section!.classList.toggle('hide')
})


let exp_section=document.getElementById('exprience')
let exp_btn=document.getElementById('exp_btn')

exp_btn?.addEventListener('click',()=>{
    exp_section!.classList.toggle('hide')
})


let lan_section=document.getElementById('language')
let lan_btn=document.getElementById('lan_btn')

lan_btn?.addEventListener('click',()=>{
    lan_section!.classList.toggle('hide')
})


let Expertise_section=document.getElementById('Expertise')
let Expertise_btn=document.getElementById('Expertise_btn')

Expertise_btn?.addEventListener('click',()=>{
    Expertise_section!.classList.toggle('hide')
})


let edu_section=document.getElementById('education')
let edu_btn=document.getElementById('edu_btn')

edu_btn?.addEventListener('click',()=>{
    edu_section!.classList.toggle('hide')
})


let con_section=document.getElementById('contant')
let con_btn=document.getElementById('con_btn')

con_btn?.addEventListener('click',()=>{
    con_section!.classList.toggle('hide')
})


