const pokedex = document.querySelector(".container");
const fetchData = () => {
  fetch("https://pokeapi.co/api/v2/pokemon?limit=50&offset=0")
    .then((response) => response.json())
    .then((data) => {
      //console.log("fetch result", data);
      const fetches = data.results.map((p) => {
        return fetch(p.url).then((res) => res.json());
      });
      Promise.all(fetches).then((res) => {
        pokeCards(res);
      });
    });
};

const pokeCards = (data) => {
  console.log(data);
  const cards = data
    .map((card) => {
      return `<div class="card">
        <img src=${card.sprites.other.dream_world.front_default} alt=${card.name} />
        <h2>${card.name}</h2> </div>`;
    })
    .join("");

  pokedex.innerHTML = cards;
};

fetchData();
