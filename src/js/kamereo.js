import KamereoCore from './kamereo-core';

if(global.document) {
  let elmArr = document.querySelectorAll('[data-kamereo-element]');

  [].forEach.call(elmArr, (elm) => {
    new KamereoCore({
      elm,
    });
  });
}

if(jQuery) {
  jQuery.fn.kamereo = function(opts = {}) {
    opts.elm = this[0];
    new KamereoCore(opts);
  }
}

global.Kamereo = KamereoCore;