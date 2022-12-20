/* 

Rick and Morty API documentation
https://rickandmortyapi.com/documentation/#character-schema

 */
const charname = document.querySelector('#charname');
const charimage = document.querySelector('#charimage');
const generatebutton = document.querySelector('#generatebutton');
const charstatus = document.querySelector('#status');
const species = document.querySelector('#species');
const gender = document.querySelector('#gender');
const origin = document.querySelector('#origin');
const charinfo = document.querySelector('#charinfo');
const charnumber = document.querySelector('#charnumber');
const charnumbertext = document.querySelector('#charnumbertext');

/*
function displayName() {
const myName = inputField.value;
responseField.innerHTML = myName; 
}

submit.addEventListener("click", () => {
  displayName();
});

*/

async function getCharacter() {
  let randomNumber = Math.ceil(Math.random()*826);
  try {const response = await fetch('https://rickandmortyapi.com/api/character/' + randomNumber);
  if (response.ok) {
    charinfo.style.display = 'block';
    const jsonResp = await response.json();
    charname.innerHTML = await jsonResp.name;
    charimage.src = await jsonResp.image;
    charstatus.innerHTML = await jsonResp.status;
    species.innerHTML = await jsonResp.species;
    gender.innerHTML = await jsonResp.gender;
    origin.innerHTML = await jsonResp.origin.name;
    charnumber.value = randomNumber;
    charnumbertext.innerHTML = charnumber.value;
  }
  }
    catch(err) {
      alert(err);
    } 
};

generatebutton.addEventListener("click", () => {
  getCharacter();
});

async function getCharacterByNumber() {
  let newNumber = charnumber.value;
  try {const response = await fetch('https://rickandmortyapi.com/api/character/' + newNumber);
  if (response.ok) {
    charinfo.style.display = 'block';
    const jsonResp = await response.json();
    charname.innerHTML = await jsonResp.name;
    charimage.src = await jsonResp.image;
    charstatus.innerHTML = await jsonResp.status;
    species.innerHTML = await jsonResp.species;
    gender.innerHTML = await jsonResp.gender;
    origin.innerHTML = await jsonResp.origin.name;
    charnumbertext.innerHTML = charnumber.value;
  }
  }
    catch(err) {
      alert(err);
    } 
}

charnumber.addEventListener("change", () => {
  getCharacterByNumber()
})