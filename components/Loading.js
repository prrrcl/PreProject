'use strict';

function Loading(parent) {

  this.parent = parent;
  this.elements = null;

}

Loading.prototype.generate = function(){
  this.elements = `
    <p>May the force be with you...</p>
  `;
  this.render();
}
Loading.prototype.render = function (){
  this.parent.innerHTML = this.elements;
}