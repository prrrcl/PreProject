'use strict'

function Navbar(parent, links, style) {
  this.parent = parent;
  this.links = links;
  this.style = style;
  this.elements = null;
}

Navbar.prototype.generate = function () {
  // Generamos los elementos html
  this.elements = `
  <nav>
    <ul>
  `;
  this.links.forEach((link) => {
    this.elements += `
      <li>
        <a href="#0" class="nav-item" url="${link.url}">${link.name}</a>
      </li>
    `;
  })
  this.elements += `
    </ul>
  </nav>
  `;
  this.render();
}
Navbar.prototype.render = function () {
  // Añadimos los elementos generados al DOM
  this.parent.innerHTML = this.elements;
}