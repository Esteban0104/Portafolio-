function cambiar(){
document.getElementById('titulo1').innerHTML='PYTHON3'
document.getElementById('des1').innerHTML='Holi' 
document.getElementById('progreso1').innerHTML='40%'
var progreso1 = document.getElementById('progreso1')
    progreso1.style.width = '40%'
    document.getElementById('imagen1').src ='./assets/img/css.webp' 
}
function regresar(){
    document.getElementById('titulo1').innerHTML='Card title'
    document.getElementById('des1').innerHTML='This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.'
    document.getElementById('progreso1').innerHTML='25%'
    var progreso1 = document.getElementById('progreso1')
    progreso1.style.width = '25%'
    document.getElementById('imagen1').src ='./assets/img/html.webp' 
    }
