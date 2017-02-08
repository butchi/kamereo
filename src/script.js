import 'whatwg-fetch';
import 'KamereoCore';

function getColorArr(str) {
  if(str.match(/^#[0-9a-fA-F]+$/) || str.match(/^[a-zA-Z]+$/)) {
    return [str];
  } else {
    let ret;
    str = str.replace(/\'/g, '"');
    try {
      ret = JSON.parse(str);
    } catch(e) {
      console.error('invalid color.');
    }

    return ret;
  }
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
