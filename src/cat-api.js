import axios from "axios";
export { fetchBreeds, fetchCatByBreed };
axios.defaults.headers.common["x-api-key"] = "live_Jgfg3bgU43U9pdDUR1cOVu7EUnCA3MqZXD9m9C2gqSYrtVCEMpY8obUp5l2GyLRM";

function fetchBreeds() {
  return axios.get("https://api.thecatapi.com/v1/breeds").then(response =>  response.data);
}

function fetchCatByBreed(breedId) {
  return axios.get(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`).then(response => response.data);
}

