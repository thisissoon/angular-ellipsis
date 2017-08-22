import { EllipsisDirective } from './ellipsis.directive';
import { ElementRef } from '@angular/core';

describe('EllipsisDirective', () => {
  let node: HTMLElement;
  let el: ElementRef;
  let directive: EllipsisDirective;

  beforeEach(() => {
    node = document.createElement('p');
    el = new ElementRef(node);
    directive = new EllipsisDirective(el);
    directive.ngAfterContentInit();
  });

  it('should exist', () => {
    expect(directive).toHaveBeenCalled();
  });
});
