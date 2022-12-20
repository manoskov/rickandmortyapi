/* 
Rick and Morty API documentation
https://rickandmortyapi.com/documentation/#character-schema
https://rickandmortyapi.com/api/character .info.count

 */

// Constants //

const generatebutton = document.querySelector('#generatebutton');
const charinfo = document.querySelector('#charinfo'); // Block displaying Character Info. display: none by default
const charname = document.querySelector('#charname');
const charimage = document.querySelector('#charimage');
const charstatus = document.querySelector('#status');
const species = document.querySelector('#species');
const gender = document.querySelector('#gender');
const origin = document.querySelector('#origin');

const charnumber = document.querySelector('#charnumber'); 
const charnumbertext = document.querySelector('#charnumbertext');

// getCharacter() function gets character's name, picture and info via API
async function getCharacter(number) {
  try {const response = await fetch('https://rickandmortyapi.com/api/character/' + number);
  if (response.ok) {
    charinfo.style.display = 'block';
    const jsonResp = await response.json();
    charname.innerHTML = await jsonResp.name;
    charimage.src = await jsonResp.image;
    charstatus.innerHTML = await jsonResp.status;
    species.innerHTML = await jsonResp.species;
    gender.innerHTML = await jsonResp.gender;
    origin.innerHTML = await jsonResp.origin.name;
    charnumber.value = number;
    charnumbertext.innerHTML = number;
  }
  }
    catch(err) {
      alert(err);
    } 
};

// Button that generates random number to get random character via API
generatebutton.addEventListener("click", () => {
  let rndNum = Math.ceil(Math.random()*826);
  getCharacter(rndNum);
})

// Range input gets character by number
charnumber.addEventListener("change", () => {
  getCharacter(charnumber.value);
})