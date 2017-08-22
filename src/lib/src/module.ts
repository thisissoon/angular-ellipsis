import { NgModule } from '@angular/core';

import { EllipsisDirective } from './ellipsis/ellipsis.directive';

/**
 * A simple lightweight library for Angular 2/4+ which removes excess text
 * and add ellipsis symbol to end of text before text overflows container
 *
 * @export
 * @class EllipsisModule
 */
@NgModule({
  declarations: [EllipsisDirective],
  exports: [EllipsisDirective]
})
export class EllipsisModule { }
