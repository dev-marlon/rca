import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageMembersPage } from './page-members.page';

const routes: Routes = [
  {
    path: '',
    component: PageMembersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageMembersPageRoutingModule {}
