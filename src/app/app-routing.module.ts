import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // {
  //   path: 'images',
  //   pathMatch: 'full',
  //   component: ImagesComponent
  // },
  // {
  //   path: '**',
  //   redirectTo: "/images"
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
