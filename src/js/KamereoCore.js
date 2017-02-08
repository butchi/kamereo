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

export default class KamereoCore {
  constructor(opts = {}) {
    this.initialize(opts);
  }

  initialize(opts = {}) {
    this.elm = opts.elm;

    this.src = this.elm.getAttribute('data-src');

    let fromOpt = opts.from;
    let toOpt = opts.to;

    let fromAttr = this.elm.getAttribute('data-color-from');
    let toAttr = this.elm.getAttribute('data-color-to');

    if(fromAttr) {
      this.fromArr = getColorArr(fromAttr);
    }
    if(fromOpt == null) {
    } else if(typeof fromOpt === 'string') {
      this.fromArr = [fromOpt];
    } else if(fromOpt instanceof Array) {
      this.fromArr = fromOpt;
    }

    if(toAttr) {
      this.toArr = getColorArr(toAttr);
    }
    if(toOpt == null) {
    } else if(typeof toOpt === 'string') {
     this.toArr = [toOpt];
    } else if(toOpt instanceof Array) {
      this.toArr = toOpt;
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

        let kamered = svg;

        if(this.fromArr && this.toArr) {
          if(this.toArr.length === 1) {
            for(let i = 0; i < this.fromArr.length; i++) {
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
