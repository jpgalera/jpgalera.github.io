import { Component, Input } from '@angular/core';

@Component({
  selector: 'webpage-header',
  templateUrl: './webpage-header.component.html',
  styleUrls: ['./webpage-header.component.css']
})
export class WebpageHeaderComponent {

  @Input() theme = '';
  @Input() headerContents: string[] = [];
  @Input() pageName = '';
  @Input() headerIcon = '';

  themeSetting: string = "";
  constructor() {

  }
  ngOnInit(): void {
  }

}
