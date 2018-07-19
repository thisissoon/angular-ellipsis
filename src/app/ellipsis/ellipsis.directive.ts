import { AfterViewInit, Directive, ElementRef, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

/**
 * Removes excess text from element until it fits in elements
 * and appends a ellipsis symbol to end of text. This requires that
 * the elements height be fixed and it's `overflow` css property
 * be `hidden`
 *
 * @example
 * ```html
 * <p snEllipsis>Ullamco esse laborum</p>
 * ```
 *
 */
@Directive({
  selector: '[snEllipsis]'
})
export class EllipsisDirective implements AfterViewInit {
  /**
   * Ellipsis charater
   *
   * @memberof EllipsisDirective
   */
  private ellipsisChar = '…';
  /**
   * If true means the elements contents are larger
   * than the size of the element.
   *
   * @memberof EllipsisDirective
   */
  private get hasOverflow(): boolean {
    const el: HTMLElement = this.el.nativeElement;
    return el.scrollHeight > el.offsetHeight;
  }
  /**
   * Creates an instance of EllipsisDirective.
   *
   * @memberof EllipsisDirective
   */
  constructor(
    private el: ElementRef,
    @Inject(PLATFORM_ID) private platformId
  ) { }
  /**
   * Clip text on component initialisation
   *
   * @memberof EllipsisDirective
   */
  public ngAfterViewInit(): void {
    const isBrowser = isPlatformBrowser(this.platformId);
    if (isBrowser) {
      this.clipText();
    }
  }
  /**
   * Removes character from end of `innerText`
   * until text fits in element and appends
   * a ellipsis symbol to the end.
   *
   * @memberof EllipsisDirective
   */
  private clipText(): void {
    const el: HTMLElement = this.el.nativeElement;
    let text = el.innerText.split(' ');
    while (this.hasOverflow && text.length > 0) {
      text = text.slice(0, -1);
      el.innerText = `${text.join(' ')}${this.ellipsisChar}`;
    }
  }
}
