# Angular Ellipsis
[![Build Status][travis-badge]][travis-badge-url]
[![Coverage Status][coveralls-badge]][coveralls-badge-url]

A simple lightweight library for [Angular (2/4+)][angular] which removes excess text and add ellipsis symbol to end of text before text overflows container.

This is a simple library for [Angular][angular], implemented in the [Angular Package Format v4.0](https://docs.google.com/document/d/1CZC2rcpxffTDfRDs6p1cfbmKNLA6x5O-NtkJglDaBVs/edit#heading=h.k0mh3o8u5hx).


## Install

`npm i @thisissoon/angular-ellipsis --save`

`app.module.ts`
```ts
import { EllipsisModule } from '@thisissoon/angular-ellipsis';

@NgModule({
  imports: [
    EllipsisModule
  ]
})
export class AppModule { }
```


## Example

`app.component.html`

```html
<p class="foo" snEllipsis>
  ...
</p>
```

[travis-badge]: https://travis-ci.org/thisissoon/angular-ellipsis.svg?branch=master
[travis-badge-url]: https://travis-ci.org/thisissoon/angular-ellipsis
[coveralls-badge]: https://coveralls.io/repos/github/thisissoon/angular-ellipsis/badge.svg?branch=master
[coveralls-badge-url]: https://coveralls.io/github/thisissoon/angular-ellipsis?branch=master
[angular]: https://angular.io/
