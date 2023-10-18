let team=document.querySelectorAll(".team");
let player=document.querySelector(".players");
let teamId=[48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75];

let key="5e8bdecc7ae2fc73ffaeb2f4a11ea1107e7d1371d38663f26f71a0b58e73d921";
        

function players(teamId,getPlayers){
fetch(`https://apiv2.allsportsapi.com/football/?&met=Teams&teamId=${teamId}&APIkey=${key}`)
           
    .then((response)=> response.json())
    .then((equipo)=>{
        //debugger;
        getPlayers(equipo.result[0].team_name,equipo.result[0].players);

    });   
}

for (let i= 0; i < teamId.length;i++){
players(teamId[i],(team_name,players)=>{
    team[i].innerHTML =team_name;
    team[i].addEventListener("click",()=>{
        player.innerHTML="<h3>Jugadores</h3>";
        for (const item of players){
            let p =document.createElement("p");
            texto=document.createTextNode(item.player_name);
            p.appendChild(texto);
            player.appendChild(p);
            }
        });

    });
}