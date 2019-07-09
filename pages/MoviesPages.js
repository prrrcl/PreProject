'use strict';

function MoviesPage(parent) {
  this.parent = parent;
  this.elements = null;
  this.movies = null;
  this.loading = null;
}

MoviesPage.prototype.generate = async function () {
  this.loading = new Loading(this.parent);
  this.loading.generate();

// Para obtener los elementos antes de que el dom se genere:
await this.connectToAPI();

  // Generamos los elementos del DOM
  this.elements = `
  <header>
   
    <h2>
      Welcome to the Movies Page
    </h2>
  </header>
  <section class="cards-container">
  `;
  this.movies.forEach(element => {
    this.elements += `
    <article class="card">
      <header>
        <h3>${element.title}</h3>
        <p>${element.release_date}</p>
        <p>${element.director}</p>
        <hr>
        <p>${element.opening_crawl}</p>
      </header>
    </article>
    `
  });
  this.elements += `</section>`;
  this.render();
}

MoviesPage.prototype.render = function(){
  this.parent.innerHTML = this.elements;
}
MoviesPage.prototype.connectToAPI = async function(){
  this.movies = await starWarsServiceInstance.getAllMovies();
}