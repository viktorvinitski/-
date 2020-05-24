function plus() {
    document.getElementById('divf').innerHTML += '<br><input type=text placeholder="Телефон N" style="margin-top: 5px;"> <button id=butt onclick=add()>+</button>'
    document.getElementById('but').remove()            
}
function add(){
    document.getElementById('butt').remove()
    document.getElementById('divf').innerHTML += '<br><input type=text placeholder="Телефон N" style="margin-top: 5px;"> <button id=butt onclick=add()>+</button>'

}