import { NgModule } from '@angular/core';
import { WebpageHeaderComponent } from './webpage-header/webpage-header.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    WebpageHeaderComponent
  ],
  exports: [ WebpageHeaderComponent ],
  imports: [
    CommonModule
  ],
  providers: [],
  bootstrap: []
})
export class SharedModule { }
