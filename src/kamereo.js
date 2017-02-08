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

(function() {
  'use strict';
  class Kamereo {
    constructor(opts = {}) {
      this.initialize(opts);
    }

    initialize(opts = {}) {
      new KamereoCore(opts);
    }
  }

  // export
  global.Kamereo = Kamereo;
})();
