new Kamereo({
  elm: document.querySelector('.kamereo-obj'),
  apply: function(dom) {
    var g = dom.querySelector('g');

    g.setAttribute('stroke', 'black');
    g.setAttribute('stroke-width', 10);

    return dom;
  },
});
