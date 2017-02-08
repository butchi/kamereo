import 'whatwg-fetch';
import KamereoCore from './KamereoCore';

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
