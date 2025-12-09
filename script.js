//Globale Variabeln

const pokemonBilderQuelle = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/";
 
const pokemons = [
    { name: "Pikachu", type: "Elektro", image: `${pokemonBilderQuelle}25.png` },
    { name: "Glumanda", type: "Feuer", image: `${pokemonBilderQuelle}4.png` },
    { name: "Schiggy", type: "Wasser", image: `${pokemonBilderQuelle}7.png` },
    { name: "Bisasam", type: "Pflanze", image: `${pokemonBilderQuelle}1.png` },
    { name: "Evoli", type: "Normal", image: `${pokemonBilderQuelle}133.png` },
    { name: "Farigiraf", type: "Normal", image: `${pokemonBilderQuelle}981.png` },
    { name: "Eisenhals", type: "Unlicht", image: `${pokemonBilderQuelle}993.png` },
    { name: "Manuel", type: "Wasser", image: `${pokemonBilderQuelle}61.png` },
    
];

//HTML-Elemente

let titleName= document.createElement("div");
titleName.id = "title-section";
titleName.classList.add("container");
document.body.appendChild(titleName);

let title = document.createElement("h1");
title.id = "title";
title.textContent = "Mein Pokédex";
titleName.appendChild(title);

let pokemonCards = document.createElement("div");
pokemonCards.id = "pokemon-cards";
pokemonCards.classList.add("container");
document.body.appendChild(pokemonCards);

let pokemonDetailview = document.createElement("div");
pokemonDetailview.id = "pokemon-detail-view";
pokemonDetailview.classList.add("container");
pokemonDetailview.classList.add("d-none");
document.body.appendChild(pokemonDetailview);

 

for (const pokemon of pokemons){
    const card= document.createElement("div");
    card.classList.add("card");

    const title = document.createElement("h2");
    title.textContent = pokemon.name;

    const image = document.createElement("img");
    image.src = pokemon.image;

    const type = document.createElement("p");
    type.textContent = "Typ: " + pokemon.type;

    if (pokemon.type == "Feuer"){
        type.style.color = "red";
    }
    if (pokemon.type == "Wasser"){
        type.style.color = "blue";
    }
    if(pokemon.type == "Pflanze"){
        type.style.color = "green";
    }


    card.appendChild(title);
    card.appendChild(image);
    card.appendChild(type);
    
    card.addEventListener("click", function(){
        displaySinglePokemon(pokemon);
    });

    pokemonCards.appendChild(card);
}

//Funktionen

function displaySinglePokemon(pokemon){
    pokemonCards.classList.toggle("d-none");
    pokemonDetailview.classList.toggle("d-none");
    const card= document.createElement("div");
    card.classList.add("card");

    const title = document.createElement("h2");
    title.textContent = pokemon.name;

    const image = document.createElement("img");
    image.src = pokemon.image;

    const type = document.createElement("p");
    type.textContent = "Typ: " + pokemon.type;

    if (pokemon.type == "Feuer"){
        type.style.color = "red";
    }
    if (pokemon.type == "Wasser"){
        type.style.color = "blue";
    }
    if(pokemon.type == "Pflanze"){
        type.style.color = "green";
    }


    card.appendChild(title);
    card.appendChild(image);
    card.appendChild(type);

    pokemonDetailview.appendChild(card);
}

//Event-Listeners
