/**
 * Created by shubhampaul on 7/5/2017.
 */
import { NgModule } from '@angular/core';

import { HiddenDirective } from './hidden.directive';

@NgModule({
  declarations: [
    HiddenDirective
  ],
  exports: [
    HiddenDirective
  ]
})
export class SharedModule{}
