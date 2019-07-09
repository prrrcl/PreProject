'use strict'
function StarWarsService() {
  this.baseURL = 'https://swapi.co/api/'
}
StarWarsService.prototype.getAllMovies = async function (){
  let response = await fetch(`${this.baseURL}films/`);
  let data = await response.json();
  return data.results;
}

let starWarsServiceInstance = new StarWarsService();