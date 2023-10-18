let image=document.querySelectorAll("#img1");
let nombre=document.querySelectorAll("#nombre");
let image2=document.querySelectorAll("#img2");
let nombre2=document.querySelectorAll("#nombre2");

function equipo1(logo,nombreEquipo){
    image.setAttribute("src",logo);
    nombre.innerHTML=nombreEquipo;
}

function equipo2(logo,nombreEquipo){
    image2.setAttribute("src",logo);
    nombre2.innerHTML=nombreEquipo;
}

let key="5e8bdecc7ae2fc73ffaeb2f4a11ea1107e7d1371d38663f26f71a0b58e73d921";
function mostrarEquipos(idEquipo,fucionEquipo){
fetch('https://apiv2.allsportsapi.com/football/?&met=Teams&teamId=${idEquipo}&APIkey=${key}')
    .then(response => response.json())
    .then((equipos)=>{
        fucionEquipo(
        equipos.result[0].team_logo,
        equipos.result[0].team_name)

    });

}

mostrarEquipos(96,equipo1);
mostrarEquipos(98,equipo2);
