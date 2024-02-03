// import SlimSelect from 'slim-select';
// import Choices from 'choices.js';
import Notiflix from 'notiflix';
import { fetchBreeds, fetchCatByBreed } from "./cat-api";

const select1 = document.querySelector('select.breed-select');
//  const element1 = document.querySelector('.js-choice');
// const choices = new Choices(element1);

const catInfo = document.querySelector('.cat-info');
const loader = document.querySelector('.loader');

loader.classList.add('is-hidden');

select1.addEventListener('change', requestForCompleteInformation);
// element1.addEventListener('change', requestForCompleteInformation);
fetchBreeds().then(fillsInTheSelectionField).catch(requestError);

function fillsInTheSelectionField(cats) {
    cats.forEach(element => {
        let newOption = new Option( `${element.name}`,`${element.id}`);
       select1.add(newOption);
      // element1.add(newOption);
   });
}

function requestForCompleteInformation() {
  const selectedValue = select1.value;
  //  const selectedValue = choices.value;
  loader.classList.remove('is-hidden');
  catInfo.hidden = true;
  fetchCatByBreed(selectedValue).then(renderCatCard).catch(requestError);
}

function renderCatCard(cat) {
  catInfo.hidden = false;
  
 for (const elem of cat) {
   for (const breed of elem.breeds) {

     const murkup = 
      `<div class="card-img">
        <img src="${elem.url}" alt="${breed.name}">
       </div>
       <div class="card-body">
        <h2>${breed.name}</h2>
        <p>${breed.description}</p>
        <p>${breed.temperament}</p>
       </div>`
    
      catInfo.innerHTML = murkup;
   }
    loader.classList.add('is-hidden');
}
}

function requestError() {
  loader.classList.add('is-hidden');
  Notiflix.Notify.failure('Qui timide rogat docet negare');
}




