import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PageMembersPageRoutingModule } from './page-members-routing.module';

import { PageMembersPage } from './page-members.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PageMembersPageRoutingModule
  ],
  declarations: [PageMembersPage]
})
export class PageMembersPageModule {}
