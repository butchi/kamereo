import KamereoCore from './kamereo-core';

if(global.document) {
  let elmArr = document.querySelectorAll('[data-kamereo-element]');

  [].forEach.call(elmArr, (elm) => {
    new KamereoCore({
      elm,
    });
  });
}

if(global.jQuery) {
  jQuery.fn.kamereo = function(opts = {}) {
    this.each(function(i, elm) {
      opts.elm = elm;
      new KamereoCore(opts);
    });
  };
}

global.Kamereo = KamereoCore;
