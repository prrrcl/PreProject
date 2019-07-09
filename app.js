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
  addListenersToNavbar();
  activateRouter();

  function generateLayout() {
    layoutInstance = new Layout(rootElement);
    layoutInstance.generate();
  }
  
  function generateNavbar() {
    navbarInstance = new Navbar(layoutInstance.header, links);
    navbarInstance.generate();
  }

  function activateRouter(){
    routerInstance.buildDOM(ENTRY_POINT, layoutInstance.main);
  }
  function addListenersToNavbar(){
    let anchors = document.querySelectorAll('.nav-item');
    anchors.forEach((navItem)=>{
      navItem.addEventListener('click', changePage)
    })
  }
  function changePage(event){
    // Para ver el valor del evento
    console.dir(event.target.attributes.url.value)
    let url = event.target.attributes.url.value;
    routerInstance.buildDOM(url, layoutInstance.main)
  }
}

window.addEventListener('load', main);