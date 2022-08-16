const API_URL = "https://rickandmortyapi.com/api/character/?page=";

const main = document.getElementById("main");

//Quando o usuário "chama/entra" na página, já chama a API
getCharactes();

function getCharactes() {
const numPage = Math.floor(Math.random() * 43);

  fetch(API_URL + numPage)
    .then((resposta) => {
      return resposta.json();
    })
    .then((data) => {
      showCharactes(data.results);
    });
}

function showCharactes(characters) {
  main.innerHTML = "";

  //forEach quer "para cada"

  characters.forEach((character) => {
    const { name, status, species, gender, image } = character;

    //VAmos criar uma div!
    const cardElement = document.createElement("div");

    //Adicionar a classe card a minha div criada

    cardElement.classList.add("card");

    cardElement.innerHTML = `

        <img src=${image} alt="">
        <div class="card-info">
            <h3>Information</h3>
            <div class="information">
                <p>NOME:${name} </p>
                <p>STATUS:${status} </p>
                <p>ESPÉCIE:${species} </p>
                <p>GÊNERO:${gender} </p>
            </div>
        </div>
 `;

    main.appendChild(cardElement);
  });
}
