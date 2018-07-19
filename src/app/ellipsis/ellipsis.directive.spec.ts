import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { Component } from '@angular/core';
import { EllipsisDirective } from './ellipsis.directive';

// tslint:disable-next-line:max-line-length
const baseContent = `Ullamco esse laborum dolor eiusmod laboris aliquip aute aute aute. Ullamco velit ad laboris consequat. Deserunt ad reprehenderit cupidatat do labore esse. Occaecat nostrud mollit commodo ut ex elit fugiat et reprehenderit quis. Fugiat aliquip excepteur quis sunt sint consectetur duis elit quis ex fugiat quis eiusmod. Ad pariatur ipsum nulla sunt est non ut id et nisi culpa voluptate mollit ad. Tempor cupidatat esse ad in cillum incididunt quis. Nulla cillum qui aute labore quis ad cillum ullamco adipisicing qui est nulla amet. Nisi consectetur sint nostrud est duis dolore enim aliqua esse laboris Lorem.`;
const trimmedContent = `Ullamco esse laborum dolor eiusmod laboris aliquip aute aute aute. Ullamco velit ad laboris consequat. Deserunt ad reprehenderit cupidatat do labore esse. Occaecat nostrud mollit commodo ut ex elit fugiat et reprehenderit quis. Fugiat aliquip excepteur quis sunt sint consectetur duis elit…`;

const template = `
  <p class="static" snEllipsis>${baseContent}</p> \
  <p class="dynamic" snEllipsis>{{ dynamicContent }}</p> \
  <p class="html" snEllipsis [innerHTML]="htmlContent"></p> \
  <p class="too-small" snEllipsis>${baseContent}</p>
`;

@Component({
  selector: 'sn-test-component',
  template: template,
  styles: [
    `
      :host {
        display: block;
        font-family: arial, sans-serif;
      }
      p {
        height: 200px;
        overflow: hidden;
        padding: 1rem;
        width: 200px;
      }
      .too-small {
        font-size: 16px;
        height: 15px;
        line-height: 1;
      }
    `
  ]
})
class TestComponent {
  public dynamicContent: string;
  public htmlContent: string;
}

describe('EllipsisDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let component: TestComponent;
  let compiled: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TestComponent, EllipsisDirective]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;

    component.dynamicContent = baseContent;
    component.htmlContent = baseContent.split('.').join('. <br><br>');

    compiled = fixture.debugElement.nativeElement;
  });

  it('should clip static text', async(() => {
    fixture.detectChanges();
    expect(compiled.querySelector('.static').textContent).toEqual(
      trimmedContent
    );
  }));

  it('should clip dynamic text', async(() => {
    fixture.detectChanges();
    expect(compiled.querySelector('.dynamic').textContent).toEqual(
      trimmedContent
    );
  }));

  it('should clip HTML text', async(() => {
    fixture.detectChanges();
    expect(compiled.querySelector('.html').textContent)
      // tslint:disable-next-line:max-line-length
      .toEqual(
        `Ullamco esse laborum dolor eiusmod laboris aliquip aute aute aute. Ullamco velit ad laboris consequat. Deserunt ad reprehenderit cupidatat do labore esse. Occaecat nostrud mollit…`
      );
  }));

  it('should clip text and not loop infinitly', async(() => {
    fixture.detectChanges();
    expect(compiled.querySelector('.too-small').textContent).toEqual(`…`);
  }));
});
