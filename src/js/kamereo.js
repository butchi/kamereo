import 'whatwg-fetch';
import KamereoCore from './KamereoCore';

if(global.document) {
  let elmArr = document.querySelectorAll('[data-kamereo-element]');

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

if(jQuery) {
  jQuery.fn.kamereo = function(opts = {}) {
    opts.elm = this[0];
    new KamereoCore(opts);
  }
}

// add global method
global.Kamereo = Kamereo;
