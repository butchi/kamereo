import 'whatwg-fetch';

(function() {
  'use strict';
  class Kamereo {
    constructor(opts = {}) {
      this.initialize(opts);
    }

    initialize(opts = {}) {
      this.elm = opts.elm;

      this.src = this.elm.getAttribute('data-src');

      this.from = this.elm.getAttribute('data-color-from');
      this.to = this.elm.getAttribute('data-color-to');

      this.apply = opts.apply;

      fetch(this.src)
        .then((response) => {
          return response.text();
        }).then((svg) => {
          let parser = new DOMParser();
          let dom = parser.parseFromString(svg, 'image/svg+xml');

          if(typeof this.apply === 'function') {
            dom = this.apply(dom);

            let serializer = new XMLSerializer();
            svg = serializer.serializeToString(dom);
          }

          let kamered = svg.replace(this.from, this.to);
          let encoded = encodeURIComponent(kamered);

          this.elm.style['background-image'] = `url("data:image/svg+xml,${encoded}")`;

          let [w, h] = svg.match(/viewBox="([0-9]+) ([0-9]+) ([0-9]+) ([0-9]+)"/).slice(3, 5);

          this.elm.style.width = `${w}px`;
          this.elm.style.height = `${h}px`;
        })
      ;

    }
  }

  // export
  global.Kamereo = Kamereo;
})();
