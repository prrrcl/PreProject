'use strict';

function main() {
  const ENTRY_POINT = '/';
  let layoutInstance = null;

generateLayout();

  function generateLayout(){
    layoutInstance = new layout();
    layoutInstance.generate();
  }

}

window.addEventListener('load', main);