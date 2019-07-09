'use strict'

function Layout(root,style){

  this.root = root;
  this.style = style;
  this.elements = null;
  this.header = null;
  this.main = null;
  this.footer = null;
}

Layout.prototype.generate = function(){
  // Generamos elementos del dom
  this.elements = `
    <header id="main-header"></header>
    <main id="main"></main>
    <footer id="main-footer></footer>
  `;
  this.render();
  this.getContainers();
}
Layout.prototype.render = function(){
  // Añadir los elementos generados al DOM
  this.root.innerHTML = this.elements;
}
Layout.prototype.getContainers = function(){
  // Obtener los elementos del dom: Header, main y footer del dom
  this.header = document.querySelector('#main-header');
  this.main = document.querySelector('#main');
  this.footer = document.querySelector('#main-footer')
}