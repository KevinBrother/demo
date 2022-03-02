import { NgModule } from '@angular/core';

import { WelcomeRoutingModule } from './welcome-routing.module';

import { WelcomeComponent } from './welcome.component';
import { AntdModalComponent } from './components/antd-modal/antd-modal.component';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzIconModule } from 'ng-zorro-antd/icon'
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { CommonModule } from '@angular/common'

@NgModule({
  imports: [
    WelcomeRoutingModule,
    NzModalModule,
    NzIconModule,
    NzListModule,
    NzButtonModule,
    CommonModule,
    NzToolTipModule
  ],
  declarations: [WelcomeComponent, AntdModalComponent],
  exports: [WelcomeComponent]
})
export class WelcomeModule { }
