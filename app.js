var na = document.querySelector('.main .na h1')
var main = document.querySelector('.main')
var one = document.getElementById('one')
var two = document.getElementById('two')
var popup = document.querySelector('.popup')

main.addEventListener('mouseover',over)
main.addEventListener('mouseout',out)
function over(){
    na.style.marginTop='-10vh'
    na.style.fontSize="50px"
    imagein()
}
function out(){
    na.style.marginTop='0vh'
    na.style.fontSize="100px"
    imageout()
}
function imagein(){
    one.style.opacity='1'
    one.style.width='300px'
    two.style.opacity='1'
    two.style.width='300px'
}
function imageout(){
    one.style.opacity='0'
    one.style.width='100px'
    two.style.opacity='0'
    two.style.width='100px'
}
function onclick1(){
    popup.style.display="block"
}
function onclick2(){
    popup.style.display="none"
}

