'use strict';

function main() {
  const ENTRY_POINT = '/';
  let layoutInstance = null;
  let navbarInstance = null;
  let links = [
    {
      name: 'Home',
      url: '/'
    },
    {
      name: 'Movies',
      url: '/movies'
    }
  ]
  let rootElement = document.querySelector('#root');

  generateLayout();
  generateNavbar();

  function generateLayout() {
    layoutInstance = new Layout(rootElement);
    layoutInstance.generate();
  }
  
  function generateNavbar() {
    navbarInstance = new Navbar(layoutInstance.header, links);
    navbarInstance.generate();

  }

}

window.addEventListener('load', main);