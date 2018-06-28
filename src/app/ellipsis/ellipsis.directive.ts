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
   * until words fits in element and appends
   * a ellipsis symbol to the end.
   *
   * @memberof EllipsisDirective
   */
  private clipText(): void {
    if (!this.hasOverflow) {
      return;
    }

    const el: HTMLElement = this.el.nativeElement;
    let words             = el.innerText.split(' ');
    let text              = this.ellipsisChar;
    let wordsCount        = 0;
    let tailWordsCount    = words.length;

    while(true) {
      let leftTailWordsCount = Math.ceil(tailWordsCount / 2);
      let newText            = words.slice(0, wordsCount + leftTailWordsCount).join(' ') + this.ellipsisChar;

      el.innerText = newText;

      if (this.hasOverflow) {
        if (leftTailWordsCount == 1) {
          // We couldn't append the last word, text is right.
          el.innerText = text;
          break;
        }

        tailWordsCount = leftTailWordsCount;
        continue;
      }

      tailWordsCount -= leftTailWordsCount;
      if (tailWordsCount == 0) {
        // We could append the last word, new text is right.
        break;
      }

      text       = newText;
      wordsCount += leftTailWordsCount;
    }
  }
}
