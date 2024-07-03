let search = document.getElementById('search');
let pokeinput = document.getElementById('searching');
let pokeoutput = document.getElementById('content-container');
let pokeoutput2 = document.getElementById('content-container2')
let pokeinfo = document.getElementById('content');
let pokeinfo2 = document.getElementById('content2');

let isvalid = false;
let pokemon;
let url = "https://pokeapi.co/api/v2/pokemon/"

search.addEventListener('click', () =>{
    pokeinfo.innerHTML = "";
    pokeinfo2.innerHTML = "";
    pokemon = pokeinput.value;
    let urlsave = url;
    url += pokemon;
    pokeoutput2.classList.remove("hidden")
    pokeoutput.classList.remove("hidden")
    fetchdata();
    url = urlsave;
})

function fetchdata(){
    fetch(url)
    .then(response => response.json())
    .then(data => {
        const abilitytable = [];
        data.abilities.forEach(move=> {
            abilitytable.push(move.ability.name);
        })
        console.log(abilitytable)

        pokeinfo.innerHTML += "<h1>"+ pokemon + "</h1>";
        pokeinfo.innerHTML += "<img src='" + data.sprites.front_default + "'>";
        document.getElementById('audio').innerHTML += "<audio controls src ='" + data.cries.latest + "'></audio>";


        pokeinfo2.innerHTML += "<tr><th>Ability : </th></tr><tr>";
        abilitytable.forEach(move => {
            pokeinfo2.innerHTML += "<td>" + move + "</td>";
        });
        pokeinfo2 += "</tr>"
        console.log(data);
        })
    .catch(error => console.error("error fetching data : " + error));
}
