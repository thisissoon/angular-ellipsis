import { NgModule } from '@angular/core';

import { EllipsisDirective } from './ellipsis.directive';

/**
 * A simple lightweight library for Angular 2/4+ which removes excess text
 * and adds an ellipsis symbol to end of text before text overflows container
 *
 */
@NgModule({
  declarations: [EllipsisDirective],
  exports: [EllipsisDirective]
})
export class EllipsisModule { }
