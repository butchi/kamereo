import 'whatwg-fetch';

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
      this.elm = opts.elm;

      this.src = this.elm.getAttribute('data-src');

      let from = this.elm.getAttribute('data-color-from');
      let to = this.elm.getAttribute('data-color-to');

      if(from) {
        this.fromArr = getColorArr(from);
      }

      if(to) {
        this.toArr = getColorArr(this.elm.getAttribute('data-color-to'));
      }

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

          if(typeof this.from === 'string') {
            console.log(this.from);
          }

          let kamered = svg;

          if(from && to) {
            if(this.toArr.length === 1) {
              for(let i = 0; i < this.fromArr.length; i++) {
                console.log(this.fromArr);
                kamered = kamered.replace(this.fromArr[i], this.toArr[0]);
              }
            } else {
              let len = Math.min(this.fromArr.length, this.toArr.length);

              for(let i = 0; i < len; i++) {
                kamered = kamered.replace(this.fromArr[i], this.toArr[i]);
              }
            }
          }

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
