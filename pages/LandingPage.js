'use strict';

function LandingPage(parent) {
  this.parent = parent;
  this.elements = null;
}

LandingPage.prototype.generate = function () {
  // Generamos los elementos del DOM
  this.elements = `
  <header>
    <h1>
      Super cool Star Wars website
    </h1>
    <h2>
      Here you can find the information to become the best fan of Star Wars.
    </h2>
  </header>
  `;
  this.render();
}

LandingPage.prototype.render = function(){
  this.parent.innerHTML = this.elements;
}