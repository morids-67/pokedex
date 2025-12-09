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
pokemonDetailview.classList.add("hidden");
document.body.appendChild(pokemonDetailview);

 

for (const pokemon of pokemons){
    const card=  createPokemonCard(pokemon);
    
    card.addEventListener("click", function(){
        displaySinglePokemon(pokemon);
    });

    pokemonCards.appendChild(card);
}

//Funktionen

function displaySinglePokemon(pokemon){
    pokemonCards.classList.toggle("hidden");
    pokemonDetailview.classList.toggle("hidden");
    const card = createPokemonCard(pokemon);

    pokemonDetailview.appendChild(card);
}

function createPokemonCard(pokemon){
    const card= document.createElement("div");
    card.classList.add("card");

    const title = document.createElement("h2");
    title.textContent = pokemon.name;

    const image = document.createElement("img");
    image.src = pokemon.image;

    const type = document.createElement("p");
    type.textContent = "Typ: " + pokemon.type;

    card.appendChild(title);
    card.appendChild(image);
    card.appendChild(type);
    return card;
}

//Event-Listeners

title.addEventListener("click", function(){
    pokemonCards.classList.toggle("hidden");
    pokemonDetailview.classList.toggle("hidden");
    pokemonDetailview.innerHTML= "";
});