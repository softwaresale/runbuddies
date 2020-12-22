import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BuddiesComponent } from './buddies.component';

const routes: Routes = [{ path: '', component: BuddiesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BuddiesRoutingModule { }
