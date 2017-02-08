import 'whatwg-fetch';
import KamereoCore from './KamereoCore';

if(global.document) {
  let elmArr = document.querySelectorAll('[data-camereo-element]');

  [].forEach.call(elmArr, (elm) => {
    new KamereoCore({
      elm,
    });
  });
}

class Kamereo {
  constructor(opts = {}) {
    this.initialize(opts);
  }

  initialize(opts = {}) {
    new KamereoCore(opts);
  }
}

// add global method
global.Kamereo = Kamereo;
