import { Component } from '@angular/core';

@Component({
  selector: 'sn-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  textContent = `
    Ullamco esse laborum dolor eiusmod laboris aliquip \
    aute aute aute. Ullamco velit ad laboris consequat. \
    Deserunt ad reprehenderit cupidatat do labore esse. \
    Occaecat nostrud mollit commodo ut ex elit fugiat et \
    reprehenderit quis. Fugiat aliquip excepteur quis \
    sunt sint consectetur duis elit quis ex fugiat quis \
    eiusmod. Ad pariatur ipsum nulla sunt est non ut id \
    et nisi culpa voluptate mollit ad. Tempor cupidatat \
    esse ad in cillum incididunt quis. Nulla cillum qui \
    aute labore quis ad cillum ullamco adipisicing qui \
    est nulla amet. Nisi consectetur sint nostrud est \
    duis dolore enim aliqua esse laboris Lorem.
  `;

  htmlContent = `
    Ullamco esse laborum dolor eiusmod laboris aliquip \
    aute aute aute. Ullamco velit ad laboris consequat. \
    <br> <br> \
    Deserunt ad reprehenderit cupidatat do labore esse. \
    Occaecat nostrud mollit commodo ut ex elit fugiat et \
    reprehenderit quis. Fugiat aliquip excepteur quis \
    sunt sint consectetur duis elit quis ex fugiat quis \
    eiusmod. Ad pariatur ipsum nulla sunt est non ut id \
    et nisi culpa voluptate mollit ad. Tempor cupidatat \
    esse ad in cillum incididunt quis. Nulla cillum qui \
    aute labore quis ad cillum ullamco adipisicing qui \
    est nulla amet. Nisi consectetur sint nostrud est \
    duis dolore enim aliqua esse laboris Lorem.
  `;
}
