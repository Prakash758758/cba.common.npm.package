import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-common-package',
  template: `
    <p>
      common-package works!
    </p>
  `,
  styles: [
  ]
})
export class CommonPackageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
