import { NgModule } from '@angular/core';

import { WelcomeRoutingModule } from './welcome-routing.module';

import { WelcomeComponent } from './welcome.component';
import { AntdModalComponent } from './components/antd-modal/antd-modal.component';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzIconModule } from 'ng-zorro-antd/icon'
import { NzButtonModule } from 'ng-zorro-antd/button';

@NgModule({
  imports: [WelcomeRoutingModule,
    NzModalModule,
    NzIconModule,
    NzButtonModule],
  declarations: [WelcomeComponent, AntdModalComponent],
  exports: [WelcomeComponent]
})
export class WelcomeModule { }
