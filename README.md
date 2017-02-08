# kamereo

SVG color controller library.


## install

```
bower install kamereo
```

```
npm install kamereo
```


## usage

See [demo page](http://butchi.github.io/kamereo/demo/) also.


### example 1

```html
<!doctype html>
<html>
  <head>
    <title>kamereo sample</title>
  </head>
  <body>
    <div class="kamereo-elm" data-src="img/sample.svg"></div>
  </body>
</html>
```

```javascript
new Kamereo({
  elm: document.querySelector('.kamereo-elm'),
  from: '#618F75',
  to: 'red',
});
```


### example 2

```html
<!doctype html>
<html>
  <head>
    <title>kamereo sample</title>
  </head>
  <body>
    <div class="camereo-elm" data-camereo-element data-src="img/sample.svg" data-color-from="#618F75" data-color-to="red"></div>
  </body>
</html>
```
