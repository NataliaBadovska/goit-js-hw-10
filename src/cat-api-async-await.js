import axios from "axios";
export { fetchBreeds, fetchCatByBreed };
axios.defaults.headers.common["x-api-key"] = "live_Jgfg3bgU43U9pdDUR1cOVu7EUnCA3MqZXD9m9C2gqSYrtVCEMpY8obUp5l2GyLRM";

async function fetchBreeds() {
  const response = await axios.get("https://api.thecatapi.com/v1/breeds");
  const cats = await response.data;
  return cats;
}

async function fetchCatByBreed(breedId) {
  const response = await axios.get(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`);
  const cat = response.data;
  return cat;
}